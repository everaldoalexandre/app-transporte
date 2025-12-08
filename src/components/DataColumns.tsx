"use client"

import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from "@tanstack/react-table"
import { Button } from "./ui/button";
import { ArrowUpDown, ChevronDown} from "lucide-react";
import React, { useEffect, useState } from "react";
import { DropdownMenuCheckboxItem, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "./ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Input } from "./ui/input";
import { ActionsCell} from "@/components/ActionsCell"
import { DemandaType } from "./Types";

export function DataTableDemo({data: initialData}: {data: DemandaType[]}) {
  const [demandas, setDemandas] = useState<DemandaType[]>(initialData);
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  useEffect(() => {
    fetchDemandas();
  }, []);

  async function fetchDemandas() {
    try {
        const res = await fetch('/api/demanda');
        if (!res.ok) throw new Error('Falha ao buscar demandas');
        
        const data = await res.json();
        
        setDemandas(data.demandas);
    } catch (err) {
        console.error(err);
    }
  }

  const columns: ColumnDef<DemandaType>[] = [
    {
      accessorKey: "statusDemanda",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            <ArrowUpDown/>
          </Button>
        )
      },
      cell: ({ row }) => <div className="">{row.getValue("statusDemanda")}</div>,
    },
    {
        accessorKey: "destino",
        header: "Destino",
    },
    {
      accessorKey: "dataHoraIda",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Data/Hora Ida
            <ArrowUpDown/>
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("dataHoraIda")}</div>,
    },
    {
        accessorKey: "pessoaSolicitante",
        header: "Solicitante",
    },
    {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => <ActionsCell demanda={row.original} onRefresh={fetchDemandas} />,
    }
    
]

  const table = useReactTable<DemandaType>({
    data: demandas,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const column = table.getColumn("statusDemanda")

  const statusOptions = [
    {label: "Todos", value:""},
    {label: "Aguardando", value: "Aguardando"},
    {label: "Agendada", value: "Agendada"},
    {label: "Finalizada", value: "Finalizada"},
  ]

  return (
    <div className="w-full mx-10">
      <div className="flex items-center py-4 gap-4">
         <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              {(table.getColumn("statusDemanda")?.getFilterValue() as string) ?? "Todos"}
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {statusOptions.map((status) =>
            
                  <DropdownMenuItem
                    key={status.value}
                    onClick={() => column?.setFilterValue(status.value)}
                  >
                    {status.label}
                  </DropdownMenuItem>
                )
              }
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          placeholder="Filtre por destino"
          value={(table.getColumn("destino")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("destino")?.setFilterValue(event.target.value)
          }
          className="max-w-50"
        />
        <Input
          placeholder="Filtre por data"
          value={(table.getColumn("dataHoraIda")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("dataHoraIda")?.setFilterValue(event.target.value)
          }
          className="max-w-35"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Colunas <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Não encontramos demandas.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredRowModel().rows.length} - Demandas.
        </div>
        <div className="text-sm text-muted-foreground flex-1">
          {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  )
}
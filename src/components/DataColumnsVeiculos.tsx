"use client"

import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from "@tanstack/react-table"
import { Button } from "./ui/button";
import { ArrowUpDown, ChevronDown} from "lucide-react";
import React, { useEffect, useState } from "react";
import { DropdownMenuCheckboxItem, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "./ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Input } from "./ui/input";
import { ActionsCellVeiculos} from "@/components/ActionsCellVeiculos"
import { NovoVeiculo } from "./NovoVeiculo";

export type Veiculos = {
  id: number;
  placaVeiculo: string;
  chassiVeiculo: string;
  renavamVeiculo: string;
  proprietarioVeiculo: string;
  crlvVeiculo: string;
  statusVeiculo: string;
};

export function DataTableVeiculos({data: initialData}: {data: Veiculos[]}) {
  const [openDialogNovoVeiculo, setOpenDialogNovoVeiculo] = useState(false);
  const [veiculos, setVeiculos] = useState<Veiculos[]>(initialData);
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  useEffect(() => {
    fetchVeiculos();
  }, []);

  async function fetchVeiculos() {
        try {
            const response = await fetch('/api/veiculo', { cache: 'no-store' });
            if (!response.ok) {
                console.error('Failed to fetch demandas:', response.statusText);
                return;
            }
            const data = await response.json();
            setVeiculos(data);
            
        } catch (error) {
            console.error('Error fetching veiculos:', error);
        }
    }

  const columns: ColumnDef<Veiculos>[] = [
    {
      accessorKey: "placaVeiculo",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Placa
            <ArrowUpDown/>
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("placaVeiculo")}</div>,
    },
    {
        accessorKey: "proprietarioVeiculo",
        header: "Proprietário",
    },
    {
        accessorKey: "chassiVeiculo",
        header: "Chassi",
    },
    {
        accessorKey: "renavamVeiculo",
        header: "Renavam",
    },
    {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => <ActionsCellVeiculos veiculo={row.original} onRefresh={fetchVeiculos}/>,
    }
    
]

  const table = useReactTable<Veiculos>({
    data: veiculos,
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

  const column = table.getColumn("placaVeiculo")

  const statusOptions = [
    {label: "Todos", value:""},
    {label: "SEDUC", value: "Aguardando"},
    {label: "Agendada", value: "Agendada"},
    {label: "Finalizada", value: "Finalizada"},
  ]

  return (
    <div className="w-full mx-10">
      <div className="flex items-center py-4 gap-4">
         <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              {(table.getColumn("placaVeiculo")?.getFilterValue() as string) ?? "Todos"}
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
          placeholder="Filtre por placa"
          value={(table.getColumn("placaVeiculo")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("placaVeiculo")?.setFilterValue(event.target.value)
          }
          className="max-w-50"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
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
        <Button onClick={() => setOpenDialogNovoVeiculo(true)}>
          Adicionar Veículo
        </Button>
        <NovoVeiculo openNovoVeiculo={openDialogNovoVeiculo}
        openChangeNovoVeiculo={setOpenDialogNovoVeiculo}
        onRefresh={fetchVeiculos}/>
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
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
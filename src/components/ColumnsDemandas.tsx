"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { Button } from "./ui/button";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  DropdownMenuCheckboxItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Input } from "./ui/input";
import { ActionsDemandas } from "@/components/ActionsDemandas";
import { DemandaType } from "./Types";
import Link from "next/link";
import { Tooltip } from "@radix-ui/react-tooltip";
import { TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function DataTableDemo({ data: initialData }: { data: DemandaType[] }) {
  const [demandas, setDemandas] = useState<DemandaType[]>(initialData);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [user, setUser] = useState(null);
  const [userAccessLevel, setUserAccessLevel] = useState(null);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  useEffect(() => {
    fetchDemandas();
  }, []);

  useEffect(() => {
    async function carregarUser() {
      try {
        const res = await fetch("/api/usuario");
        const data = await res.json();
        setUser(data.usuario);
        setUserAccessLevel(data.userAccessLevel);
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
      }
    }
    carregarUser();
  }, []);

  async function fetchDemandas() {
    try {
      const res = await fetch("/api/demanda");
      if (!res.ok) throw new Error("Falha ao buscar demandas");

      const data = await res.json();

      setDemandas(data.demandas);
    } catch (err) {
      console.error(err);
    }
  }

  const columns: ColumnDef<DemandaType>[] = [
    {
      accessorKey: "categoria",
      header: "Categoria",
    },
    {
      accessorKey: "statusDemanda",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="max-w-[100px] break-words whitespace-pre-wrap">
          {row.getValue("statusDemanda")}
        </div>
      ),
    },
    {
      accessorKey: "destino",
      header: "Destino",
      cell: ({ row }) => (
        <div className="max-w-[200px] break-words whitespace-pre-wrap">
          {row.getValue("destino")}
        </div>
      ),
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
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="max-w-[200px] break-words whitespace-pre-wrap">
          {row.getValue("dataHoraIda")}
        </div>
      ),
    },
    {
      accessorKey: "pessoaSolicitante",
      header: "Solicitante",
    },
    {
      id: "actions",
      header: "Ações",
      cell: ({ row }) => (
        <ActionsDemandas
          demanda={row.original}
          onRefresh={fetchDemandas}
          user={user}
          userAccessLevel={userAccessLevel}
        />
      ),
    },
  ];

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
  });

  const column = table.getColumn("statusDemanda");
  const column1 = table.getColumn("categoria");

  const categoriaOptions = [
    { label: "Todos", value: "" },
    { label: "InternoEscolar", value: "InternoEscolar" },
    { label: "InternoSeduc", value: "InternoSeduc" },
    { label: "Externo", value: "Externo" },
  ];

  const statusOptions = [
    { label: "Todos", value: "" },
    { label: "Aguardando", value: "Aguardando" },
    { label: "Agendada", value: "Agendada" },
    { label: "Finalizada", value: "Finalizada" },
  ];

  return (
    <div className="w-full mx-10">
      <div className="flex items-center py-4 gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  {(table.getColumn("categoria")?.getFilterValue() as string) ??
                    "Todos"}
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {categoriaOptions.map((categoria) => (
                  <DropdownMenuItem
                    key={categoria.value}
                    onClick={() => column1?.setFilterValue(categoria.value)}
                  >
                    {categoria.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copiar</p>
          </TooltipContent>
        </Tooltip>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              {(table.getColumn("statusDemanda")?.getFilterValue() as string) ??
                "Todos"}
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {statusOptions.map((status) => (
              <DropdownMenuItem
                key={status.value}
                onClick={() => column?.setFilterValue(status.value)}
              >
                {status.label}
              </DropdownMenuItem>
            ))}
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
          value={
            (table.getColumn("dataHoraIda")?.getFilterValue() as string) ?? ""
          }
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
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <div>
          <Button asChild>
            <Link href="/SolicitacaoDemandas">Cadastrar Demanda</Link>
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-md border break-words">
        <Table className="w-full">
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
                  );
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
  );
}

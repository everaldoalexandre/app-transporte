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
import { formatDateTimeBR } from "@/lib/date";

export function DataTableDemo({ data: initialData }: { data: DemandaType[] }) {
  const [demandas, setDemandas] = useState<DemandaType[]>(initialData);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [user, setUser] = useState(null);
  const [userAccessLevel, setUserAccessLevel] = useState(null);
  const [dateRange, setDateRange] = useState<{
    from?: string;
    to?: string;
  }>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([
    {
      id: "statusDemanda",
      value: ["Aguardando"],
    },
  ]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      categoria: true,
      statusDemanda: true,
      destino: true,
      dataHoraIda: true,
      pessoaSolicitante: true,
      actions: true,
      demandaDetalhe: false,
    });
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
      filterFn: (row, columnId, filterValue: string[]) => {
        if (!filterValue || filterValue.length === 0) return true;

        return filterValue.includes(row.getValue(columnId));
      },
      cell: ({ row }) => {
        const status = row.getValue("statusDemanda") as string;

        const statusStyles: Record<string, string> = {
          Aguardando: "bg-yellow-100 text-gray-800 border-gray-400",
          Agendada: "bg-blue-100 text-gray-800 border-gray-400",
          Finalizada: "bg-green-100 text-gray-800 border-gray-400",
          Cancelada: "bg-red-100 text-gray-800 border-gray-400",
        };

        return (
          <span
            className={`
          px-2 py-1 rounded-md text-xs font-semibold border
          ${statusStyles[status] ?? "bg-gray-100 text-gray-700 border-gray-300"}
        `}
          >
            {status}
          </span>
        );
      },
    },
    {
      accessorKey: "destino",
      header: "Destino",
      cell: ({ row }) => (
        <div className="max-w-[200px] min-w-[100px] break-words whitespace-pre-wrap">
          {row.getValue("destino")}
        </div>
      ),
    },
    {
      accessorKey: "demandaDetalhe",
      header: "Detalhe",
      cell: ({ row }) => (
        <div className="max-w-[500px] min-w-[100px] break-words whitespace-pre-wrap">
          {row.getValue("demandaDetalhe")}
        </div>
      ),
    },
    {
      accessorKey: "dataHoraIda",
      header: ({ column }) => (
        <Button
          className="max-w-[120px]"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data/Hora Ida
          <ArrowUpDown />
        </Button>
      ),
      filterFn: (row, columnId, value) => {
        if (!value?.from && !value?.to) return true;

        const rowDate = new Date(row.getValue(columnId));
        const from = value.from ? new Date(value.from + "T00:00:00") : null;
        const to = value.to ? new Date(value.to + "T23:59:59.999") : null;

        if (from && rowDate < from) return false;
        if (to && rowDate > to) return false;

        return true;
      },
      cell: ({ row }) => (
        <div className="max-w-[120px] flex justify-center break-words whitespace-pre-wrap">
          {formatDateTimeBR(row.getValue("dataHoraIda"))}
        </div>
      ),
    },
    {
      accessorKey: "pessoaSolicitante",
      header: "Solicitante",
      cell: ({ row }) => (
        <div className="max-w-[150px] truncate">
          {row.getValue("pessoaSolicitante")}
        </div>
      ),
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

  function updateDateFilter(range: { from?: string; to?: string }) {
    setDateRange(range);
    table.getColumn("dataHoraIda")?.setFilterValue(range);
  }

  const column = table.getColumn("statusDemanda");
  const column1 = table.getColumn("categoria");

  const categoriaOptions = [
    { label: "Todos", value: "" },
    { label: "InternoEscolar", value: "InternoEscolar" },
    { label: "InternoSeduc", value: "InternoSeduc" },
    { label: "Externo", value: "Externo" },
  ];

  const statusOptions = [
    { label: "Aguardando", value: "Aguardando" },
    { label: "Agendada", value: "Agendada" },
    { label: "Finalizada", value: "Finalizada" },
    { label: "Cancelada", value: "Cancelada" },
  ];

  const statusFilter = (column?.getFilterValue() as string[]) ?? [];

  return (
    <div className="mt-4 w-[95vw] max-w-4xl max-h-[90vh]">
      <div className="mb-4 flex sm:flex-row grid-cols-2 gap-3">
        <div className="flex flex-col sm:flex-row gap-2 w-1/2">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                {statusFilter.length
                  ? `${statusFilter.length} Selecionado(s)`
                  : "Status"}{" "}
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => {
                  const column = table.getColumn("statusDemanda");
                  if (!column) return;

                  column.setFilterValue(statusOptions.map((s) => s.value));
                }}
              >
                Selecionar todos
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => {
                  const column = table.getColumn("statusDemanda");
                  if (!column) return;

                  column.setFilterValue(undefined);
                }}
              >
                Limpar todos
              </DropdownMenuItem>

              <div className="my-1 h-px bg-muted" />

              {statusOptions.map((status) => {
                const column = table.getColumn("statusDemanda");
                const filterValue =
                  (column?.getFilterValue() as string[]) ?? [];

                const isChecked = filterValue.includes(status.value);

                return (
                  <DropdownMenuCheckboxItem
                    key={status.value}
                    className="capitalize"
                    checked={isChecked}
                    onCheckedChange={(checked) => {
                      if (!column) return;
                      let newFilter: string[];

                      if (checked) {
                        newFilter = [...filterValue, status.value];
                      } else {
                        newFilter = filterValue.filter(
                          (value) => value !== status.value
                        );
                      }

                      column.setFilterValue(
                        newFilter.length > 0 ? newFilter : undefined
                      );
                    }}
                  >
                    {status.label}
                  </DropdownMenuCheckboxItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <Input
            placeholder="Filtre por destino"
            value={
              (table.getColumn("destino")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("destino")?.setFilterValue(event.target.value)
            }
            className="max-w-50 ml-auto"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-1/2">
          <Input
            type="date"
            value={dateRange.from ?? ""}
            onChange={(e) => {
              updateDateFilter({
                from: e.target.value,
                to: dateRange.to,
              });
            }}
            className="max-w-35 ml-auto"
          />
          <Input
            type="date"
            min={dateRange.from}
            value={dateRange.to ?? ""}
            onChange={(e) => {
              updateDateFilter({
                from: dateRange.from,
                to: e.target.value,
              });
            }}
            className="max-w-35 ml-auto"
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
          <div className="ml-auto">
            <Button asChild>
              <Link href="/SolicitacaoDemandas">Cadastrar Demanda</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full rounded-md border">
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
      <div className="flex gap-2 mb-4">
        <Button
          variant="outline"
          onClick={() =>
            window.open(
              `/api/demanda/export/excel?from=${dateRange.from ?? ""}&to=${dateRange.to ?? ""}`
            )
          }
        >
          Exportar Excel
        </Button>
      </div>
    </div>
  );
}

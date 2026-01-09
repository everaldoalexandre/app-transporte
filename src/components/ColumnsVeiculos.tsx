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
import { ActionsVeiculos } from "@/components/ActionsVeiculos";
import { NovoVeiculo } from "./NovoVeiculo";
import { VeiculoType } from "@/components/Types";

export function DataTableVeiculos({
  data: initialData,
}: {
  data: VeiculoType[];
}) {
  const [openDialogNovoVeiculo, setOpenDialogNovoVeiculo] = useState(false);
  const [veiculos, setVeiculos] = useState<VeiculoType[]>(initialData);
  const [user, setUser] = useState(null);
  const [userAccessLevel, setUserAccessLevel] = useState(null);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  useEffect(() => {
    fetchVeiculos();
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

  async function fetchVeiculos() {
    try {
      const response = await fetch("/api/veiculo", { cache: "no-store" });
      if (!response.ok) {
        console.error("Falha ao buscar veiculos:", response.statusText);
        return;
      }
      const data = await response.json();
      setVeiculos(data.veiculos);
      setUserAccessLevel(data.userAccessLevel);
    } catch (error) {
      console.error("Erro o buscar veiculos:", error);
    }
  }

  const columns: ColumnDef<VeiculoType>[] = [
    {
      id: "modelo",
      accessorKey: "modelo.modelo",
      header: ({ column }) => {
        return (
          <div className="flex justify-center">
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Modelo
              <ArrowUpDown />
            </Button>
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="flex justify-center break-words whitespace-pre-wrap">
          {(row.original as any).modelo?.modelo || ""}
        </div>
      ),
    },
    {
      accessorKey: "placaVeiculo",
      header: () => {
        return <div className="flex justify-center">Placa</div>;
      },
      cell: ({ row }) => (
        <div className="flex justify-center break-words whitespace-pre-wrap">
          {row.getValue("placaVeiculo")}
        </div>
      ),
    },
    {
      accessorKey: "proprietarioVeiculo",
      header: () => {
        return <div className="flex justify-center">Proprietário</div>;
      },
      cell: ({ row }) => (
        <div className="flex justify-center break-words whitespace-pre-wrap">
          {row.getValue("proprietarioVeiculo")}
        </div>
      ),
    },
    {
      id: "actions",
      header: () => {
        return <div className="flex justify-center">Ações</div>;
      },
      cell: ({ row }) => (
        <div className="flex justify-center">
          <ActionsVeiculos
            veiculo={row.original}
            onRefresh={fetchVeiculos}
            user={user}
            userAccessLevel={userAccessLevel}
          />
        </div>
      ),
    },
  ];

  const table = useReactTable<VeiculoType>({
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
  });

  const filterModelo = table.getColumn("modelo");

  const modeloOptions = [
    { label: "Todos", value: "" },
    { label: "Carro", value: "Carro" },
    { label: "Caminhão", value: "Caminhão" },
    { label: "Ônibus", value: "Ônibus" },
    { label: "Micro-Ônibus", value: "Micro-Ônibus" },
    { label: "Van", value: "Van" },
    { label: "Moto", value: "Moto" },
  ];

  return (
    <div className="mt-4 w-[95vw] max-w-4xl max-h-[90vh]">
      <div className="mb-4 flex sm:flex-row grid-cols-2 gap-3">
        <div className="flex flex-col sm:flex-row gap-2 w-1/2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                {(table.getColumn("modelo")?.getFilterValue() as string) ??
                  "Todos"}
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {modeloOptions.map((modelo) => (
                <DropdownMenuItem
                  key={modelo.value}
                  onClick={() => filterModelo?.setFilterValue(modelo.value)}
                >
                  {modelo.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            placeholder="Filtre por placa"
            value={
              (table.getColumn("placaVeiculo")?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn("placaVeiculo")
                ?.setFilterValue(event.target.value)
            }
            className="max-w-50"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-1/2">
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
          <Button onClick={() => setOpenDialogNovoVeiculo(true)}>
            Adicionar Veículo
          </Button>
          <NovoVeiculo
            openNovoVeiculo={openDialogNovoVeiculo}
            openChangeNovoVeiculo={setOpenDialogNovoVeiculo}
            onRefresh={fetchVeiculos}
          />
        </div>
      </div>
      <div className="w-full rounded-md border">
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
                  Não encontramos veículos.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredRowModel().rows.length} - Veículos
        </div>
        <div className="text-sm text-muted-foreground flex-1">
          {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
        </div>
        <div className="space-x-2">
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

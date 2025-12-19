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
import { ActionsMotorista } from "@/components/ActionsMotoristas";
import { MotoristaType } from "@/components/Types";
import { NovoMotorista } from "./NovoMotorista";

export function TableMotoristas({
  data: initialData,
}: {
  data: MotoristaType[];
}) {
  const [openDialogNovoMotorista, setOpenDialogNovoMotorista] = useState(false);
  const [motoristas, setMotoristas] = useState<MotoristaType[]>(initialData);
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
    fetchMotoristas();
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

  async function fetchMotoristas() {
    try {
      const response = await fetch("/api/motorista", { cache: "no-store" });
      if (!response.ok) {
        console.error("Falha ao buscar motoristas:", response.statusText);
        return;
      }
      const data = await response.json();
      setMotoristas(data.motoristas);
    } catch (error) {
      console.error("Erro o buscar motoristas:", error);
    }
  }

  const columns: ColumnDef<MotoristaType>[] = [
    {
      id: "nome",
      accessorKey: "nome",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nome
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="max-w-[250px] break-words whitespace-pre-wrap">
          {(row.original as any).nome || ""}
        </div>
      ),
    },
    {
      accessorKey: "contato",
      header: "Contato",
      cell: ({ row }) => (
        <div className="max-w-[100px] break-words whitespace-pre-wrap">
          {(row.original as any).contato || ""}
        </div>
      ),
    },
    {
      accessorKey: "secretaria.nome",
      header: "Secretaria",
      cell: ({ row }) => (
        <div className="max-w-[100px] break-words whitespace-pre-wrap">
          {(row.original as any).secretaria.nome || ""}
        </div>
      ),
    },
    {
      id: "actions",
      header: "Ações",
      cell: ({ row }) => (
        <ActionsMotorista
          motorista={row.original}
          onRefresh={fetchMotoristas}
          user={user}
          userAccessLevel={userAccessLevel}
        />
      ),
    },
  ];

  const table = useReactTable<MotoristaType>({
    data: motoristas,
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

  return (
    <div className="mt-4 w-[95vw] max-w-4xl max-h-[90vh]">
      <div className="flex items-center py-4 gap-4">
        <Input
          placeholder="Filtre por nome"
          value={(table.getColumn("nome")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("nome")?.setFilterValue(event.target.value)
          }
          className="max-w-50"
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
        <Button onClick={() => setOpenDialogNovoMotorista(true)}>
          Cadastrar Motorista
        </Button>
        <NovoMotorista
          openNovoMotorista={openDialogNovoMotorista}
          openChangeNovoMotorista={setOpenDialogNovoMotorista}
          onRefresh={fetchMotoristas}
        />
      </div>
      <div className="overflow-x-auto rounded-md border">
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
                  Não encontramos motoristas.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredRowModel().rows.length} - Motoristas
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

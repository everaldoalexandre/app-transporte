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
import { ActionsUsuario } from "@/components/ActionsUsuarios";
import { UsuarioType } from "@/components/Types";
import { NovoUsuario } from "./NovoUsuario";

export function TableUsuarios({ data: initialData }: { data: UsuarioType[] }) {
  const [openDialogNovoUsuario, setOpenDialogNovoUsuario] = useState(false);
  const [usuarios, setUsuarios] = useState<UsuarioType[]>(initialData);
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
    fetchUsuarios();
  }, []);

  useEffect(() => {
    async function carregarUser() {
      try {
        const res = await fetch("/api/usuario");
        const data = await res.json();
        setUser(data.usuarios);
        setUserAccessLevel(data.userAccessLevel);
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
      }
    }
    carregarUser();
  }, []);

  async function fetchUsuarios() {
    try {
      const response = await fetch("/api/usuario", { cache: "no-store" });
      if (!response.ok) {
        console.error("Falha ao buscar usuarios:", response.statusText);
        return;
      }
      const data = await response.json();
      setUsuarios(data.usuarios);
    } catch (error) {
      console.error("Erro o buscar usuarios:", error);
    }
  }

  const columns: ColumnDef<UsuarioType>[] = [
    {
      id: "name",
      accessorKey: "name",
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
        <div className="max-w-[200px] sm:max-w-[250px] break-words whitespace-pre-wrap">
          {(row.original as any).name || ""}
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: "E-mail",
      cell: ({ row }) => (
        <div className="max-w-[130px] sm:max-w-[200px] break-words whitespace-pre-wrap">
          {(row.original as any).email || ""}
        </div>
      ),
    },
    {
      accessorFn: (row) => row.secretarias?.[0]?.secretaria?.nome ?? "",
      header: "Secretaria",
    },
    {
      id: "actions",
      header: "Ações",
      cell: ({ row }) => (
        <ActionsUsuario
          usuario={row.original}
          onRefresh={fetchUsuarios}
          user={user}
          userAccessLevel={userAccessLevel}
        />
      ),
    },
  ];

  const table = useReactTable<UsuarioType>({
    data: usuarios,
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

  const filterModelo = table.getColumn("name");

  return (
    <div className="mt-4 w-[95vw] max-w-4xl max-h-[90vh]">
      <div className="mb-4 flex sm:flex-row grid-cols-2 gap-3">
        <Input
          placeholder="Filtre por nome"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
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
        <Button onClick={() => setOpenDialogNovoUsuario(true)}>
          Cadastrar Usuario
        </Button>
        <NovoUsuario
          openNovoUsuario={openDialogNovoUsuario}
          openChangeNovoUsuario={setOpenDialogNovoUsuario}
          onRefresh={fetchUsuarios}
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
                  Não encontramos usuários.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredRowModel().rows.length} - Usuários
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

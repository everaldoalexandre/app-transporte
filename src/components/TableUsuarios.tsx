"use client";

import { useState } from "react";
import { UsuarioType } from "@/components/Types";
import { TableUsuarios } from "./ColumnsUsuarios";

export default function UsuariosTable() {
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);

  return <TableUsuarios data={usuarios} />;
}

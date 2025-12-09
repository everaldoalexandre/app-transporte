"use client";

import { useState } from "react";
import { TableMotoristas } from "./ColumnsMotorista";
import { Motorista } from "@/generated/prisma";

export default function MotoristasTable() {
  const [motoristas, setMotoristas] = useState<Motorista[]>([]);

  return <TableMotoristas data={motoristas} />;
}

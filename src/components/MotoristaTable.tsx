"use client";

import { useState } from "react";
import { TableMotoristas } from "./ColumnsMotorista";
import { MotoristaType } from "@/components/Types";

export default function MotoristasTable() {
  const [motoristas, setMotoristas] = useState<MotoristaType[]>([]);

  return <TableMotoristas data={motoristas} />;
}

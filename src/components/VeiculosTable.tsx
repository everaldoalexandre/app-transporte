"use client";

import { useState } from "react";
import { DataTableVeiculos } from "./DataColumnsVeiculos";
import { VeiculoType } from "@/components/Types";

export default function VeiculosTable() {
  const [veiculos, setVeiculos] = useState<VeiculoType[]>([]);

  return <DataTableVeiculos data={veiculos} />;
}

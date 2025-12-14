"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { VeiculoModelo } from "@/generated/prisma";

export function DropModeloVeiculo({
  modeloId,
  setModeloId,
}: {
  modeloId: string;
  setModeloId: (value: string) => void;
}) {
  const [modelos, setModelos] = useState<VeiculoModelo[]>([]);

  useEffect(() => {
    async function fetchModelos() {
      try {
        const response = await fetch("/api/modelos-veiculo", {
          cache: "no-store",
        });
        if (!response.ok) {
          console.error("Falha ao carregar modelos:", response.statusText);
          return;
        }
        const data = await response.json();
        setModelos(data.modelos);
      } catch (error) {
        console.error("Erro ao carregar modelos:", error);
      }
    }

    fetchModelos();
  }, []);

  const modeloSelecionado = modelos.find((m) => m.id === modeloId);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {modeloSelecionado?.modelo ?? "Selecione o modelo"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Modelo Veículo</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={modeloId} onValueChange={setModeloId}>
          {modelos.map((m) => (
            <DropdownMenuRadioItem key={m.id} value={m.id}>
              {m.modelo}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

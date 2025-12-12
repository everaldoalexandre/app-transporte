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
import { MotoristaType } from "@/components/Types";

export function DropMotoristaSecretaria({
  secretariaId,
  setSecretariaId,
}: {
  secretariaId: string;
  setSecretariaId: (value: string) => void;
}) {
  const [secretarias, setsecretarias] = useState<MotoristaType[]>([]);

  useEffect(() => {
    async function fetchModelos() {
      try {
        const response = await fetch("/api/secretarias", {
          cache: "no-store",
        });
        if (!response.ok) {
          console.error("Falha ao carregar modelos:", response.statusText);
          return;
        }
        const data = await response.json();
        setsecretarias(data.secretarias);
      } catch (error) {
        console.error("Erro ao carregar modelos:", error);
      }
    }

    fetchModelos();
  }, []);

  const secretariaSelecionada = secretarias.find((s) => s.id === secretariaId);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {secretariaSelecionada ? secretariaSelecionada.nome : "Secretaria"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Secretaria</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={secretariaId}
          onValueChange={setSecretariaId}
        >
          {secretarias.map((s) => (
            <DropdownMenuRadioItem key={s.id} value={s.id}>
              {s.nome}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

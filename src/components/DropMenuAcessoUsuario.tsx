"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AcessoType } from "@/components/Types";

export function DropMenuAcessos({
  acesso,
  setAcesso,
}: {
  acesso: string[];
  setAcesso: (ids: string[]) => void;
}) {
  const [acessos, setAcessos] = useState<AcessoType[]>([]);

  useEffect(() => {
    async function fetchSecretarias() {
      try {
        const response = await fetch("/api/usuario", {
          cache: "no-store",
        });
        if (!response.ok) {
          console.error("Falha ao carregar acessos:", response.statusText);
          return;
        }
        const data = await response.json();
        setAcessos(data.acesso);
      } catch (error) {
        console.error("Erro ao carregar acessos:", error);
      }
    }

    fetchSecretarias();
  }, []);

  const handleToggle = (acessoId: string) => {
    if (acesso.includes(acessoId)) {
      setAcesso(acesso.filter((id) => id !== acessoId));
    } else {
      setAcesso([...acesso, acessoId]);
    }
  };

  const selectedAcessos = acessos.filter((s) => acesso.includes(s.id));

  const label =
    selectedAcessos.length === 0
      ? "Selecione acesso(s)"
      : selectedAcessos.length === 1
        ? selectedAcessos[0].nivel
        : `${selectedAcessos.length} acessos selecionadas`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Acessos</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-64 overflow-y-auto">
          {acessos.map((acessoItem) => (
            <DropdownMenuCheckboxItem
              key={acessoItem.id}
              checked={acesso.includes(acessoItem.id)}
              onCheckedChange={() => handleToggle(acessoItem.id)}
            >
              {acessoItem.nivel}
            </DropdownMenuCheckboxItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

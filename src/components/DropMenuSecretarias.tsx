"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SecretariaType } from "@/components/Types";

export function DropMenuSecretaria({
  secretariaIds,
  setSecretariaIds,
}: {
  secretariaIds: string | null;
  setSecretariaIds: (ids: string | null) => void;
}) {
  const [secretarias, setsecretarias] = useState<SecretariaType[]>([]);

  useEffect(() => {
    async function fetchSecretarias() {
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

    fetchSecretarias();
  }, []);

  const selectedSecretaria = secretarias.find((s) => s.id === secretariaIds);
  const label = selectedSecretaria?.nome || "Selecione a Secretaria";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{label}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Secretaria</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={secretariaIds || ""}
          onValueChange={(value) => setSecretariaIds(value || null)}
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

export function DropMenuSecretarias({
  secretariaIds,
  setSecretariaIds,
}: {
  secretariaIds: string[];
  setSecretariaIds: (ids: string[]) => void;
}) {
  const [secretarias, setSecretarias] = useState<SecretariaType[]>([]);

  useEffect(() => {
    async function fetchSecretarias() {
      try {
        const response = await fetch("/api/secretarias", {
          cache: "no-store",
        });
        if (!response.ok) {
          console.error("Falha ao carregar secretarias:", response.statusText);
          return;
        }
        const data = await response.json();
        setSecretarias(data.secretarias);
      } catch (error) {
        console.error("Erro ao carregar secretarias:", error);
      }
    }

    fetchSecretarias();
  }, []);

  const handleToggle = (secretariaId: string) => {
    if (secretariaIds.includes(secretariaId)) {
      setSecretariaIds(secretariaIds.filter((id) => id !== secretariaId));
    } else {
      setSecretariaIds([...secretariaIds, secretariaId]);
    }
  };

  const selectedSecretarias = secretarias.filter((s) =>
    secretariaIds.includes(s.id)
  );

  const label =
    selectedSecretarias.length === 0
      ? "Selecione secretaria(s)"
      : selectedSecretarias.length === 1
        ? selectedSecretarias[0].nome
        : `${selectedSecretarias.length} secretarias selecionadas`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Secretarias</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-64 overflow-y-auto">
          {secretarias.map((secretaria) => (
            <DropdownMenuCheckboxItem
              key={secretaria.id}
              checked={secretariaIds.includes(secretaria.id)}
              onCheckedChange={() => handleToggle(secretaria.id)}
            >
              {secretaria.nome}
            </DropdownMenuCheckboxItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

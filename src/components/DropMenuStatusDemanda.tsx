"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropMenu({
  statusDemanda,
  setStatusDemanda,
}: {
  statusDemanda: string;
  setStatusDemanda: (value: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{statusDemanda}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Status Demanda</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={statusDemanda}
          onValueChange={setStatusDemanda}
        >
          <DropdownMenuRadioItem value="Aguardando">
            Aguardando
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Agendado">
            Agendado
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Finalizado">
            Finalizado
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

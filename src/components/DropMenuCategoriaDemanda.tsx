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

export function DropMenuCategoriaDemanda({
  categoria,
  setCategoria,
}: {
  categoria: string;
  setCategoria: (value: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{categoria}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Categoria da Demanda</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={categoria} onValueChange={setCategoria}>
          <DropdownMenuRadioItem value="InternoSeduc">
            Interna - SEDUC
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="InternoEscolar">
            Interna - ESCOLAR
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Externo">Externa</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface AlertVerificacaoEmailProps {
  open: boolean;
  onClose: () => void;
}

export function AlertVerificacaoEmail({
  open,
  onClose,
}: AlertVerificacaoEmailProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader>
          <div className="flex justify-center mb-2">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
          <DialogTitle>Solicitação enviada!</DialogTitle>
          <DialogDescription>
            Sua demanda foi registrada com sucesso e um e-mail de confirmação
            foi enviado para o endereço informado.
            <p className="text-red-600 text-sm mt-2">
              Caso não localize o e-mail, verifique também a caixa de SPAM ou
              Lixo Eletrônico.
            </p>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-center">
          <Button onClick={onClose}>Fechar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

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
import { BellRing, CheckCircle2 } from "lucide-react";
import { useState } from "react";

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

export function AlertAvisoInicial({
  open,
  onClose,
}: AlertVerificacaoEmailProps) {
  const [canClose, setCanClose] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;

    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;

    if (isAtBottom) {
      setCanClose(true);
    }
  };
  return (
    <Dialog open={open} onOpenChange={canClose ? onClose : undefined}>
      <DialogContent className="w-[95vw] max-w-md max-h-[85vh] flex flex-col p-0 [&>button]:hidden">
        <DialogHeader className="p-3 text-center border-b">
          <div className="flex justify-center">
            <BellRing className="h-8 w-8 text-red-600" />
          </div>
          <DialogTitle className="flex justify-center text-lg">
            Aviso!
          </DialogTitle>
        </DialogHeader>
        <DialogDescription asChild>
          <div
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto px-6 py-4 text-sm leading-relaxed whitespace-pre-line"
          >
            {`
                Bem-vindo(a) ao Formulário de Solicitação de Atendimento da Frota Oficial da Prefeitura de Caruaru (SEDUC).

                📅 Atualização: 13/10/2025

                📌 Horários para demandas do tipo "Aula de Campo"
                🕗 Manhã: 8h30 – 11h
                🕑 Tarde: 13h – 15h

                📌 Regras de Solicitação
                ✅ Cada escola pode solicitar 1 atendimento por mês, com limite de 60 alunos (1 ônibus de 60 lugares).
                ⚠️ O não cumprimento dos horários ou do limite de alunos resultará na suspensão da escola para novas solicitações no mês seguinte.
                📆 O agendamento deve ocorrer com, pelo menos, 72 horas úteis de antecedência.

                🚨 ATENÇÃO – Diretrizes para Gestores
                1️⃣ Todos os agendamentos estão sujeitos a cancelamento ou remarcação.
                2️⃣ As solicitações devem seguir rigorosamente:
                  ⏰ Horários estabelecidos
                  🚌 Capacidade máxima do veículo
                  🔇 Manutenção da ordem dentro do ônibus
                  🤝 Tratamento respeitoso e suporte ao motorista

                3️⃣ Solicitações para transporte fora da cidade estão liberadas, porém limitadas (veículos de 44 passageiros).

                4️⃣ Penalidades:
                O descumprimento de qualquer regra acima implicará no bloqueio da escola para novas solicitações no mês seguinte.

                5️⃣ Demandas SEDUC
                ❌ NÃO SOLICITAR transporte para as seguintes datas:
                `}
          </div>
        </DialogDescription>

        <DialogFooter className="flex justify-center">
          <Button onClick={onClose}>
            {canClose ? "Fechar" : "Leia todo o conteúdo para liberar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

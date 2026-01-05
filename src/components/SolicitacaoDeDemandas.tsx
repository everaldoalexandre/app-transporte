"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Car } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AlertAvisoInicial, AlertVerificacaoEmail } from "./AlertModelos";

interface EmailConfirmacao {
  from: string;
  to: string[];
  subject: string;
  content: string;
}

export function SolicitacaoDemandaForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [emailSolicitante, setEmailSolicitante] = useState("");
  const [demandaDetalhe, setDemandaDetalhe] = useState("");
  const [pessoaSolicitante, setPessoaSolicitante] = useState("");
  const [secretariaSolicitante, setSecretariaSolicitante] = useState("");
  const [destino, setDestino] = useState("");
  const [dataHoraIda, setDataHoraIda] = useState("");
  const [dataHoraVolta, setDataHoraVolta] = useState("");
  const [origem, setOrigem] = useState("");
  const [contato, setContato] = useState("");
  const [lotacao, setLotacao] = useState("");
  const [alertVerificacaoEmail, setAlertVerificacaoEmail] = useState(false);
  const [alertAvisoInicial, setAlertAvisoInicial] = useState(false);
  const [statusDemanda, setStatusDemanda] = useState("Aguardando");
  const [secretariaId, setSecretariaId] = useState(
    "7280c84c-27a7-4c81-bb58-238ae42d0c63"
  );
  const [demandaSolicitada, setDemandaSolicitada] = useState(false);

  useEffect(() => {
    setAlertAvisoInicial(true);
  }, []);

  const envioEmaill = async (email: string, nome: string, detalhe: string) => {
    try {
      if (!email || !email.trim()) {
        console.log("Por favor, preencha o campo de email.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        console.log("Por favor, informe um email válido.");
        return;
      }

      const emailData = {
        from: "no-reply@gestaotransporte.site",
        to: [email.trim()],
        subject: "Confirmação de Solicitação de Demanda",
        nome,
        detalhe,
        dataHoraIda: new Date(dataHoraIda).toLocaleString("pt-BR"),
        dataHoraVolta: new Date(dataHoraVolta).toLocaleString("pt-BR"),
        lotacao: Number(lotacao),
        origem,
        destino,
        contato,
      };

      const response = await fetch("/api/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Email de confirmação enviado com sucesso!");
        toast.success("Email de confirmação enviado com sucesso!");
      } else {
        console.error("Erro ao enviar email de confirmação.", result.error);
        toast.error("Erro ao enviar email de confirmação.");
      }
    } catch (error) {
      console.error("Erro ao enviar email de confirmação:", error);
      toast.error("Erro ao enviar email de confirmação.");
    }
  };

  async function adicionarDemanda(e: React.FormEvent) {
    e.preventDefault();

    if (demandaSolicitada) return;
    setDemandaSolicitada(true);

    if (
      !emailSolicitante ||
      !demandaDetalhe ||
      !pessoaSolicitante ||
      !secretariaSolicitante ||
      !destino ||
      !dataHoraIda ||
      !dataHoraVolta ||
      !origem ||
      !contato ||
      !lotacao
    ) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailSolicitante)) {
      toast.error("Por favor, informe um email válido.");
      console.log("Por favor, informe um email válido.");
      return;
    }

    if (contato.length !== 11) {
      toast.error("O contato deve conter 11 números.");
      return;
    }
    try {
      const novaDemanda = {
        emailSolicitante,
        demandaDetalhe,
        pessoaSolicitante,
        secretariaSolicitante,
        secretariaId,
        destino,
        dataHoraIda: new Date(dataHoraIda).toISOString(),
        dataHoraVolta: new Date(dataHoraVolta).toISOString(),
        origem,
        contato,
        statusDemanda,
        lotacao: Number(lotacao),
        kmRodado: 0,
        origemDemanda: "EXTERNA",
      };
      const response = await fetch("/api/demanda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ novaDemanda }),
      });

      if (response.ok) {
        toast.success("Demanda solicitada com sucesso!");

        setAlertVerificacaoEmail(true);

        await envioEmaill(emailSolicitante, pessoaSolicitante, demandaDetalhe);

        setEmailSolicitante("");
        setDemandaDetalhe("");
        setPessoaSolicitante("");
        setSecretariaSolicitante("");
        setDestino("");
        setDataHoraIda("");
        setDataHoraVolta("");
        setOrigem("");
        setContato("");
        setLotacao("");
        setStatusDemanda("Aguardando");
        setSecretariaId("");
      } else {
        toast.error("Erro ao solicitar demanda.");
      }
    } catch (error) {
      toast.error("Erro ao solicitar demanda.");
      console.error("Erro ao solicitar demanda:", error);
    } finally {
      setTimeout(() => {
        setDemandaSolicitada(false);
      }, 3000);
    }
  }
  return (
    <Card className="mx-4 sm:mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="flex justify-center items-center text-2xl font-bold">
          <Car className="mr-2" />
          Solicitação de Transporte
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={adicionarDemanda} className="space-y-6">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
            <AlertVerificacaoEmail
              open={alertVerificacaoEmail}
              onClose={() => setAlertVerificacaoEmail(false)}
            />
            <AlertAvisoInicial
              open={alertAvisoInicial}
              onClose={() => setAlertAvisoInicial(false)}
            />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 md:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={emailSolicitante}
                  onChange={(e) => setEmailSolicitante(e.target.value)}
                  placeholder="Informe o seu e-mail"
                  className="border rounded-md p-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="pessoaSolicitante">Nome do Solicitante</Label>
                <Input
                  id="pessoaSolicitante"
                  placeholder="Informe o nome da pessoa solicitante"
                  value={pessoaSolicitante}
                  onChange={(e) => setPessoaSolicitante(e.target.value)}
                  type="text"
                  className="border rounded-md p-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="secretariaSolicitante">
                  Secretaria ou Setor Solicitante
                </Label>
                <Input
                  id="secretariaSolicitante"
                  placeholder="Informe o setor solicitante"
                  type="text"
                  value={secretariaSolicitante}
                  onChange={(e) => setSecretariaSolicitante(e.target.value)}
                  className="border rounded-md p-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="lotacao">Lotação</Label>
                <Input
                  id="lotacao"
                  placeholder="Informe o quantitativo de pessoas"
                  type="number"
                  value={lotacao}
                  onChange={(e) => setLotacao(e.target.value)}
                  className="border rounded-md p-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contato">Contato</Label>
                <Input
                  id="contato"
                  placeholder="Informe contato de WhatsApp com DDD "
                  type="tel"
                  value={contato}
                  onChange={(e) =>
                    setContato(e.target.value.replace(/\D/g, ""))
                  }
                  minLength={11}
                  maxLength={11}
                  className="border rounded-md p-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="origem">Origem</Label>
                <Input
                  id="origem"
                  placeholder="Informe o local de partida"
                  value={origem}
                  onChange={(e) => setOrigem(e.target.value)}
                  type="text"
                  className="border rounded-md p-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="destino">Destino</Label>
                <Input
                  id="destino"
                  placeholder="Informe o destino"
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                  type="text"
                  className="border rounded-md p-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="demandaDetalhe">Detalhe da Demanda</Label>
                <Textarea
                  id="demandaDetalhe"
                  placeholder="Descreva sua demanda"
                  value={demandaDetalhe}
                  maxLength={500}
                  onChange={(e) => {
                    const texto = e.target.value;
                    const linhas = texto.split("\n");
                    if (linhas.length <= 8) {
                      setDemandaDetalhe(texto);
                    }
                  }}
                  className="w-full
                  min-h-[100px] 
                  sm:min-h-[120px]
                  md:min-h-[150px]
                  lg:min-h-[180px]
                  resize-none"
                  required
                />
                <p className="texte-xs text-muted-foreground text-right">
                  {demandaDetalhe.length}/500
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="datahora">Data e Hora da Ida</Label>
                <div className="flex gap-2">
                  <Input
                    id="dataHoraIda"
                    type="datetime-local"
                    placeholder="Informe a data e horário da ida"
                    value={dataHoraIda}
                    onChange={(e) => setDataHoraIda(e.target.value)}
                    max={dataHoraVolta || undefined}
                    className="border rounded-md p-2 mb-2"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="datahora">Data e Hora da Volta</Label>
                <div className="flex gap-2">
                  <Input
                    id="dataHoraVolta"
                    type="datetime-local"
                    placeholder="Informe a data e horário da volta"
                    value={dataHoraVolta}
                    onChange={(e) => setDataHoraVolta(e.target.value)}
                    min={dataHoraIda || undefined}
                    className="border rounded-md p-2 mb-2"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Button
                type="submit"
                disabled={demandaSolicitada}
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 transition"
              >
                {demandaSolicitada ? "Enviando..." : "Solicitar Demanda"}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

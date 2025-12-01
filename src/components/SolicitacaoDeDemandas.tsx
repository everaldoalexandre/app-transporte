'use client'

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Car } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
    const [emailSolicitante, setEmailSolicitante] = useState('');
    const [demandaDetalhe, setDemandaDetalhe] = useState('');
    const [pessoaSolicitante, setPessoaSolicitante] = useState('');
    const [secretariaSolicitante, setSecretariaSolicitante] = useState('');
    const [destino, setDestino] = useState('');
    const [dataHoraIda, setDataHoraIda] = useState('');
    const [dataHoraVolta, setDataHoraVolta] = useState('');
    const [origem, setOrigem] = useState('');
    const [contato, setContato] = useState('');
    const [lotacao, setLotacao] = useState('');
    const [statusDemanda, setStatusDemanda] = useState('Aguardando');

    const envioEmaill = async (email: string, nome: string, detalhe: string) => {
        try {

            if (!email || !email.trim()) {
                console.log('Por favor, preencha o campo de email.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.trim())) {
                
                console.log('Por favor, informe um email válido.');
                return;
            }

            const emailData = {
                from: 'onboarding@resend.dev',
                to: [email.trim()],
                subject: 'Confirmação de Solicitação de Demanda',
                content: `Olá, ${nome}! Sua solicitação de demanda foi recebida com sucesso. Detalhes da demanda: ${detalhe}. Obrigado por utilizar nosso serviço!`
            }; 

            const response = await fetch('/api/resend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Email de confirmação enviado com sucesso!');
                toast.success('Email de confirmação enviado com sucesso!');
            } else {
                console.error('Erro ao enviar email de confirmação.', result.error);
                toast.error('Erro ao enviar email de confirmação.');
            }
        } catch (error) {
            console.error('Erro ao enviar email de confirmação:', error);
            toast.error('Erro ao enviar email de confirmação.');
        }
    }

    async function adicionarDemanda(e: React.FormEvent) {
        e.preventDefault();

        if (!emailSolicitante || !demandaDetalhe || !pessoaSolicitante || !secretariaSolicitante || !destino || !dataHoraIda
            || !dataHoraVolta || !origem || !contato) {
            toast.error('Por favor, preencha todos os campos.')
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailSolicitante)) {
            toast.error('Por favor, informe um email válido.');
            console.log('Por favor, informe um email válido.');
            return;
        }

        try {
            const novaDemanda = {
                emailSolicitante,
                demandaDetalhe,
                pessoaSolicitante,
                secretariaSolicitante,
                destino,
                dataHoraIda: new Date(dataHoraIda).toISOString(),
                dataHoraVolta: new Date(dataHoraVolta).toISOString(),
                origem,
                contato,
                statusDemanda,
                lotacao,
                userId: 'f1b3216e-7aed-4d74-9cfe-196c9e7be0f0'
            };
            const response = await fetch('/api/demanda', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({novaDemanda})
            });

            if (response.ok) {
                toast.success('Demanda solicitada com sucesso!');

                await envioEmaill(emailSolicitante, pessoaSolicitante, demandaDetalhe);

                setEmailSolicitante('');
                setDemandaDetalhe('');
                setPessoaSolicitante('');
                setSecretariaSolicitante('');
                setDestino('');
                setDataHoraIda('');
                setDataHoraVolta('');
                setOrigem('');
                setContato('');
                setLotacao('');
                setStatusDemanda('Aguardando');

            } else {
                toast.error('Erro ao solicitar demanda.');
            }
        } catch (error) {
            toast.error('Erro ao solicitar demanda.');
            console.error('Erro ao solicitar demanda:', error);
        }
    }    
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold">
                    <Car className="mr-2"/>
                    Solicitação de Transporte
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={adicionarDemanda}>
                    <div className="flex flex-col w-full min-w-md px-6 rounded-lg">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
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
                                <Label htmlFor="demand">Detalhe da Demanda</Label>
                                <Input
                                id="demand"
                                placeholder="Descreva sua demanda"
                                value={demandaDetalhe}
                                onChange={(e) => setDemandaDetalhe(e.target.value)}
                                type="text"
                                className="border rounded-md p-2"
                                required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="pessoaSolicitante">Solicitante</Label>
                                <Input
                                id="pessoaSolicitante"
                                placeholder="Informe o nome do solicitante da pessoa solicitante"
                                value={pessoaSolicitante}
                                onChange={(e) => setPessoaSolicitante(e.target.value)}
                                type="text"
                                className="border rounded-md p-2"
                                required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="secretariaSolicitante">Secretaria Solicitante</Label>
                                <Input
                                id="secretariaSolicitante"
                                placeholder="Escreva a secretaria solicitante"
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
                                placeholder="Informe o quantitativo de pessoas."
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
                                placeholder="Informe um telefone ou WhatsApp para contato"
                                type="tel"
                                value={contato}
                                onChange={(e) => setContato(e.target.value)}
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
                                <Label htmlFor="datahora">Data e Hora da Ida</Label>
                                <div className="flex gap-2">
                                    <Input
                                    id="dataHoraIda"
                                    placeholder="Informe a data e horário da ida"
                                    value={dataHoraIda}
                                    onChange={(e) => setDataHoraIda(e.target.value)}
                                    type="datetime-local"
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
                                    placeholder="Informe a data e horário da volta"
                                    value={dataHoraVolta}
                                    onChange={(e) => setDataHoraVolta(e.target.value)}
                                    type="datetime-local"
                                    className="border rounded-md p-2 mb-2"
                                    required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <Button
                            type="submit"
                            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 transition"
                            >
                            Solicitar Demanda
                            </Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
'use client'

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { GalleryVerticalEnd } from "lucide-react";

export function DemandaInternaForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [emailSolicitante, setEmailSolicitante] = useState('');
    const [demandaDetalhe, setDemandaDetalhe] = useState('');
    const [pessoaSolicitante, setPessoaSolicitante] = useState('');
    const [secretariaSolicitante, setSecretariaSolicitante] = useState('');
    const [destino, setDestino] = useState('');
    const [dataIda, setDataIda] = useState('');
    const [horaIda, setHoraIda] = useState('');
    const [dataVolta, setDataVolta] = useState('');
    const [horaVolta, setHoraVolta] = useState('');
    const [origem, setOrigem] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!emailSolicitante || !demandaDetalhe || !pessoaSolicitante || !secretariaSolicitante || !destino || !dataIda || !horaIda
            || !dataVolta || !horaVolta || !origem) {
            toast.error('Por favor, preencha todos os campos.')
            return;
        }
    }
    return (
        <div className="">
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col grid-cols-2 w-full min-w-md p-6 bg-white border border-gray-300 rounded-lg shadow-md">
                <div className="flex flex-col items-center mb-4 text-2xl font-bold">
                    <GalleryVerticalEnd className="mr-2"/>
                </div>
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
                        />
                    </div>
                    <div>
                        <Label htmlFor="pessoaSolicitante">Solicitante</Label>
                        <Input
                        id="pessoaSolicitante"
                        placeholder="Informe o nome do solicitante da pessoa solicitante"
                        value={pessoaSolicitante}
                        onChange={(e) => setPessoaSolicitante(e.target.value)}
                        type="text"
                        
                        className="border rounded-md p-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="secretariaSolicitante">Secretaria Solicitante</Label>
                        <Input
                        id="secretariaSolicitante"
                        placeholder="Escreva a secretaria solicitante"
                        type="text"
                        value={secretariaSolicitante}
                        onChange={(e) => setSecretariaSolicitante(e.target.value)}
                        
                        className="border rounded-md p-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="origem">Origem</Label>
                        <Input
                        id="origem"
                        placeholder="Informe o local de partida"
                        value={origem}
                        onChange={(e) => setOrigem(e.target.value)}
                        type="text"
                        
                        className="border rounded-md p-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="destino">Destino</Label>
                        <Input
                        id="destino"
                        placeholder="Informe o destino"
                        value={destino}
                        onChange={(e) => setDestino(e.target.value)}
                        type="text"
                        
                        className="border rounded-md p-2"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="datahora">Data e Hora da Ida</Label>
                        <div className="flex gap-2">
                            <Input
                            id="dataIda"
                            placeholder="Informe a data da ida"
                            value={dataIda}
                            onChange={(e) => setDataIda(e.target.value)}
                            type="date"
                            
                            className="border rounded-md p-2 mb-2"
                            />
                            <Input
                            id="horaIda"
                            placeholder="Informe o horário da ida"
                            value={horaIda}
                            onChange={(e) => setHoraIda(e.target.value)}
                            type="time"
                            
                            className="border rounded-md p-2"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="datahora">Data e Hora da Volta</Label>
                        <div className="flex gap-2">
                            <Input
                            id="dataVolta"
                            placeholder="Informe a data da volta"
                            value={dataVolta}
                            onChange={(e) => setDataVolta(e.target.value)}
                            type="date"
                            
                            className="border rounded-md p-2 mb-2"
                            />
                            <Input
                            id="horaVolta"
                            placeholder="Informe o horário da volta"
                            value={horaVolta}
                            onChange={(e) => setHoraVolta(e.target.value)}
                            type="time"
                            
                            className="border rounded-md p-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <Button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                    >
                    Solicitar Demanda
                    </Button>
                </div>
            </div>
            </form>
        </div>
    );
}
import { useState } from "react";
import { toast } from "sonner";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Check, Eraser, FileText, MoreHorizontal, X } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";
import { Input } from "./ui/input";
import { DropMenu } from "./StatusDemanda";

export type Demandas = {
    id: number;
    emailSolicitante: string;
    demandaDetalhe: string;
    pessoaSolicitante: string;
    secretariaSolicitante: string;
    destino: string;
    dataHoraIda: string;
    dataHoraVolta: string;
    origem: string;
    contato: string;
    statusDemanda: string;
};

export function ActionsCell({ demanda, onRefresh }: { demanda: Demandas, onRefresh: () => void }) {

    const [demandas, setDemandas] = useState<Demandas[]> ([]);

    const [showModalDetalhesDemanda, setShowModalDetalhesDemanda] = useState(false);
    const [emailSolicitanteDetalhe, setEmailSolicitanteDetalhe] = useState('');
    const [demandaModalDetalhe, setDemandaModalDetalhe] = useState('');
    const [pessoaSolicitanteDetalhe, setPessoaSolicitanteDetalhe] = useState('');
    const [secretariaSolicitanteDetalhe, setSecretariaSolicitanteDetalhe] = useState('');
    const [destinoDetalhe, setDestinoDetalhe] = useState('');
    const [dataHoraIdaDetalhe, setDataHoraIdaDetalhe] = useState('');
    const [dataHoraVoltaDetalhe, setDataHoraVoltaDetalhe] = useState('');
    const [origemDetalhe, setOrigemDetalhe] = useState('');
    const [contatoDetalhe, setContatoDetalhe] = useState('');
    const [statusDemandaDetalhe, setStatusDemandaDetalhe] = useState('');

    const [showModalEditDemanda, setShowModalEditDemanda] = useState(false);
    const [demandaEdit, setDemandaEdit] = useState<Demandas | null>(null);
    const [emailSolicitanteEdit, setEmailSolicitanteEdit] = useState('');
    const [demandaModalEdit, setDemandaModalEdit] = useState('');
    const [pessoaSolicitanteEdit, setPessoaSolicitanteEdit] = useState('');
    const [secretariaSolicitanteEdit, setSecretariaSolicitanteEdit] = useState('');
    const [destinoEdit, setDestinoEdit] = useState('');
    const [dataHoraIdaEdit, setDataHoraIdaEdit] = useState('');
    const [dataHoraVoltaEdit, setDataHoraVoltaEdit] = useState('');
    const [origemEdit, setOrigemEdit] = useState('');
    const [contatoEdit, setContatoEdit] = useState('');

    const [showModalDeleteDemanda, setShowModalDeleteDemanda] = useState(false);
    const [showModalFinalizarDemanda, setShowModalFinalizarDemanda] = useState(false);
    const [demandaFinalizada, setDemandaFinalizada] = useState<Demandas | null>(null);
    const [statusDemandaFinalizada, setStatusDemandaFilanizada] = useState('');
    const [statusDemanda, setStatusDemanda] = useState('Aguardando');

    function openModalDeleteDemanda(demanda: Demandas) {
        setShowModalDeleteDemanda(true);
    }

    function openModalDetalhesDemanda(demanda: Demandas) {
        setEmailSolicitanteDetalhe(demanda.emailSolicitante);
        setDemandaModalDetalhe(demanda.demandaDetalhe);
        setPessoaSolicitanteDetalhe(demanda.pessoaSolicitante);
        setSecretariaSolicitanteDetalhe(demanda.secretariaSolicitante);
        setDestinoDetalhe(demanda.destino);
        setDataHoraIdaDetalhe(demanda.dataHoraIda);
        setDataHoraVoltaDetalhe(demanda.dataHoraVolta);
        setOrigemDetalhe(demanda.origem);
        setContatoDetalhe(demanda.contato);
        setStatusDemandaDetalhe(demanda.statusDemanda);

        setShowModalDetalhesDemanda(true);
    }

    function openModalEditDemanda(demanda: Demandas) {
        setDemandaEdit(demanda);
        setEmailSolicitanteEdit(demanda.emailSolicitante);
        setDemandaModalEdit(demanda.demandaDetalhe);
        setPessoaSolicitanteEdit(demanda.pessoaSolicitante);
        setSecretariaSolicitanteEdit(demanda.secretariaSolicitante);
        setDestinoEdit(demanda.destino);
        setDataHoraIdaEdit(demanda.dataHoraIda);
        setDataHoraVoltaEdit(demanda.dataHoraVolta);
        setOrigemEdit(demanda.origem);
        setContatoEdit(demanda.contato);
        
        setShowModalEditDemanda(true);
    }

    function openModalFinalizarDemanda(demanda: Demandas) {
        setDemandaFinalizada(demanda);
        setStatusDemandaFilanizada('Finalizada');
        setShowModalFinalizarDemanda(true);
    }

    async function saveEditDemanda(demandaEdit: Demandas, 
        pessoaSolicitanteEdit?: string, 
        secretariaSolicitanteEdit?: string, 
        emailSolicitanteEdit?: string, 
        contatoEdit?: string, 
        destinoEdit?: string, 
        dataHoraIdaEdit?: string,
        dataHoraVoltaEdit?: string, 
        origemEdit?: string,
        statusDemanda?: string) {

        try {
            const response = await fetch(`/api/transporte`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: demandaEdit.id,
                    updatedDemandas: {
                    emailSolicitante: emailSolicitanteEdit,
                    demandaDetalhe: demandaModalEdit,
                    pessoaSolicitante: pessoaSolicitanteEdit,
                    secretariaSolicitante: secretariaSolicitanteEdit,
                    destino: destinoEdit,
                    dataHoraIda: dataHoraIdaEdit,
                    dataHoraVolta: dataHoraVoltaEdit,
                    origem: origemEdit,
                    contato: contatoEdit,
                    statusDemanda: statusDemanda
                    }
                }),
            });
            toast.success('Demanda atualizada com sucesso!');

            if (!response.ok) {
                throw new Error('Failed to update demanda');
            }

            onRefresh();
        } catch (error) {
            console.error('Error updating demanda:', error);
        }
        
    }

    async function saveDemandaFinalizada() {
        if (!demandaFinalizada) return;
        try {
            const response = await fetch(`/api/transporte`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: demandaFinalizada.id,
                    updatedDemandas: {
                    statusDemanda: statusDemandaFinalizada
                    }
                }),
            });
            toast.success('Demanda atualizada com sucesso!');

            if (response.ok) {
                setShowModalFinalizarDemanda(false);
                setDemandaFinalizada(null);
                onRefresh();
            } else {
                throw new Error('Failed to update demanda');
            }

        } catch (error) {
            console.error('Error updating demanda:', error);
        }
        
    }

    async function fetchDemandas() {
        try {
            const response = await fetch('/api/transporte', { cache: 'no-store' });
            if (!response.ok) {
                console.error('Failed to fetch demandas:', response.statusText);
                return;
            }
            const data = await response.json();
            setDemandas(data);
        } catch (error) {
            console.error('Error fetching demandas:', error);
        }
    }
    return (
        <div>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                
                <DropdownMenuItem onClick={() => openModalDetalhesDemanda(demanda)}>
                <FileText/>Detalhes</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => openModalEditDemanda(demanda)}>
                <Eraser/>Editar</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => openModalFinalizarDemanda(demanda)}>
                <Check/>Finalizar</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => openModalDeleteDemanda(demanda)}>
                <X/>Deletar</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
            <AlertDialog open={showModalEditDemanda} onOpenChange={setShowModalEditDemanda}>
              <AlertDialogContent className="w-full">
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Edite os campos abaixo e clique em salvar.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className='flex grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                        <p><span>Solicitante: </span>
                        <Input 
                        type="text"
                        value={pessoaSolicitanteEdit}
                        onChange={(e) => setPessoaSolicitanteEdit(e.target.value)}
                        placeholder='Solicitante'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Secretaria: </span>
                        <Input 
                        type="text"
                        value={secretariaSolicitanteEdit}
                        onChange={(e) => setSecretariaSolicitanteEdit(e.target.value)}
                        placeholder='Secretaria Solicitante'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>E-mail: </span>
                        <Input 
                        type="text"
                        value={emailSolicitanteEdit}
                        onChange={(e) => setEmailSolicitanteEdit(e.target.value)}
                        placeholder='E-mail'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Contato: </span>
                        <Input 
                        type="text"
                        value={contatoEdit}
                        onChange={(e) => setContatoEdit(e.target.value)}
                        placeholder='Contato'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                    </div>
                    <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                        <p><span>Motorista: </span>
                        <Input 
                        type="text"
                        value={contatoEdit}
                        onChange={(e) => setContatoEdit(e.target.value)}
                        placeholder='Contato'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Placa: </span>
                        <Input 
                        type="text"
                        value={contatoEdit}
                        onChange={(e) => setContatoEdit(e.target.value)}
                        placeholder='Contato'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Status: </span>
                        <DropMenu statusDemanda={statusDemanda} setStatusDemanda={setStatusDemanda}/></p>
                    </div>
                    
                    <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                        <p><span>Destino: </span>
                        <Input 
                        type="text"
                        value={destinoEdit}
                        onChange={(e) => setDestinoEdit(e.target.value)}
                        placeholder='Destino'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Local de Saída: </span><input 
                        type="text"
                        value={origemEdit}
                        onChange={(e) => setOrigemEdit(e.target.value)}
                        placeholder='Local de Saída'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Horário da Saída: </span>
                        <Input 
                        type="datetime-local"
                        value={dataHoraIdaEdit}
                        onChange={(e) => setDataHoraIdaEdit(e.target.value)}
                        placeholder='Horário da Saída'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Horário da Volta: </span>
                        <Input 
                        type="datetime-local"
                        value={dataHoraVoltaEdit}
                        onChange={(e) => setDataHoraVoltaEdit(e.target.value)}
                        placeholder='Horario da Volta'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 max-w-2xl min-w-2xl mt-2'>
                    <p><span>Detalhe: </span>{demandaModalEdit}</p>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick= {() => {
                                    if (demandaEdit){
                                        saveEditDemanda(demandaEdit, pessoaSolicitanteEdit, secretariaSolicitanteEdit, emailSolicitanteEdit, contatoEdit, destinoEdit, dataHoraIdaEdit, dataHoraVoltaEdit, origemEdit, statusDemanda);
                                        setShowModalEditDemanda(false);
                                        setDemandaEdit(null);
                                    }
                                }}>Salvar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog open={showModalDetalhesDemanda} onOpenChange={setShowModalDetalhesDemanda}>
              <AlertDialogContent className="w-full">
                <AlertDialogHeader>
                  <AlertDialogTitle>Informações sobre a demanda</AlertDialogTitle>
                </AlertDialogHeader>
                    <div className="bg-white p-6 rounded shadow-lg">
                        <div className='flex sgrid-cols-2 gap-4'>
                            <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                                <p><span>Solicitante: </span>{pessoaSolicitanteDetalhe}</p>
                                <p><span>Secretaria: </span>{secretariaSolicitanteDetalhe}</p>
                                <p><span>E-mail: </span>{emailSolicitanteDetalhe}</p>
                                <p><span>Contato: </span>{contatoDetalhe}</p>
                            </div>
                            <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                                <p><span>Motorista: </span></p>
                                <p><span>Placa: </span></p>
                            </div>
                            
                            <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                                <p><span>Destino: </span>{destinoDetalhe}</p>
                                <p><span>Local de Saída: </span> {origemDetalhe}</p>
                                <p><span>Horário da Saída: </span> {dataHoraIdaDetalhe}</p>
                                <p><span>Horário da Volta: </span>{dataHoraVoltaDetalhe}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 max-w-2xl min-w-2xl mt-2'>
                            <p><span>Detalhe: </span>{demandaModalDetalhe}</p>
                            <p><span>Status: </span>{statusDemandaDetalhe}</p>
                        </div>
                    </div>
                <AlertDialogFooter>
                  <AlertDialogAction onClick={() => openModalEditDemanda(demanda)}>Editar</AlertDialogAction>
                  <AlertDialogCancel>Fechar</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog open={showModalDeleteDemanda} onOpenChange={setShowModalDeleteDemanda}>
              <AlertDialogContent className="w-full">
                <AlertDialogHeader>
                  <AlertDialogTitle>Deseja apagar a demanda?</AlertDialogTitle>
                  <AlertDialogDescription>
                    A demanda será apagada do sistema e não poderá ser recuperada.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog open={showModalFinalizarDemanda} onOpenChange={setShowModalFinalizarDemanda}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Deseja finalizar a demanda?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Ao finalizar, a demanda terá seu status alterado para "Finalizado".
                  </AlertDialogDescription>
                </AlertDialogHeader>
                
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={saveDemandaFinalizada}>Finalizar</AlertDialogAction>
                </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
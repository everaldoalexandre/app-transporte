import { useState } from "react";
import { toast } from "sonner";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Check, Eraser, FileText, MoreHorizontal, X } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";
import { Input } from "./ui/input";
import { DropMenu } from "./StatusDemanda";
import { Demandas } from "@/generated/prisma";


export function ActionsCell({ demanda, onRefresh }: { demanda: Demandas, onRefresh: () => void }) {

    const [demandas, setDemandas] = useState<Demandas[]> ([]);
    const [demandaEdit, setDemandaEdit] = useState<Demandas | null>(null);

    const [showModalDetalhesDemanda, setShowModalDetalhesDemanda] = useState(false);
    const [showModalEditDemanda, setShowModalEditDemanda] = useState(false);
    const [showModalDeleteDemanda, setShowModalDeleteDemanda] = useState(false);
    const [showModalFinalizarDemanda, setShowModalFinalizarDemanda] = useState(false);
    
    const [contatoEdit, setContatoEdit] = useState('');
    const [demandaFinalizada, setDemandaFinalizada] = useState<Demandas | null>(null);
    const [statusDemanda, setStatusDemanda] = useState('');

    function openModalDeleteDemanda(demanda: Demandas) {
        setDemandaEdit(demanda);
        setShowModalDeleteDemanda(true);
    }

    function openModalDetalhesDemanda(demanda: Demandas) {
        setDemandaEdit(demanda);
        setShowModalDetalhesDemanda(true);
    }

    function openModalEditDemanda(demanda: Demandas) {
        setDemandaEdit(demanda);        
        setShowModalEditDemanda(true);
    }

    function openModalFinalizarDemanda(demanda: Demandas) {
        setDemandaFinalizada(demanda);
        setShowModalFinalizarDemanda(true);
    }

    async function saveEditDemanda(demandaEdit: Demandas) {
        if (!demandaEdit) {
            console.error('DemandaEdit não está definido');
            return;
        }
        try {
            const response = await fetch(`/api/transporte`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: demandaEdit.id,
                    updatedDemandas: {
                    emailSolicitante: demandaEdit.emailSolicitante,
                    demandaDetalhe: demandaEdit.demandaDetalhe,
                    pessoaSolicitante: demandaEdit.pessoaSolicitante,
                    secretariaSolicitante: demandaEdit.secretariaSolicitante,
                    destino: demandaEdit.destino,
                    dataHoraIda: demandaEdit.dataHoraIda,
                    dataHoraVolta: demandaEdit.dataHoraVolta,
                    origem: demandaEdit.origem,
                    contato: demandaEdit.contato,
                    statusDemanda: demandaEdit.statusDemanda
                    }
                }),
            });
            toast.success('Demanda atualizada com sucesso!');

            if (!response.ok) {
                throw new Error('Falha ao atualizar demanda');
            }

            onRefresh();
        } catch (error) {
            console.error('Erro ao atualizar demanda:', error);
        }
        
    }

    async function saveDemandaFinalizada(demandaEdit: Demandas) {
        if (!demandaEdit) return;
        try {
            const response = await fetch(`/api/transporte`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: demandaEdit.id,
                    updatedDemandas: {
                    statusDemanda: 'Finalizada'
                    }
                }),
            });
            toast.success('Demanda finalizada com sucesso!');

            if (response.ok) {
                setShowModalFinalizarDemanda(false);
                onRefresh();
            } else {
                throw new Error('Falha ao finalizar demanda');
            }

        } catch (error) {
            console.error('Erro ao finalizar demanda:', error);
        }
        
    }

    async function fetchDemandas() {
        try {
            const response = await fetch('/api/transporte', { cache: 'no-store' });
            if (!response.ok) {
                console.error('Falha ao buscar demandas:', response.statusText);
                return;
            }
            const data = await response.json();
            setDemandas(data);
        } catch (error) {
            console.error('Erro ao buscar demandas:', error);
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
                        value={demandaEdit?.pessoaSolicitante}
                        onChange={(e) => setDemandaEdit({...(demanda as Demandas), pessoaSolicitante: e.target.value})}
                        placeholder='Solicitante'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Secretaria: </span>
                        <Input 
                        type="text"
                        value={demandaEdit?.secretariaSolicitante}
                        onChange={(e) => setDemandaEdit({...(demanda as Demandas), secretariaSolicitante: e.target.value})}
                        placeholder='Secretaria Solicitante'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>E-mail: </span>
                        <Input 
                        type="text"
                        value={demandaEdit?.emailSolicitante}
                        onChange={(e) => setDemandaEdit({...(demanda as Demandas), emailSolicitante: e.target.value})}
                        placeholder='E-mail'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Contato: </span>
                        <Input 
                        type="text"
                        value={demandaEdit?.contato}
                        onChange={(e) => setDemandaEdit({...(demanda as Demandas), contato: e.target.value})}
                        placeholder='Contato'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                    </div>
                    <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                        <p><span>Motorista: </span>
                        <Input 
                        type="text"
                        value={demandaEdit?.contato}
                        onChange={(e) => setDemandaEdit({...(demanda as Demandas), contato: e.target.value})}
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
                        value={demandaEdit?.destino}
                        onChange={(e) => setDemandaEdit({...(demanda as Demandas), destino: e.target.value})}
                        placeholder='Destino'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Local de Saída: </span><input 
                        type="text"
                        value={demandaEdit?.origem}
                        onChange={(e) => setDemandaEdit({...(demanda as Demandas), origem: e.target.value})}
                        placeholder='Local de Saída'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Horário da Saída: </span>
                        <Input 
                        type="datetime-local"
                        value={demandaEdit?.dataHoraIda?? ''}
                        onChange={(e) => setDemandaEdit({...(demanda as Demandas), dataHoraIda: e.target.value})}
                        placeholder='Horário da Saída'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Horário da Volta: </span>
                        <Input 
                        type="datetime-local"
                        value={demandaEdit?.dataHoraVolta ?? ''}
                        onChange={(e) => setDemandaEdit({...(demanda as Demandas), dataHoraVolta: e.target.value})}
                        placeholder='Horario da Volta'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 max-w-2xl min-w-2xl mt-2'>
                    <p><span>Detalhe: </span>{demandaEdit?.demandaDetalhe}</p>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick= {() => {
                                    if (demandaEdit){
                                        saveEditDemanda(demandaEdit);
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
                                <p><span>Solicitante: </span>{demandaEdit?.pessoaSolicitante}</p>
                                <p><span>Secretaria: </span>{demandaEdit?.secretariaSolicitante}</p>
                                <p><span>E-mail: </span>{demandaEdit?.emailSolicitante}</p>
                                <p><span>Contato: </span>{demandaEdit?.contato}</p>
                            </div>
                            <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                                <p><span>Motorista: </span></p>
                                <p><span>Placa: </span></p>
                            </div>
                            
                            <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                                <p><span>Destino: </span>{demandaEdit?.destino}</p>
                                <p><span>Local de Saída: </span> {demandaEdit?.origem}</p>
                                <p><span>Horário da Saída: </span> {demandaEdit?.dataHoraIda}</p>
                                <p><span>Horário da Volta: </span>{demandaEdit?.dataHoraVolta}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 max-w-2xl min-w-2xl mt-2'>
                            <p><span>Detalhe: </span>{demandaEdit?.demandaDetalhe}</p>
                            <p><span>Status: </span>{demandaEdit?.statusDemanda}</p>
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
                  <AlertDialogAction onClick={ () => { saveDemandaFinalizada(demandaFinalizada as Demandas);}}
                  >Finalizar</AlertDialogAction>
                </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
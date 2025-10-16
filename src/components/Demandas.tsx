'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Check, Eraser, FileText, X } from 'lucide-react';
import { DropMenu } from './StatusDemanda';
import { toast } from 'sonner';

type Demandas = {
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

export default function Demandas() {
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
    const [statusDemandaFinalizada, setStatusDemandaFelanizada] = useState('');
    const [statusDemanda, setStatusDemanda] = useState('Aguardando');

        useEffect(() => {
        fetchDemandas();
    }, []);


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

            fetchDemandas();
        } catch (error) {
            console.error('Error updating demanda:', error);
        }
        
    }

    function openModalDeleteDemanda(demanda: Demandas) {
        setShowModalDeleteDemanda(true);
    }
    function openModalFinalizarDemanda(demanda: Demandas) {
        setDemandaFinalizada(demanda);
        setStatusDemandaFelanizada('Finalizada');
        setShowModalFinalizarDemanda(true);
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
                fetchDemandas();
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
            <h1 className='text-2xl font-bold mb-4'>Demandas de Transporte</h1>
            <ul className="flex flex-col gap-2">
                {demandas.map((novaDemanda) => (
                <li key={novaDemanda.id} className='bg-white p-4 rounded shadow-md border border-gray-200'>
                    <div className='flex gap-4'>
                        <div className='flex flex-col gap-2 '>
                            <p><span>Solicitante: </span>{novaDemanda.pessoaSolicitante}</p>
                            <p><span>Secretaria: </span>{novaDemanda.secretariaSolicitante}</p>
                            <p><span>Contato: </span>{novaDemanda.contato}</p>
                            <p><span>Status: </span>{novaDemanda.statusDemanda}</p>
                            <DropMenu statusDemanda={statusDemanda} setStatusDemanda={setStatusDemanda}/>
                        </div>
                        <div className='flex flex-col gap-2 max-w-2xl min-w-2xl'>
                            <p><span>Detalhe: </span>{novaDemanda.demandaDetalhe}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p><span>Destino: </span>{novaDemanda.destino}</p>
                            <p><span>Local de Saída: </span> {novaDemanda.origem}</p>
                            <p><span>Horário da Saída: </span> {novaDemanda.dataHoraIda}</p>
                            <p><span>Horário da Volta: </span>{novaDemanda.dataHoraVolta}</p>
                        </div>
                        <div className='flex flex-col gap-2 items-end justify-items-end'>
                            <Button
                                className='bg-gray-200 text-gray-800 rounded hover:bg-gray-300 justify-items-center'
                                onClick={() => openModalDetalhesDemanda(novaDemanda)}
                            ><FileText/></Button>
                            <Button
                                className='bg-gray-200 text-gray-500 rounded hover:bg-gray-300 justify-items-center'
                                onClick={() => openModalEditDemanda(novaDemanda)}
                            ><Eraser/></Button>
                            <Button
                                className='bg-gray-200 text-gray-500 rounded hover:bg-gray-300 justify-items-center'
                                onClick={() => openModalFinalizarDemanda(novaDemanda)}
                            ><Check/></Button>
                            <Button
                                className='bg-gray-200 text-gray-500 rounded hover:bg-gray-300 justify-items-center'
                                onClick={() => openModalDeleteDemanda(novaDemanda)}
                            ><X/></Button>
                        </div>
                    </div>
                    
                </li>
            ))}
            </ul>

            {showModalDetalhesDemanda &&(
                <div className="fixed inset-0 sbg-opacity-100 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-9/12 max-w-4xl">
                    <h2 className="text-xl font-bold mb-4">Detalhes da Demanda</h2>
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
                        <div className='flex justify-end'>
                            <button
                                className="mt-4 bg-gray-200 text-gray-500 rounded hover:bg-gray-300 justify-items-center p-3"
                                onClick= {() => setShowModalDetalhesDemanda(false)}
                            >
                                Fechar
                            </button>

                        </div>
                    </div>
                </div>
            )}
            {showModalEditDemanda &&(
                <div className="fixed inset-0 sbg-opacity-100 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-9/12 max-w-4xl">
                    <h2 className="text-xl font-bold mb-4">Editar Demanda</h2>
                        <div className='flex sgrid-cols-2 gap-4'>
                            <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                                <p><span>Solicitante: </span>
                                <input 
                                type="text"
                                value={pessoaSolicitanteEdit}
                                onChange={(e) => setPessoaSolicitanteEdit(e.target.value)}
                                placeholder='Solicitante'
                                className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                                <p><span>Secretaria: </span>
                                <input 
                                type="text"
                                value={secretariaSolicitanteEdit}
                                onChange={(e) => setSecretariaSolicitanteEdit(e.target.value)}
                                placeholder='Secretaria Solicitante'
                                className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                                <p><span>E-mail: </span>
                                <input 
                                type="text"
                                value={emailSolicitanteEdit}
                                onChange={(e) => setEmailSolicitanteEdit(e.target.value)}
                                placeholder='E-mail'
                                className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                                <p><span>Contato: </span>
                                <input 
                                type="text"
                                value={contatoEdit}
                                onChange={(e) => setContatoEdit(e.target.value)}
                                placeholder='Contato'
                                className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                            </div>
                            <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                                <p><span>Motorista: </span></p>
                                <p><span>Placa: </span></p>
                            </div>
                            
                            <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                                <p><span>Destino: </span>
                                <input 
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
                                <input 
                                type="datetime-local"
                                value={dataHoraIdaEdit}
                                onChange={(e) => setDataHoraIdaEdit(e.target.value)}
                                placeholder='Horário da Saída'
                                className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                                <p><span>Horário da Volta: </span>
                                <input 
                                type="datetime-local"
                                value={dataHoraVoltaEdit}
                                onChange={(e) => setDataHoraVoltaEdit(e.target.value)}
                                placeholder='Horario da Volta'
                                className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 max-w-2xl min-w-2xl mt-2'>
                            <p><span>Detalhe: </span>{demandaModalEdit}</p>
                            <DropMenu statusDemanda={statusDemanda} setStatusDemanda={setStatusDemanda}/>
                        </div>
                        <div className='flex justify-end gap-2'>
                            <button
                                className="mt-4 bg-gray-200 text-gray-500 rounded hover:bg-gray-300 justify-items-center p-3"
                                onClick= {() => {
                                    if (demandaEdit){
                                        saveEditDemanda(demandaEdit, pessoaSolicitanteEdit, secretariaSolicitanteEdit, emailSolicitanteEdit, contatoEdit, destinoEdit, dataHoraIdaEdit, dataHoraVoltaEdit, origemEdit, statusDemanda);
                                        setShowModalEditDemanda(false);
                                        setDemandaEdit(null);
                                    }
                                }}
                            >
                                Salvar
                            </button>
                            <button
                                className="mt-4 bg-gray-200 text-gray-500 rounded hover:bg-gray-300 justify-items-center p-3"
                                onClick= {() => setShowModalEditDemanda(false)}
                            >
                                Cancelar
                            </button>

                        </div>
                    </div>
                </div>
            )}
            {showModalDeleteDemanda &&(
                <div className="fixed inset-0 sbg-opacity-100 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-4xl">
                    <h2 className="text-xl font-bold mb-4">Deseja apagar a demanda?</h2>
                        <div className='flex justify-end gap-2'>
                            <button
                                className="mt-4 bg-gray-200 text-gray-500 rounded hover:bg-gray-300 justify-items-center p-3"
                                onClick= {() => setShowModalDeleteDemanda(false)}
                            >
                                Apagar
                            </button>
                            <button
                                className="mt-4 bg-gray-200 text-gray-500 rounded hover:bg-gray-300 justify-items-center p-3"
                                onClick= {() => setShowModalDeleteDemanda(false)}
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showModalFinalizarDemanda &&(
                <div className="fixed inset-0 sbg-opacity-100 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-4xl">
                    <h2 className="text-xl font-bold mb-4">Deseja finalizar a demanda?</h2>
                        <div className='flex justify-end gap-2'>
                            <button
                                className="mt-4 bg-gray-200 text-gray-500 rounded hover:bg-gray-300 justify-items-center p-3"
                                onClick={saveDemandaFinalizada}
                            >
                                Finalizar
                            </button>
                            <button
                                className="mt-4 bg-gray-200 text-gray-500 rounded hover:bg-gray-300 justify-items-center p-3"
                                onClick= {() => setShowModalDeleteDemanda(false)}
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};
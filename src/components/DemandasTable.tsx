'use client';

import { useState } from 'react';
import { DataTableDemo } from './DataColumns';

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

export default function DemandasTable() {
    const [demandas, setDemandas] = useState<Demandas[]> ([]);

    return (
        <DataTableDemo  data={demandas}/>
    )
};
'use client';

import { useState } from 'react';
import { DataTableVeiculos} from './DataColumnsVeiculos';

type Veiculos = {
    id: number;
    placaVeiculo: string;
    chassiVeiculo: string;
    renvamVeiculo: string;
    proprietarioVeiculo: string;
    crlvVeiculo: string;
    statusVeiculo: string;
};

export default function VeiculosTable() {
    const [veiculos, setVeiculos] = useState<Veiculos[]> ([]);

    return (
        <DataTableVeiculos  data={veiculos}/>
    )
};
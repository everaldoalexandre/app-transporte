'use client';

import { useState } from 'react';
import { DataTableVeiculos} from './DataColumnsVeiculos';
import { Veiculo } from '@/generated/prisma';

export default function VeiculosTable() {
    const [veiculos, setVeiculos] = useState<Veiculo[]> ([]);

    return (
        <DataTableVeiculos  data={veiculos}/>
    )
};
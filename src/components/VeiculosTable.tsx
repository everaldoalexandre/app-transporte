'use client';

import { useState } from 'react';
import { DataTableVeiculos} from './DataColumnsVeiculos';
import { Veiculos } from '@/generated/prisma';

export default function VeiculosTable() {
    const [veiculos, setVeiculos] = useState<Veiculos[]> ([]);

    return (
        <DataTableVeiculos  data={veiculos}/>
    )
};
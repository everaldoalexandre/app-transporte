'use client';

import { useState } from 'react';
import { DataTableDemo } from './DataColumns';
import { Demanda } from '@/generated/prisma';

export default function DemandasTable() {
    const [demandas, setDemandas] = useState<Demanda[]> ([]);

    return (
        <DataTableDemo  data={demandas}/>
    )
};
'use client';

import { useState } from 'react';
import { DataTableDemo } from './DataColumns';
import { Demandas } from '@/generated/prisma';

export default function DemandasTable() {
    const [demandas, setDemandas] = useState<Demandas[]> ([]);

    return (
        <DataTableDemo  data={demandas}/>
    )
};
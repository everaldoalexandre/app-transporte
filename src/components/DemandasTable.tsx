'use client';

import { useState } from 'react';
import { DataTableDemo } from './DataColumns';
import { DemandaType } from '@/components/Types';

export default function DemandasTable() {
    const [demandas, setDemandas] = useState<DemandaType[]> ([]);

    return (
        <DataTableDemo  data={demandas}/>
    )
};
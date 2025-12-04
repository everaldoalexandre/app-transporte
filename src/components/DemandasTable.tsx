'use client';

import { useEffect, useState } from 'react';
import { DataTableDemo } from './DataColumns';
import { DemandaType } from '@/components/Types';

export default function DemandasTable() {
    const [demandas, setDemandas] = useState<DemandaType[]> ([]);
    const [userAccessLevel, setUserAccessLevel] = useState<string>('usuário');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchDemandas() {
            try {
                const res = await fetch('/api/demanda'); 
                if (!res.ok) throw new Error('Falha ao buscar demandas');
                
                const data = await res.json();
                
                setDemandas(data.demandas);
                setUserAccessLevel(data.userAccessLevel);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchDemandas();
    }, []);

    if (loading) return <div>Carregando...</div>;

    return (
        <DataTableDemo  data={demandas} userAccessLevel={userAccessLevel}/>
    )
};
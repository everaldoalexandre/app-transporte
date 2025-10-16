'use client';

import { useState } from "react";
import { DemandaExternaForm } from "./ExternalDemand";
import { DemandaInternaForm } from "./InternalDemand";
import { Button } from "./ui/button";

export default function PaginaDemanda() {
    const [activeForm, setActiveForm] = useState<'interna' | 'externa'>('interna');
    return (
      <div className="font-sans grid min-h-screen bg-gray-100">
        <div className="flex items-center justify-center w-full max-w-screen mt-10">
            <Button 
              variant={activeForm === 'interna' ? 'default' : 'outline'}
              onClick={() => setActiveForm('interna')}
            >
                Demanda Interna
            </Button>
            <Button 
              variant={activeForm === 'externa' ? 'default' : 'outline'}
              onClick={() => setActiveForm('externa')}
            >
                Demanda Externa
            </Button>
        </div>
        <div className="flex items-center justify-center w-full max-w-screen mt-5">
          {activeForm === 'interna' ? <DemandaInternaForm /> : <DemandaExternaForm />}
        </div>
      </div>
    );
  }
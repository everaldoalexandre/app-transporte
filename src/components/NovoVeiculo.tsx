import { useState } from "react";
import { toast } from "sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";
import { Input } from "./ui/input";

export type Veiculos = {
  id: number;
  placaVeiculo: string;
  chassiVeiculo: string;
  renavamVeiculo: string;
  proprietarioVeiculo: string;
  crlvVeiculo: string;
  statusVeiculo: string;
};

export function NovoVeiculo({ openNovoVeiculo, openChangeNovoVeiculo, onRefresh }: { openNovoVeiculo: boolean, openChangeNovoVeiculo: (v: boolean) => void, onRefresh: () => void }) {

    const [veiculos, setVeiculos] = useState<Veiculos[]> ([]);

    const [showDialogNovoVeiculo, setShowDialogNovoVeiculo] = useState(false);
    const [placaVeiculo, setPlacaVeiculo] = useState('');
    const [chassiVeiculo, setChassiVeiculo] = useState('');
    const [proprietarioVeiculo, setProprietarioVeiculo] = useState('');
    const [renavamVeiculo, setRenavamVeiculo] = useState('');
    const [crlvVeiculo, setCrlvVeiculo] = useState('');
    const [statusVeiculo, setStatusVeiculo] = useState('Aguardando');

    function openDialogNovoVeiculo(veiculo: Veiculos) {
      setPlacaVeiculo(veiculo.placaVeiculo);
      setChassiVeiculo(veiculo.chassiVeiculo);
      setRenavamVeiculo(veiculo.renavamVeiculo);
      setProprietarioVeiculo(veiculo.proprietarioVeiculo);
      setCrlvVeiculo(veiculo.crlvVeiculo);
      setShowDialogNovoVeiculo(true);
    }


    async function adicionarVeiculo(e: React.FormEvent) {
      e.preventDefault();

      try {
          const novoVeiculo = {
            placaVeiculo,
            chassiVeiculo,
            renavamVeiculo,
            proprietarioVeiculo,
            crlvVeiculo: '',
          };
          const response = await fetch(`/api/veiculo`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({novoVeiculo}),
          });
          toast.success('Veiculo atualizada com sucesso!');
          if (!response.ok) {
              throw new Error('Failed to update veiculo');
          }

          onRefresh();
      } catch (error) {
          console.error('Error updating veiculo:', error);
      }
        
    }

    async function fetchVeiculos() {
        try {
            const response = await fetch('/api/veiculo', { cache: 'no-store' });
            if (!response.ok) {
                console.error('Failed to fetch veiculos:', response.statusText);
                return;
            }
            const data = await response.json();
            setVeiculos(data);
        } catch (error) {
            console.error('Error fetching veiculos:', error);
        }
    }
    return (
            <AlertDialog open={openNovoVeiculo} onOpenChange={openChangeNovoVeiculo}>
              <AlertDialogContent className="w-full">
                <AlertDialogHeader>
                  <AlertDialogTitle>Gostaria de adicionar um novo veículo?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Preencha os campos com as Informações do veículo
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <form onSubmit={adicionarVeiculo}>
                  <div className='flex grid-cols-2 gap-4'>
                      <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                          <p><span>Placa: </span>
                          <Input 
                          type="text"
                          value={placaVeiculo}
                          onChange={(e) => setPlacaVeiculo(e.target.value)}
                          placeholder='Placa'
                          className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                          <p><span>Chassi: </span>
                          <Input 
                          type="text"
                          value={chassiVeiculo}
                          onChange={(e) => setChassiVeiculo(e.target.value)}
                          placeholder='Chassi'
                          className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                          <p><span>Renavam: </span>
                          <Input 
                          type="text"
                          value={renavamVeiculo}
                          onChange={(e) => setRenavamVeiculo(e.target.value)}
                          placeholder='Renavam'
                          className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                          <p><span>Proprietário: </span>
                          <Input 
                          type="text"
                          value={proprietarioVeiculo}
                          onChange={(e) => setProprietarioVeiculo(e.target.value)}
                          placeholder='Proprietário'
                          className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                      </div>
                  </div>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction type="submit">Salvar</AlertDialogAction>
                </AlertDialogFooter>
                </form>
              </AlertDialogContent>
            </AlertDialog>
    )
}
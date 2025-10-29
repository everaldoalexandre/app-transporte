import { useState } from "react";
import { toast } from "sonner";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Eraser, FileText, MoreHorizontal, X } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";
import { Input } from "./ui/input";
import {useSession} from "@/lib/auth-client"

export type Veiculos = {
  id: number;
  placaVeiculo: string;
  chassiVeiculo: string;
  renavamVeiculo: string;
  proprietarioVeiculo: string;
  crlvVeiculo: string;
  statusVeiculo: string;
};

export function ActionsCellVeiculos({veiculo, onRefresh }: { veiculo: Veiculos, onRefresh: () => void }) {

    const [veiculos, setVeiculos] = useState<Veiculos[]> ([]);

    const [showDialogNovoVeiculo, setShowDialogNovoVeiculo] = useState(false);
    const [placaVeiculo, setPlacaVeiculo] = useState('');
    const [chassiVeiculo, setChassiVeiculo] = useState('');
    const [proprietarioVeiculo, setProprietarioVeiculo] = useState('');
    const [renavamVeiculo, setRenavamVeiculo] = useState('');
    const [crlvVeiculo, setCrlvVeiculo] = useState('');

    const [showDialogDetalheVeiculo, setShowDialogDetalheVeiculo] = useState(false);
    const [placaVeiculoDetalhe , setPlacaVeiculoDetalhe] = useState('');
    const [chassiVeiculoDetalhe, setChassiVeiculoDetalhe] = useState('');
    const [renavamVeiculoDetalhe , setRenavamVeiculoDetalhe] = useState('');
    const [proprietarioVeiculoDetalhe, setProprietarioVeiculoDetalhe] = useState('');
    const [crlvVeiculoDetalhe, setCrlvVeiculoDetalhe] = useState('');
    const [statusVeiculoDetalhe, setStatusVeiculoDetalhe] = useState('');

    const [showDialogEditVeiculo, setShowDialogEditVeiculo] = useState(false);
    const [veiculoEdit, setVeiculoEdit] = useState<Veiculos | null>(null);
    const [placaVeiculoEdit, setPlacaVeiculoEdit] = useState('');
    const [chassiVeiculoEdit, setChassiVeiculoEdit] = useState('');
    const [proprietarioVeiculoEdit, setProprietarioVeiculoEdit] = useState('');
    const [renavamVeiculoEdit, setRenavamVeiculoEdit] = useState('');
    const [crlvVeiculoEdit, setCrlvVeiculoEdit] = useState('');
    const [statusVeiculoEdit, setStatusVeiculoEdit] = useState('');

    const [showDialogDeleteVeiculo, setShowDialogDeleteVeiculo] = useState(false);
    const [statusVeiculo, setStatusVeiculo] = useState('Aguardando');

    function openDialogDeleteVeiculo(veiculo: Veiculos) {
      setShowDialogDeleteVeiculo(true);
    }

    function openDialogDetalheVeiculo(veiculo: Veiculos) {
      setPlacaVeiculoDetalhe(veiculo.placaVeiculo);
      setChassiVeiculoDetalhe(veiculo.chassiVeiculo);
      setRenavamVeiculoDetalhe(veiculo.renavamVeiculo);
      setProprietarioVeiculoDetalhe(veiculo.proprietarioVeiculo);
      setCrlvVeiculoDetalhe(veiculo.crlvVeiculo);
      setStatusVeiculoDetalhe(veiculo.statusVeiculo);
      setShowDialogDetalheVeiculo(true);
    }

    function openDialogEditVeiculo(veiculo: Veiculos) {
      setVeiculoEdit(veiculo);
      setPlacaVeiculoEdit(veiculo.placaVeiculo);
      setChassiVeiculoEdit(veiculo.chassiVeiculo);
      setRenavamVeiculoEdit(veiculo.renavamVeiculo);
      setProprietarioVeiculoEdit(veiculo.proprietarioVeiculo);
      setCrlvVeiculoEdit(veiculo.crlvVeiculo);
      setShowDialogEditVeiculo(true);
    }

    function openDialogNovoVeiculo(veiculo: Veiculos) {
      setVeiculoEdit(veiculo);
      setPlacaVeiculoEdit(veiculo.placaVeiculo);
      setChassiVeiculoEdit(veiculo.chassiVeiculo);
      setRenavamVeiculoEdit(veiculo.renavamVeiculo);
      setProprietarioVeiculoEdit(veiculo.proprietarioVeiculo);
      setCrlvVeiculoEdit(veiculo.crlvVeiculo);
      setShowDialogNovoVeiculo(true);
    }

    async function saveEditVeiculo(veiculoEdit: Veiculos, 
        placaVeiculo: String,
        chassiVeiculo: String,
        renavamVeiculo: String,
        proprietarioVeiculo: String,
        crlvVeiculo: String) {

        try {
            const response = await fetch(`/api/veiculo`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: veiculoEdit.id,
                    updatedVeiculos: {
                    placaVeiculo: placaVeiculoEdit,
                    chassiVeiculo: chassiVeiculoEdit,
                    renavamVeiculo: renavamVeiculoEdit,
                    proprietarioVeiculo: proprietarioVeiculoEdit,
                    crlvVeiculo: crlvVeiculoEdit
                    }
                }),
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

    const {data: session, isPending} = useSession();

    async function adicionarVeiculo(e: React.FormEvent) {
      e.preventDefault();

      if (isPending) {
        toast.success('Verificando autenticação...');
        return;
      }

      if (!session?.user?.id) {
        toast.error('Usuário não conectado. Faça o login.');
        return;
      }

      try {
          const novoVeiculo = {
            placaVeiculo,
            chassiVeiculo,
            renavamVeiculo,
            proprietarioVeiculo,
            crlvVeiculo
          };
          const response = await fetch(`/api/veiculo`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({novoVeiculo}),
          });
          setPlacaVeiculo('');
          setChassiVeiculo('');
          setRenavamVeiculo('');
          setProprietarioVeiculo('');
          setCrlvVeiculo('');
          setShowDialogNovoVeiculo(false);

          if (response.ok) {
            toast.success('Veiculo adicionado com sucesso!');
            await fetchVeiculos();
            
            
          } else {
            throw new Error('Failed to update veiculo');
          }
          
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
        <div>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                
                <DropdownMenuItem onClick={() => openDialogDetalheVeiculo(veiculo)}>
                <FileText/>Detalhes</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => openDialogEditVeiculo(veiculo)}>
                <Eraser/>Editar</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => openDialogDeleteVeiculo(veiculo)}>
                <X/>Deletar</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => openDialogNovoVeiculo(veiculo)}>
                <X/>Adicionar</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
            <AlertDialog open={showDialogNovoVeiculo} onOpenChange={setShowDialogNovoVeiculo}>
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
                </form>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction type="submit">Salvar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
             <AlertDialog open={showDialogEditVeiculo} onOpenChange={setShowDialogEditVeiculo}>
              <AlertDialogContent className="w-full">
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Edite os campos abaixo e clique em salvar.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className='flex grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                        <p><span>Placa: </span>
                        <Input 
                        type="text"
                        value={placaVeiculoEdit}
                        onChange={(e) => setPlacaVeiculoEdit(e.target.value)}
                        placeholder='Placa'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Chassi: </span>
                        <Input 
                        type="text"
                        value={chassiVeiculoEdit}
                        onChange={(e) => setChassiVeiculoEdit(e.target.value)}
                        placeholder='Chassi'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Renavam: </span>
                        <Input 
                        type="text"
                        value={renavamVeiculoEdit}
                        onChange={(e) => setRenavamVeiculoEdit(e.target.value)}
                        placeholder='Renavam'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                        <p><span>Proprietário: </span>
                        <Input 
                        type="text"
                        value={proprietarioVeiculoEdit}
                        onChange={(e) => setProprietarioVeiculoEdit(e.target.value)}
                        placeholder='Proprietário'
                        className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                    </div>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick= {() => {
                                    if (veiculoEdit){
                                        saveEditVeiculo(veiculoEdit, placaVeiculoEdit, chassiVeiculoEdit, renavamVeiculoEdit, proprietarioVeiculoEdit, statusVeiculoEdit);
                                        setShowDialogEditVeiculo(false);
                                        setVeiculoEdit(null);
                                    }
                                }}>Salvar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <AlertDialog open={showDialogDetalheVeiculo} onOpenChange={setShowDialogDetalheVeiculo}>
              <AlertDialogContent className="w-full">
                <AlertDialogHeader>
                  <AlertDialogTitle>Informações sobre a veiculo</AlertDialogTitle>
                </AlertDialogHeader>
                    <div className="bg-white p-6 rounded shadow-lg">
                        <div className='flex sgrid-cols-2 gap-4'>
                            <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                                <p><span>Placa: </span>{placaVeiculoDetalhe}</p>
                                <p><span>Chassi: </span>{chassiVeiculoDetalhe}</p>
                                <p><span>Renavam: </span>{renavamVeiculoDetalhe}</p>
                                <p><span>Proprietário: </span>{proprietarioVeiculoDetalhe}</p>
                            </div>                            
                            <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                                <p><span>CRLV: </span>{crlvVeiculoDetalhe}</p>
                                <p><span>Status: </span> {statusVeiculoDetalhe}</p>
                            </div>
                        </div>
                    </div>
                <AlertDialogFooter>
                  <AlertDialogAction onClick={() => openDialogEditVeiculo(veiculo)}>Editar</AlertDialogAction>
                  <AlertDialogCancel>Fechar</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog open={showDialogDeleteVeiculo} onOpenChange={setShowDialogDeleteVeiculo}>
              <AlertDialogContent className="w-full">
                <AlertDialogHeader>
                  <AlertDialogTitle>Deseja apagar a veiculo?</AlertDialogTitle>
                  <AlertDialogDescription>
                    A veiculo será apagada do sistema e não poderá ser recuperada.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
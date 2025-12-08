import { useState } from "react";
import { toast } from "sonner";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Eraser, FileText, MoreHorizontal, X } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";
import { Input } from "./ui/input";
import { VeiculoType } from "./Types";

export function ActionsCellVeiculos({veiculo, onRefresh }: { veiculo: VeiculoType, onRefresh: () => void}) {

    const [veiculos, setVeiculos] = useState<VeiculoType[]> ([]);
    const [veiculoEdit, setVeiculoEdit] = useState<VeiculoType | null>(null);
    const [apagarVeiculo, setApagarVeiculo] = useState<VeiculoType | null>(null);

    const [showDialogDetalheVeiculo, setShowDialogDetalheVeiculo] = useState(false);
    const [showDialogEditVeiculo, setShowDialogEditVeiculo] = useState(false);
    const [showDialogDeleteVeiculo, setShowDialogDeleteVeiculo] = useState(false);

    function openDialogDeleteVeiculo(veiculo: VeiculoType) {
      setApagarVeiculo(veiculo);
      setShowDialogDeleteVeiculo(true);
    }

    function openDialogDetalheVeiculo(veiculo: VeiculoType) {
      setVeiculoEdit(veiculo);
      setShowDialogDetalheVeiculo(true);
    }

    function openDialogEditVeiculo(veiculo: VeiculoType) {
      setVeiculoEdit(veiculo);
      setShowDialogEditVeiculo(true);
    }

    async function saveEditVeiculo(veiculoEdit: VeiculoType) {
      if (!veiculoEdit) {
        console.error('veiculoEdit não está definido');
        return;
      }

      try {
          const response = await fetch(`/api/veiculo`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  id: veiculoEdit.id,
                  updatedVeiculos: {
                  placaVeiculo: veiculoEdit.placaVeiculo,
                  chassiVeiculo: veiculoEdit.chassiVeiculo,
                  renavamVeiculo: veiculoEdit.renavamVeiculo,
                  proprietarioVeiculo: veiculoEdit.proprietarioVeiculo,
                  crlvVeiculo: veiculoEdit.crlvVeiculo
                  }
              }),
          });

          if (response.status === 403) {
              toast.error('Você não tem permissão para editar este veículo.');
              return;
          }

          toast.success('Veículo atualizado com sucesso!');

          if (!response.ok) {
              throw new Error('Falha ao atualizar veículo');
          }

          onRefresh();
      } catch (error) {
          console.error('Erro ao atualizar veículo:', error);
      }
        
    }

    async function deleteVeiculo(id: string) {
      try {
          const response = await fetch(`/api/veiculo`, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id }),
          });

          if (response.status === 403) {
              toast.error('Você não tem permissão para deletar este veículo.');
              return;
          }

          if (!response.ok) {
              throw new Error('Falha ao deletar veículo');
          }
          toast.success('Veículo deletado com sucesso!');
          onRefresh();
      } catch (error) {
          console.error('Erro ao deletar veículo:', error);
      }  
    }

    async function fetchVeiculos() {
      try {
          const response = await fetch('/api/veiculo', { cache: 'no-store' });
          if (!response.ok) {
              console.error('Falha ao buscar veiculos:', response.statusText);
              return;
          }
          const data = await response.json();
          setVeiculos(data);
      } catch (error) {
          console.error('Erro ao buscar veiculos:', error);
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
          </DropdownMenuContent>
          </DropdownMenu>

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
                      value={veiculoEdit?.placaVeiculo ?? ''}
                      onChange={(e) => setVeiculoEdit({...(veiculoEdit as VeiculoType), placaVeiculo: e.target.value})}
                      placeholder='Placa'
                      className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                      <p><span>Chassi: </span>
                      <Input 
                      type="text"
                      value={veiculoEdit?.chassiVeiculo ?? ''}
                      onChange={(e) => setVeiculoEdit({...(veiculoEdit as VeiculoType), chassiVeiculo: e.target.value})}
                      placeholder='Chassi'
                      className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                      <p><span>Renavam: </span>
                      <Input 
                      type="text"
                      value={veiculoEdit?.renavamVeiculo ?? ''}
                      onChange={(e) => setVeiculoEdit({...(veiculoEdit as VeiculoType), renavamVeiculo: e.target.value})}
                      placeholder='Renavam'
                      className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                      <p><span>Proprietário: </span>
                      <Input 
                      type="text"
                      value={veiculoEdit?.proprietarioVeiculo ?? ''}
                      onChange={(e) => setVeiculoEdit({...(veiculoEdit as VeiculoType), proprietarioVeiculo: e.target.value})}
                      placeholder='Proprietário'
                      className='w-full text-gray-500 rounded mb-2 border border-gray-300'/></p>
                  </div>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick= {() => {
                                  if (veiculoEdit) {
                                      saveEditVeiculo(veiculoEdit);
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
                              <p><span>Placa: </span>{veiculoEdit?.placaVeiculo}</p>
                              <p><span>Chassi: </span>{veiculoEdit?.chassiVeiculo}</p>
                              <p><span>Renavam: </span>{veiculoEdit?.renavamVeiculo}</p>
                              <p><span>Proprietário: </span>{veiculoEdit?.proprietarioVeiculo}</p>
                          </div>                            
                          <div className='flex flex-col gap-2 w-1/3 justify-items-start'>
                              <p><span>CRLV: </span>{veiculoEdit?.crlvVeiculo}</p>
                              <p><span>Status: </span> {}</p>
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
                <AlertDialogAction onClick={() => {
                  if (apagarVeiculo?.id) {
                    deleteVeiculo(apagarVeiculo?.id)
                  } else {
                    
                  }
                }}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
      </div>
    )
}
import { useState } from "react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Eraser, FileText, MoreHorizontal, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Input } from "./ui/input";
import { Motorista } from "@/generated/prisma";

export function ActionsMotorista({
  motorista,
  onRefresh,
}: {
  motorista: Motorista;
  onRefresh: () => void;
}) {
  const [motoristas, setMotoristas] = useState<Motorista[]>([]);
  const [motoristaEdit, setMotoristaEdit] = useState<Motorista | null>(null);
  const [apagarMotorista, setApagarMotorista] = useState<Motorista | null>(
    null
  );

  const [showDialogDetalheMotorista, setShowDialogDetalheMotorista] =
    useState(false);
  const [showDialogEditMotorista, setShowDialogEditMotorista] = useState(false);
  const [showDialogDeleteMotorista, setShowDialogDeleteMotorista] =
    useState(false);

  function openDialogDeleteMotorista(motorista: Motorista) {
    setApagarMotorista(motorista);
    setShowDialogDeleteMotorista(true);
  }

  function openDialogDetalheMotorista(motorista: Motorista) {
    setMotoristaEdit(motorista);
    setShowDialogDetalheMotorista(true);
  }

  function openDialogEditMotorista(motorista: Motorista) {
    setMotoristaEdit(motorista);
    setShowDialogEditMotorista(true);
  }

  async function saveEditMotorista(motoristaEdit: Motorista) {
    if (!motoristaEdit) {
      console.error("motoristaEdit não está definido");
      return;
    }

    try {
      const response = await fetch(`/api/motorista`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: motoristaEdit.id,
          updatedMotoristas: {
            nome: motoristaEdit.nome,
            contato: motoristaEdit.contato,
          },
        }),
      });

      if (response.status === 403) {
        toast.error("Você não tem permissão para editar este veículo.");
        return;
      }

      toast.success("Veículo atualizado com sucesso!");

      if (!response.ok) {
        throw new Error("Falha ao atualizar veículo");
      }

      onRefresh();
    } catch (error) {
      console.error("Erro ao atualizar veículo:", error);
    }
  }

  async function deleteMotorista(id: string) {
    try {
      const response = await fetch(`/api/motorista`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.status === 403) {
        toast.error("Você não tem permissão para deletar este veículo.");
        return;
      }

      if (!response.ok) {
        throw new Error("Falha ao deletar veículo");
      }
      toast.success("Veículo deletado com sucesso!");
      onRefresh();
    } catch (error) {
      console.error("Erro ao deletar veículo:", error);
    }
  }

  async function fetchMotoristas() {
    try {
      const response = await fetch("/api/motorista", { cache: "no-store" });
      if (!response.ok) {
        console.error("Falha ao buscar motoristas:", response.statusText);
        return;
      }
      const data = await response.json();
      setMotoristas(data);
    } catch (error) {
      console.error("Erro ao buscar motoristas:", error);
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
          <DropdownMenuItem
            onClick={() => openDialogDetalheMotorista(motorista)}
          >
            <FileText />
            Detalhes
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => openDialogEditMotorista(motorista)}>
            <Eraser />
            Editar
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => openDialogDeleteMotorista(motorista)}
          >
            <X />
            Deletar
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog
        open={showDialogEditMotorista}
        onOpenChange={setShowDialogEditMotorista}
      >
        <AlertDialogContent className="w-full">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Edite os campos abaixo e clique em salvar.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 w-1/3 justify-items-start">
              <p>
                <span>Nome: </span>
                <Input
                  type="text"
                  value={motoristaEdit?.nome ?? ""}
                  onChange={(e) =>
                    setMotoristaEdit({
                      ...(motoristaEdit as Motorista),
                      nome: e.target.value,
                    })
                  }
                  placeholder="Placa"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p>
                <span>Contato: </span>
                <Input
                  type="number"
                  value={motoristaEdit?.contato ?? ""}
                  onChange={(e) =>
                    setMotoristaEdit({
                      ...(motoristaEdit as Motorista),
                      contato: e.target.value,
                    })
                  }
                  placeholder="Chassi"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (motoristaEdit) {
                  saveEditMotorista(motoristaEdit);
                  setShowDialogEditMotorista(false);
                  setMotoristaEdit(null);
                }
              }}
            >
              Salvar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog
        open={showDialogDetalheMotorista}
        onOpenChange={setShowDialogDetalheMotorista}
      >
        <AlertDialogContent className="w-full">
          <AlertDialogHeader>
            <AlertDialogTitle>Informações sobre a motorista</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="bg-white p-6 rounded shadow-lg">
            <div className="flex sgrid-cols-2 gap-4">
              <div className="flex flex-col gap-2 w-1/3 justify-items-start">
                <p>
                  <span>Nome: </span>
                  {motoristaEdit?.nome}
                </p>
                <p>
                  <span>Contato: </span>
                  {motoristaEdit?.contato}
                </p>
              </div>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => openDialogEditMotorista(motorista)}
            >
              Editar
            </AlertDialogAction>
            <AlertDialogCancel>Fechar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={showDialogDeleteMotorista}
        onOpenChange={setShowDialogDeleteMotorista}
      >
        <AlertDialogContent className="w-full">
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja apagar a motorista?</AlertDialogTitle>
            <AlertDialogDescription>
              A motorista será apagada do sistema e não poderá ser recuperada.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (apagarMotorista?.id) {
                  deleteMotorista(apagarMotorista?.id);
                } else {
                }
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

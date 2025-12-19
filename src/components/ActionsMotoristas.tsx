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
import { MotoristaType } from "@/components/Types";
import { DropMenuSecretaria } from "./DropMenuSecretarias";
import { User } from "@/generated/prisma";

export function ActionsMotorista({
  motorista,
  onRefresh,
  user,
  userAccessLevel,
}: {
  motorista: MotoristaType;
  onRefresh: () => void;
  user: User | null;
  userAccessLevel: string | null;
}) {
  const [motoristas, setMotoristas] = useState<MotoristaType[]>([]);
  const [motoristaEdit, setMotoristaEdit] = useState<MotoristaType | null>(
    null
  );
  const [secretariaId, setSecretariaId] = useState<string>("");
  const [apagarMotorista, setApagarMotorista] = useState<MotoristaType | null>(
    null
  );

  const [showDialogDetalheMotorista, setShowDialogDetalheMotorista] =
    useState(false);
  const [showDialogEditMotorista, setShowDialogEditMotorista] = useState(false);
  const [showDialogDeleteMotorista, setShowDialogDeleteMotorista] =
    useState(false);

  const isAdmin = (userAccessLevel: string | null) =>
    ["administrador"].includes(userAccessLevel ?? "");
  const isEditor = (userAccessLevel: string | null) =>
    ["administrador", "editor"].includes(userAccessLevel ?? "");

  function openDialogDeleteMotorista(motorista: MotoristaType) {
    setApagarMotorista(motorista);
    setShowDialogDeleteMotorista(true);
  }

  function openDialogDetalheMotorista(motorista: MotoristaType) {
    setMotoristaEdit(motorista);
    setSecretariaId(motorista.secretariaId ?? "");
    setShowDialogDetalheMotorista(true);
  }

  function openDialogEditMotorista(motorista: MotoristaType) {
    setMotoristaEdit(motorista);
    setShowDialogEditMotorista(true);
  }

  async function saveEditMotorista(motoristaEdit: MotoristaType) {
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
          updatedMotorista: {
            nome: motoristaEdit.nome,
            contato: motoristaEdit.contato,
            secretariaId: motoristaEdit.secretariaId ?? null,
          },
        }),
      });

      if (response.status === 403) {
        toast.error("Você não tem permissão para editar este motorista.");
        return;
      }

      toast.success("Motorista atualizado com sucesso!");

      if (!response.ok) {
        throw new Error("Falha ao atualizar motorista");
      }

      onRefresh();
    } catch (error) {
      console.error("Erro ao atualizar motorista:", error);
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
        toast.error("Você não tem permissão para deletar este motorista.");
        return;
      }

      if (!response.ok) {
        throw new Error("Falha ao deletar motorista");
      }
      toast.success("Motorista deletado com sucesso!");
      onRefresh();
    } catch (error) {
      console.error("Erro ao deletar motorista:", error);
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
            <span className="sr-only">Abir menu</span>
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
          {isEditor(userAccessLevel) && (
            <>
              <DropdownMenuItem
                onClick={() => openDialogEditMotorista(motorista)}
              >
                <Eraser />
                Editar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}
          {isAdmin(userAccessLevel) && (
            <>
              <DropdownMenuItem
                onClick={() => openDialogDeleteMotorista(motorista)}
              >
                <X />
                Deletar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog
        open={showDialogEditMotorista}
        onOpenChange={setShowDialogEditMotorista}
      >
        <AlertDialogContent className="max-w-sm sm:max-w-lg xl:max-w-1xl">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Você deseja editar as informações do motorista?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Edite os campos abaixo e clique em salvar.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 justify-items-start">
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Nome: </span>
                <Input
                  type="text"
                  value={motoristaEdit?.nome ?? ""}
                  onChange={(e) =>
                    setMotoristaEdit({
                      ...(motoristaEdit as MotoristaType),
                      nome: e.target.value,
                    })
                  }
                  placeholder="Nome"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Contato: </span>
                <Input
                  type="number"
                  value={motoristaEdit?.contato ?? ""}
                  onChange={(e) =>
                    setMotoristaEdit({
                      ...(motoristaEdit as MotoristaType),
                      contato: e.target.value,
                    })
                  }
                  placeholder="Contato"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p className="break-words whitespace-pre-wrap">
                <DropMenuSecretaria
                  secretariaIds={motoristaEdit?.secretariaId ?? null}
                  setSecretariaIds={(id) =>
                    setMotoristaEdit(
                      motoristaEdit && id
                        ? {
                            ...motoristaEdit,
                            secretariaId: id,
                          }
                        : null
                    )
                  }
                />
              </p>
            </div>
          </div>
          <AlertDialogFooter className="mt-4">
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
        <AlertDialogContent className="max-w-sm sm:max-w-lg xl:max-w-1xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Informações sobre a motorista</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="mt-3 flex gap-4">
            <div className="flex flex-col gap-2 justify-items-start">
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Nome: </span>
                {motoristaEdit?.nome}
              </p>
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Contato: </span>
                {motoristaEdit?.contato}
              </p>
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Secretaria: </span>
                {motoristaEdit?.secretaria?.nome || "N/A"}
              </p>
            </div>
          </div>
          <AlertDialogFooter className="mt-4">
            {isAdmin(userAccessLevel) && (
              <>
                <AlertDialogAction
                  onClick={() => openDialogEditMotorista(motorista)}
                >
                  Editar
                </AlertDialogAction>
              </>
            )}
            <AlertDialogCancel>Fechar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={showDialogDeleteMotorista}
        onOpenChange={setShowDialogDeleteMotorista}
      >
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja apagar a motorista?</AlertDialogTitle>
            <AlertDialogDescription className="p-5">
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

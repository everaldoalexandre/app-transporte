import { useEffect, useRef, useState } from "react";
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
import { VeiculoType } from "@/components/Types";
import { User } from "@/generated/prisma";
import { DropModeloVeiculo } from "./DropMenuModeloVeiculos";

export function ActionsVeiculos({
  veiculo,
  onRefresh,
  user,
  userAccessLevel,
}: {
  veiculo: VeiculoType;
  onRefresh: () => void;
  user: User | null;
  userAccessLevel: string | null;
}) {
  const [veiculos, setVeiculos] = useState<VeiculoType[]>([]);
  const [veiculoEdit, setVeiculoEdit] = useState<VeiculoType | null>(null);
  const [apagarVeiculo, setApagarVeiculo] = useState<VeiculoType | null>(null);

  const [showDialogDetalheVeiculo, setShowDialogDetalheVeiculo] =
    useState(false);
  const [showDialogEditVeiculo, setShowDialogEditVeiculo] = useState(false);
  const [showDialogDeleteVeiculo, setShowDialogDeleteVeiculo] = useState(false);

  const isAdmin = (userAccessLevel: string | null) =>
    ["administrador"].includes(userAccessLevel ?? "");
  const isEditor = (userAccessLevel: string | null) =>
    ["administrador", "editor"].includes(userAccessLevel ?? "");

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
      console.error("veiculoEdit não está definido");
      return;
    }

    try {
      const response = await fetch(`/api/veiculo`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: veiculoEdit.id,
          updatedVeiculos: {
            placaVeiculo: veiculoEdit.placaVeiculo,
            chassiVeiculo: veiculoEdit.chassiVeiculo,
            renavamVeiculo: veiculoEdit.renavamVeiculo,
            proprietarioVeiculo: veiculoEdit.proprietarioVeiculo,
            crlvVeiculo: veiculoEdit.crlvVeiculo,
            modeloId: veiculoEdit.modeloId || null,
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

  async function deleteVeiculo(id: string) {
    try {
      const response = await fetch(`/api/veiculo`, {
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

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Abrir menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => openDialogDetalheVeiculo(veiculo)}>
            <FileText />
            Detalhes
          </DropdownMenuItem>
          {isEditor(userAccessLevel) && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => openDialogEditVeiculo(veiculo)}>
                <Eraser />
                Editar
              </DropdownMenuItem>
            </>
          )}
          {isAdmin(userAccessLevel) && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => openDialogDeleteVeiculo(veiculo)}
              >
                <X />
                Deletar
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog
        open={showDialogEditVeiculo}
        onOpenChange={setShowDialogEditVeiculo}
      >
        <AlertDialogContent className="max-w-sm sm:max-w-lg xl:max-w-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Deseja editar as informações do veículo?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Edite os campos abaixo e clique em salvar.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 w-1/2 justify-items-start">
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Placa: </span>
                <Input
                  type="text"
                  value={veiculoEdit?.placaVeiculo ?? ""}
                  onChange={(e) =>
                    setVeiculoEdit({
                      ...(veiculoEdit as VeiculoType),
                      placaVeiculo: e.target.value,
                    })
                  }
                  placeholder="Placa"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Chassi: </span>
                <Input
                  type="text"
                  value={veiculoEdit?.chassiVeiculo ?? ""}
                  onChange={(e) =>
                    setVeiculoEdit({
                      ...(veiculoEdit as VeiculoType),
                      chassiVeiculo: e.target.value,
                    })
                  }
                  placeholder="Chassi"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Renavam: </span>
                <Input
                  type="text"
                  value={veiculoEdit?.renavamVeiculo ?? ""}
                  onChange={(e) =>
                    setVeiculoEdit({
                      ...(veiculoEdit as VeiculoType),
                      renavamVeiculo: e.target.value,
                    })
                  }
                  placeholder="Renavam"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
            </div>
            <div className="flex flex-col gap-2 w-1/2 justify-items-start">
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Proprietário:</span>
                <Input
                  type="text"
                  value={veiculoEdit?.proprietarioVeiculo ?? ""}
                  onChange={(e) =>
                    setVeiculoEdit({
                      ...(veiculoEdit as VeiculoType),
                      proprietarioVeiculo: e.target.value,
                    })
                  }
                  placeholder="Proprietário"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Modelo: </span>
                <DropModeloVeiculo
                  modeloId={veiculoEdit?.modeloId ?? ""}
                  setModeloId={(value) =>
                    setVeiculoEdit((prev) => {
                      if (!prev) return prev;
                      return {
                        ...prev,
                        modeloId: value,
                      };
                    })
                  }
                />
              </p>
            </div>
          </div>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (veiculoEdit) {
                  saveEditVeiculo(veiculoEdit);
                  setShowDialogEditVeiculo(false);
                  setVeiculoEdit(null);
                }
              }}
            >
              Salvar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog
        open={showDialogDetalheVeiculo}
        onOpenChange={setShowDialogDetalheVeiculo}
      >
        <AlertDialogContent className="max-w-sm sm:max-w-lg xl:max-w-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Informações sobre a veículo</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="mt-2 flex sgrid-cols-2 gap-4">
            <div className="flex flex-col gap-2 w-1/2 justify-items-start">
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Placa: </span>
                {veiculoEdit?.placaVeiculo}
              </p>
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Chassi: </span>
                {veiculoEdit?.chassiVeiculo}
              </p>
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Renavam: </span>
                {veiculoEdit?.renavamVeiculo}
              </p>
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Proprietário: </span>
                {veiculoEdit?.proprietarioVeiculo}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-1/2 justify-items-start">
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">CRLV: </span>
                {veiculoEdit?.crlvVeiculo}
              </p>
              <p>
                <span className="font-medium">Status: </span> {}
              </p>
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Modelo: </span>{" "}
                {veiculoEdit?.modelo?.modelo}
              </p>
            </div>
          </div>

          <AlertDialogFooter className="mt-4">
            {isEditor(userAccessLevel) && (
              <AlertDialogAction onClick={() => openDialogEditVeiculo(veiculo)}>
                Editar
              </AlertDialogAction>
            )}
            <AlertDialogCancel>Fechar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={showDialogDeleteVeiculo}
        onOpenChange={setShowDialogDeleteVeiculo}
      >
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja apagar a veículo?</AlertDialogTitle>
            <AlertDialogDescription className="p-5">
              O veículo será apagada do sistema e não poderá ser recuperada.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (apagarVeiculo?.id) {
                  deleteVeiculo(apagarVeiculo?.id);
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

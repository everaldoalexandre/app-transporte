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
import { UsuarioType } from "@/components/Types";
import { DropMenuSecretaria } from "./DropMenuSecretarias";
import { User } from "@/generated/prisma";
import { DropMenuAcessos } from "./DropMenuAcessoUsuario";

export function ActionsUsuario({
  usuario,
  onRefresh,
  user,
  userAccessLevel,
}: {
  usuario: UsuarioType;
  onRefresh: () => void;
  user: User | null;
  userAccessLevel: string | null;
}) {
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);
  const [usuarioEdit, setUsuarioEdit] = useState<UsuarioType | null>(null);
  const [secretariaIds, setSecretariaIds] = useState<string>(
    usuarioEdit?.secretarias?.[0]?.secretariaId ?? ""
  );
  const [apagarUsuario, setApagarUsuario] = useState<UsuarioType | null>(null);

  const [showDialogDetalheUsuario, setShowDialogDetalheUsuario] =
    useState(false);
  const [showDialogEditUsuario, setShowDialogEditUsuario] = useState(false);
  const [showDialogDeleteUsuario, setShowDialogDeleteUsuario] = useState(false);

  const isAdmin = (userAccessLevel: string | null) =>
    ["administrador"].includes(userAccessLevel ?? "");
  const isEditor = (userAccessLevel: string | null) =>
    ["administrador", "editor"].includes(userAccessLevel ?? "");

  function openDialogDeleteUsuario(usuario: UsuarioType) {
    setApagarUsuario(usuario);
    setShowDialogDeleteUsuario(true);
  }

  function openDialogDetalheUsuario(usuario: UsuarioType) {
    setUsuarioEdit(usuario);
    setSecretariaIds(usuario.secretarias?.[0].secretariaId ?? "");
    setShowDialogDetalheUsuario(true);
  }

  function openDialogEditUsuario(usuario: UsuarioType) {
    setUsuarioEdit(usuario);
    setShowDialogEditUsuario(true);
  }

  async function saveEditUsuario(usuarioEdit: UsuarioType) {
    if (!usuarioEdit) {
      console.error("usuarioEdit não está definido");
      return;
    }

    try {
      const response = await fetch(`/api/usuario`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: usuarioEdit.id,
          updatedUsuario: {
            nome: usuarioEdit.name,
            contato: usuarioEdit.email,
            secretarias:
              usuarioEdit.secretarias?.map((s) => s.secretariaId) || [],
          },
        }),
      });

      if (response.status === 403) {
        toast.error("Você não tem permissão para editar este usuário.");
        return;
      }

      toast.success("Usuário atualizado com sucesso!");

      if (!response.ok) {
        throw new Error("Falha ao atualizar usuário");
      }

      onRefresh();
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  }

  async function deleteUsuario(id: string) {
    try {
      const response = await fetch(`/api/usuario`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.status === 403) {
        toast.error("Você não tem permissão para deletar este usuário.");
        return;
      }

      if (!response.ok) {
        throw new Error("Falha ao deletar usuário");
      }
      toast.success("Usuário deletado com sucesso!");
      onRefresh();
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  }

  async function fetchUsuarios() {
    try {
      const response = await fetch("/api/usuario", { cache: "no-store" });
      if (!response.ok) {
        console.error("Falha ao buscar usuarios:", response.statusText);
        return;
      }
      const data = await response.json();
      setUsuarios(data.usuarios);
    } catch (error) {
      console.error("Erro ao buscar usuarios:", error);
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
          <DropdownMenuItem onClick={() => openDialogDetalheUsuario(usuario)}>
            <FileText />
            Detalhes
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {isEditor(userAccessLevel) && (
            <>
              <DropdownMenuItem onClick={() => openDialogEditUsuario(usuario)}>
                <Eraser />
                Editar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}
          {isAdmin(userAccessLevel) && (
            <>
              <DropdownMenuItem
                onClick={() => openDialogDeleteUsuario(usuario)}
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
        open={showDialogEditUsuario}
        onOpenChange={setShowDialogEditUsuario}
      >
        <AlertDialogContent className="max-w-sm sm:max-w-lg xl:max-w-1xl">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Você deseja editar as informações do usuário?
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
                  value={usuarioEdit?.name ?? ""}
                  onChange={(e) =>
                    setUsuarioEdit({
                      ...(usuarioEdit as UsuarioType),
                      name: e.target.value,
                    })
                  }
                  placeholder="Nome"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">E-mail: </span>
                <Input
                  type="email"
                  value={usuarioEdit?.email ?? ""}
                  onChange={(e) =>
                    setUsuarioEdit({
                      ...(usuarioEdit as UsuarioType),
                      email: e.target.value,
                    })
                  }
                  placeholder="E-mail"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p>
                <DropMenuSecretaria
                  secretariaIds={
                    usuarioEdit?.secretarias?.[0]?.secretariaId ?? null
                  }
                  setSecretariaIds={(ids) =>
                    setUsuarioEdit((prev) =>
                      prev
                        ? {
                            ...prev,
                            secretariaId: prev.secretarias?.map((s, i) =>
                              i === 0 ? { ...s, secretariaId: ids || "" } : s
                            ),
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
                if (usuarioEdit) {
                  saveEditUsuario(usuarioEdit);
                  setShowDialogEditUsuario(false);
                  setUsuarioEdit(null);
                }
              }}
            >
              Salvar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog
        open={showDialogDetalheUsuario}
        onOpenChange={setShowDialogDetalheUsuario}
      >
        <AlertDialogContent className="max-w-sm sm:max-w-lg xl:max-w-1xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Informações sobre a usuário</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="flex mt-4 sgrid-cols-2 gap-4">
            <div className="flex flex-col gap-2 justify-items-start">
              <p>
                <span className="font-medium">Nome: </span>
                {usuarioEdit?.name}
              </p>
              <p>
                <span className="font-medium">E-mail: </span>
                {usuarioEdit?.email}
              </p>
              <p>
                <span className="font-medium">Secretaria: </span>
                {usuarioEdit?.secretarias?.[0].secretaria.nome || "N/A"}
              </p>
            </div>
          </div>
          <AlertDialogFooter className="mt-4">
            {isEditor(userAccessLevel) && (
              <>
                <AlertDialogAction
                  onClick={() => openDialogEditUsuario(usuario)}
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
        open={showDialogDeleteUsuario}
        onOpenChange={setShowDialogDeleteUsuario}
      >
        <AlertDialogContent className="max-w-sm sm:max-w-lg xl:max-w-1xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja apagar a usuário?</AlertDialogTitle>
            <AlertDialogDescription>
              A usuário será apagada do sistema e não poderá ser recuperada.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (apagarUsuario?.id) {
                  deleteUsuario(apagarUsuario?.id);
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

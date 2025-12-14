import { useState } from "react";
import { toast } from "sonner";
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
import { DropMenuSecretarias } from "./DropdownSecretarias";

export function NovoUsuario({
  openNovoUsuario,
  openChangeNovoUsuario,
  onRefresh,
}: {
  openNovoUsuario: boolean;
  openChangeNovoUsuario: (v: boolean) => void;
  onRefresh: () => void;
}) {
  const [usuario, setUsuario] = useState<UsuarioType[]>([]);
  const [usuarioNovo, setUsuarioNovo] = useState({
    name: "",
    email: "",
    secretarias: [] as string[],
  });

  const [showDialogNovoUsuario, setShowDialogNovoUsuario] = useState(false);

  function openDialogNovoUsuario(usuario: UsuarioType) {
    setUsuarioNovo({
      name: usuario.name,
      email: usuario.email,
      secretarias: usuario.secretarias?.map((s) => s.secretariaId) || [],
    });
    setShowDialogNovoUsuario(true);
  }

  async function cadastroUsuario(e: React.FormEvent) {
    e.preventDefault();

    try {
      if (!usuarioNovo.name || !usuarioNovo.email) {
        toast.error("Preencha todos os campos obrigatórios.");
        return;
      }
      const response = await fetch(`/api/usuario`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuarioNovo }),
      });

      if (response.status === 403) {
        toast.error("Acesso negado. Nível de acesso insuficiente.");
        return;
      }
      if (!response.ok) {
        throw new Error("Falha ao cadastrar usuario");
      }
      toast.success("Usuario cadastrado com sucesso!");
      setUsuarioNovo({
        name: "",
        email: "",
        secretarias: [],
      });
      onRefresh();
    } catch (error) {
      console.error("Erro ao cadastrar usuario", error);
    }
  }

  async function fetchVeiculos() {
    try {
      const response = await fetch("/api/usuario", { cache: "no-store" });
      if (!response.ok) {
        console.error("Falha ao carregar usuarios:", response.statusText);
        return;
      }
      const data = await response.json();
      setUsuario(data);
    } catch (error) {
      console.error("Erro ao carregar usuarios:", error);
    }
  }
  return (
    <AlertDialog open={openNovoUsuario} onOpenChange={openChangeNovoUsuario}>
      <AlertDialogContent className="w-full">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Gostaria de cadastrar um novo usuario?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Preencha os campos com as Informações do usuario
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={cadastroUsuario}>
          <div className="flex grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 w-1/3 justify-items-start">
              <p>
                <span>Nome: </span>
                <Input
                  type="text"
                  value={usuarioNovo?.name}
                  onChange={(e) =>
                    setUsuarioNovo((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  placeholder="Nome"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p>
                <span>E-mail: </span>
                <Input
                  type="email"
                  value={usuarioNovo?.email}
                  onChange={(e) =>
                    setUsuarioNovo((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  placeholder="E-mail"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <label>
                <span className="font-medium">Secretaria(s): </span>
                <DropMenuSecretarias
                  secretariaIds={usuarioNovo.secretarias}
                  setSecretariaIds={(ids) =>
                    setUsuarioNovo((prev) => ({
                      ...prev,
                      secretarias: ids,
                    }))
                  }
                />
              </label>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit">Salvar</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

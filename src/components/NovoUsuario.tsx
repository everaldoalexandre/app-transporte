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
import { DropMenuSecretarias } from "./DropMenuSecretarias";

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
        throw new Error("Falha ao cadastrar usuário");
      }
      toast.success("Usuário cadastrado com sucesso!");
      setUsuarioNovo({
        name: "",
        email: "",
        secretarias: [],
      });
      onRefresh();
    } catch (error) {
      console.error("Erro ao cadastrar usuário", error);
    }
  }

  async function fetchVeiculos() {
    try {
      const response = await fetch("/api/usuario", { cache: "no-store" });
      if (!response.ok) {
        console.error("Falha ao carregar usuários:", response.statusText);
        return;
      }
      const data = await response.json();
      setUsuario(data);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  }
  return (
    <AlertDialog open={openNovoUsuario} onOpenChange={openChangeNovoUsuario}>
      <AlertDialogContent className="max-w-sm sm:max-w-lg xl:max-w-xl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Gostaria de cadastrar um novo usuário?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Preencha os campos com as informações do usuário
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={cadastroUsuario}>
          <div className="mt-4 flex gap-4">
            <div className="flex flex-col gap-2 justify-items-start">
              <p>
                <span className="font-medium">Nome: </span>
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
                <span className="font-medium">E-mail: </span>
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
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit">Cadastrar</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

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
import { MotoristaType } from "@/components/Types";
import { DropMenuSecretaria } from "./DropMenuSecretarias";

export function NovoMotorista({
  openNovoMotorista,
  openChangeNovoMotorista,
  onRefresh,
}: {
  openNovoMotorista: boolean;
  openChangeNovoMotorista: (v: boolean) => void;
  onRefresh: () => void;
}) {
  const [motorista, setMotorista] = useState<MotoristaType[]>([]);
  const [secretariaIds, setSecretariaIds] = useState<string>("");
  const [motoristaNovo, setMotoristaNovo] = useState({
    nome: "",
    contato: "",
    secretariaId: "" as string | null,
  });

  const [showDialogNovoMotorista, setShowDialogNovoMotorista] = useState(false);

  function openDialogNovoMotorista(motorista: MotoristaType) {
    setMotoristaNovo(motorista);
    setSecretariaIds(motorista?.secretariaId ?? "");
    setShowDialogNovoMotorista(true);
  }

  async function cadastroMotorista(e: React.FormEvent) {
    e.preventDefault();

    try {
      if (!motoristaNovo.nome || !motoristaNovo.contato) {
        toast.error("Preencha todos os campos obrigatórios.");
        return;
      }
      const response = await fetch(`/api/motorista`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ motoristaNovo }),
      });

      if (response.status === 403) {
        toast.error("Acesso negado. Nível de acesso insuficiente.");
        return;
      }
      if (!response.ok) {
        throw new Error("Falha ao cadastrar motorista");
      }
      toast.success("Motorista cadastrado com sucesso!");
      setMotoristaNovo({
        nome: "",
        contato: "",
        secretariaId: null,
      });
      onRefresh();
    } catch (error) {
      console.error("Erro ao cadastrar motorista", error);
    }
  }

  async function fetchVeiculos() {
    try {
      const response = await fetch("/api/motorista", { cache: "no-store" });
      if (!response.ok) {
        console.error("Falha ao carregar motoristas:", response.statusText);
        return;
      }
      const data = await response.json();
      setMotorista(data);
    } catch (error) {
      console.error("Erro ao carregar motoristas:", error);
    }
  }
  return (
    <AlertDialog
      open={openNovoMotorista}
      onOpenChange={openChangeNovoMotorista}
    >
      <AlertDialogContent className="max-w-sm sm:max-w-lg xl:max-w-xl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Gostaria de cadastrar um novo motorista?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Preencha os campos com as informações do motorista
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={cadastroMotorista}>
          <div className="mt-4 flex grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 justify-items-start">
              <p>
                <span className="font-medium">Nome: </span>
                <Input
                  type="text"
                  value={motoristaNovo?.nome}
                  onChange={(e) =>
                    setMotoristaNovo((prev) => ({
                      ...prev,
                      nome: e.target.value,
                    }))
                  }
                  placeholder="Nome"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p>
                <span className="font-medium">Contato: </span>
                <Input
                  type="text"
                  value={motoristaNovo?.contato}
                  onChange={(e) =>
                    setMotoristaNovo((prev) => ({
                      ...prev,
                      contato: e.target.value,
                    }))
                  }
                  placeholder="Contato"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p>
                <span className="font-medium">Secretaria: </span>
                <DropMenuSecretaria
                  secretariaIds={motoristaNovo.secretariaId}
                  setSecretariaIds={(ids) =>
                    setMotoristaNovo((prev) => ({
                      ...prev,
                      secretariaId: ids,
                    }))
                  }
                />
              </p>
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

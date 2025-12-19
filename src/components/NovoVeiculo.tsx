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
import { VeiculoType } from "@/components/Types";
import { DropModeloVeiculo } from "./DropMenuModeloVeiculos";

export function NovoVeiculo({
  openNovoVeiculo,
  openChangeNovoVeiculo,
  onRefresh,
}: {
  openNovoVeiculo: boolean;
  openChangeNovoVeiculo: (v: boolean) => void;
  onRefresh: () => void;
}) {
  const [veiculos, setVeiculos] = useState<VeiculoType[]>([]);
  const [modeloVeiculo, setModeloVeiculo] = useState<string>("");
  const [veiculoNovo, setVeiculoNovo] = useState({
    placaVeiculo: "",
    chassiVeiculo: "",
    renavamVeiculo: "",
    proprietarioVeiculo: "",
    crlvVeiculo: "",
    modeloId: "" as string | null,
  });

  const [showDialogNovoVeiculo, setShowDialogNovoVeiculo] = useState(false);

  function openDialogNovoVeiculo(veiculo: VeiculoType) {
    setVeiculoNovo(veiculo);
    setModeloVeiculo(veiculo?.modeloId ?? "");
    setShowDialogNovoVeiculo(true);
  }

  async function adicionarVeiculo(e: React.FormEvent) {
    e.preventDefault();

    try {
      if (
        !veiculoNovo.placaVeiculo ||
        !veiculoNovo.chassiVeiculo ||
        !veiculoNovo.renavamVeiculo ||
        !veiculoNovo.proprietarioVeiculo
      ) {
        toast.error("Preencha todos os campos obrigatórios.");
        return;
      }
      const response = await fetch(`/api/veiculo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ veiculoNovo }),
      });

      if (response.status === 403) {
        toast.error("Acesso negado. Nível de acesso insuficiente.");
        return;
      }
      if (!response.ok) {
        throw new Error("Falha ao criar veículo");
      }
      toast.success("Veículo criado com sucesso!");
      setVeiculoNovo(veiculoNovo);
      onRefresh();
    } catch (error) {
      console.error("Erro ao criar veículo", error);
    }
  }

  async function fetchVeiculos() {
    try {
      const response = await fetch("/api/veiculo", { cache: "no-store" });
      if (!response.ok) {
        console.error("Falha ao carregar veículos:", response.statusText);
        return;
      }
      const data = await response.json();
      setVeiculos(data);
    } catch (error) {
      console.error("Erro ao carregar veículos:", error);
    }
  }
  return (
    <AlertDialog open={openNovoVeiculo} onOpenChange={openChangeNovoVeiculo}>
      <AlertDialogContent className="max-w-sm sm:max-w-lg xl:max-w-xl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Gostaria de adicionar um novo veículo?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Preencha os campos com as Informações do veículo
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={adicionarVeiculo}>
          <div className="mt-4 flex grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 w-1/2 justify-items-start">
              <p>
                <span className="font-medium">Placa: </span>
                <Input
                  type="text"
                  value={veiculoNovo?.placaVeiculo}
                  onChange={(e) =>
                    setVeiculoNovo((prev) => ({
                      ...prev,
                      placaVeiculo: e.target.value,
                    }))
                  }
                  placeholder="Placa"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p>
                <span className="font-medium">Chassi: </span>
                <Input
                  type="text"
                  value={veiculoNovo?.chassiVeiculo}
                  onChange={(e) =>
                    setVeiculoNovo((prev) => ({
                      ...prev,
                      chassiVeiculo: e.target.value,
                    }))
                  }
                  placeholder="Chassi"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p>
                <span className="font-medium">Renavam: </span>
                <Input
                  type="text"
                  value={veiculoNovo?.renavamVeiculo}
                  onChange={(e) =>
                    setVeiculoNovo((prev) => ({
                      ...prev,
                      renavamVeiculo: e.target.value,
                    }))
                  }
                  placeholder="Renavam"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium">Proprietário: </span>
                <Input
                  type="text"
                  value={veiculoNovo?.proprietarioVeiculo}
                  onChange={(e) =>
                    setVeiculoNovo((prev) => ({
                      ...prev,
                      proprietarioVeiculo: e.target.value,
                    }))
                  }
                  placeholder="Proprietário"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p>
                <span className="font-medium">Modelo: </span>
                <DropModeloVeiculo
                  modeloId={veiculoNovo?.modeloId ?? ""}
                  setModeloId={(value) =>
                    setVeiculoNovo((prev) => ({
                      ...prev,
                      modeloId: value,
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

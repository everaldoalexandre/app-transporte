import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  Check,
  ClipboardPen,
  FileText,
  MoreHorizontal,
  X,
  Send,
} from "lucide-react";
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
import { DropMenu } from "./StatusDemanda";
import { Demanda, Veiculo, Motorista } from "@/generated/prisma";
import { DemandaType } from "./Types";
import { TooltipContent, Tooltip, TooltipTrigger } from "./ui/tooltip";

export function ActionsCell({
  demanda,
  onRefresh,
}: {
  demanda: DemandaType;
  onRefresh: () => void;
}) {
  const [demandas, setDemandas] = useState<Demanda[]>([]);
  const [demandaEdit, setDemandaEdit] = useState<DemandaType | null>(null);
  const [veiculoEdit, setVeiculoEdit] = useState<Veiculo | null>(null);
  const [motoristaEdit, setMotoristaEdit] = useState<Motorista | null>(null);

  const [showModalDetalhesDemanda, setShowModalDetalhesDemanda] =
    useState(false);
  const [showModalEditDemanda, setShowModalEditDemanda] = useState(false);
  const [showModalDeleteDemanda, setShowModalDeleteDemanda] = useState(false);
  const [showModalFinalizarDemanda, setShowModalFinalizarDemanda] =
    useState(false);

  const [demandaFinalizada, setDemandaFinalizada] = useState<Demanda | null>(
    null
  );
  const [demandaDelete, setDemandaDelete] = useState<Demanda | null>(null);
  const [statusDemanda, setStatusDemanda] = useState("");
  const [queryPlaca, setQueryPlaca] = useState<string>("");
  const [resultadosVeiculo, setResultadosVeiculo] = useState<Veiculo[]>([]);
  const [loadingPlaca, setLoadingPlaca] = useState(false);
  const [queryMotorista, setQueryMotorista] = useState<string>("");
  const [resultadosMotorista, setResultadosMotorista] = useState<Motorista[]>(
    []
  );
  const [loadingMotorista, setLoadingMotorista] = useState(false);

  function openModalDeleteDemanda(demanda: DemandaType) {
    setDemandaDelete(demanda);
    setShowModalDeleteDemanda(true);
  }

  function openModalDetalhesDemanda(demanda: DemandaType) {
    setDemandaEdit(demanda);
    setShowModalDetalhesDemanda(true);
  }

  function openModalEditDemanda(demanda: DemandaType) {
    setDemandaEdit(demanda);
    setStatusDemanda(demanda.statusDemanda || "");
    setQueryPlaca(demanda.veiculo?.placaVeiculo || "");
    setQueryMotorista(demanda.motorista?.nome || "");
    setShowModalEditDemanda(true);
  }

  function closeModalEditDemanda() {
    setShowModalEditDemanda(false);
    setDemandaEdit(null);
    setResultadosMotorista([]);
    setResultadosVeiculo([]);
    setQueryMotorista("");
    setQueryPlaca("");
  }

  function openModalFinalizarDemanda(demanda: DemandaType) {
    setDemandaFinalizada(demanda);
    setShowModalFinalizarDemanda(true);
  }

  async function buscarPlacas(texto: string) {
    try {
      setLoadingPlaca(true);
      const res = await fetch(`/api/veiculo?search=${texto}`);
      const data = await res.json();

      const veiculosArray = data.veiculos || [];

      if (
        demandaEdit?.veiculo &&
        !veiculosArray.find(
          (v: Veiculo) =>
            v.id === demandaEdit.veiculo?.id &&
            demandaEdit.veiculo.placaVeiculo
              .toLowerCase()
              .includes(texto.toLowerCase())
        )
      ) {
        veiculosArray.unshift(demandaEdit.veiculo);
      }
      setResultadosVeiculo(veiculosArray);
    } finally {
      setLoadingPlaca(false);
    }
  }

  async function buscarMotoristas(texto: string) {
    try {
      setLoadingMotorista(true);
      const res = await fetch(`/api/motorista?search=${texto}`);
      const data = await res.json();

      const motoristasArray = data.motorista || [];

      if (
        demandaEdit?.motorista &&
        !motoristasArray.find(
          (m: Motorista) =>
            m.id === demandaEdit.motorista?.id &&
            demandaEdit.motorista.nome
              .toLowerCase()
              .includes(texto.toLowerCase())
        )
      ) {
        motoristasArray.unshift(demandaEdit.motorista);
      }
      setResultadosMotorista(motoristasArray);
    } finally {
      setLoadingMotorista(false);
    }
  }

  async function saveEditDemanda(demandaEdit: DemandaType) {
    if (!demandaEdit) {
      console.error("DemandaEdit não está definido");
      return;
    }

    try {
      const response = await fetch(`/api/demanda`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: demandaEdit.id,
          updatedDemandas: {
            emailSolicitante: demandaEdit.emailSolicitante,
            demandaDetalhe: demandaEdit.demandaDetalhe,
            pessoaSolicitante: demandaEdit.pessoaSolicitante,
            secretariaSolicitante: demandaEdit.secretariaSolicitante,
            destino: demandaEdit.destino,
            dataHoraIda: demandaEdit.dataHoraIda,
            dataHoraVolta: demandaEdit.dataHoraVolta,
            origem: demandaEdit.origem,
            contato: demandaEdit.contato,
            statusDemanda: demandaEdit.statusDemanda,
            veiculoId: demandaEdit.veiculo?.id || null,
            motoristaId: demandaEdit.motorista?.id || null,
          },
        }),
      });

      if (response.status === 403) {
        toast.error("Você não tem permissão para editar esta demanda.");
        return;
      }

      if (!response.ok) {
        throw new Error("Falha ao atualizar demanda");
      }

      toast.success("Demanda atualizada com sucesso!");
      onRefresh();
    } catch (error) {
      console.error("Erro ao atualizar demanda:", error);
    }
  }

  async function saveDemandaFinalizada(demandaEdit: DemandaType) {
    if (!demandaEdit) return;
    try {
      const response = await fetch(`/api/demanda`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: demandaEdit.id,
          updatedDemandas: {
            statusDemanda: "Finalizada",
          },
        }),
      });

      if (response.status === 403) {
        toast.error("Você não tem permissão para finalizar esta demanda.");
        return;
      }

      toast.success("Demanda finalizada com sucesso!");

      if (response.ok) {
        setShowModalFinalizarDemanda(false);
        onRefresh();
      } else {
        throw new Error("Falha ao finalizar demanda");
      }
    } catch (error) {
      console.error("Erro ao finalizar demanda:", error);
    }
  }

  async function deletDemanda(id: string) {
    try {
      const response = await fetch(`/api/demanda`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.status === 403) {
        toast.error("Você não tem permissão para deletar esta demanda.");
        return;
      }

      if (!response.ok) {
        throw new Error("Falha ao deletar demanda");
      }
      toast.success("Demanda deletada com sucesso!");
      onRefresh();
    } catch (error) {
      console.error("Erro ao deletar demanda:", error);
    }
  }

  async function fetchDemandas() {
    try {
      const res = await fetch("/api/demanda");
      if (!res.ok) throw new Error("Falha ao buscar demandas");

      const data = await res.json();
      setDemandas(data.demandas);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (!queryPlaca || queryPlaca.length < 2) {
      setResultadosVeiculo([]);
      return;
    }

    const timer = setTimeout(() => {
      buscarPlacas(queryPlaca);
    }, 300);

    return () => clearTimeout(timer);
  }, [queryPlaca]);

  useEffect(() => {
    if (!queryMotorista || queryMotorista.length < 2) {
      setResultadosMotorista([]);
      return;
    }

    const timer = setTimeout(() => {
      buscarMotoristas(queryMotorista);
    }, 300);

    return () => clearTimeout(timer);
  }, [queryMotorista]);

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
          <DropdownMenuItem onClick={() => openModalDetalhesDemanda(demanda)}>
            <FileText />
            Detalhes
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => openModalEditDemanda(demanda)}>
            <ClipboardPen /> Editar
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => openModalFinalizarDemanda(demanda)}>
            <Check />
            Finalizar
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => openModalDeleteDemanda(demanda)}>
            <X />
            Deletar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog
        open={showModalEditDemanda}
        onOpenChange={setShowModalEditDemanda}
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
                <span>Solicitante: </span>
                <Input
                  type="text"
                  value={demandaEdit?.pessoaSolicitante}
                  onChange={(e) =>
                    setDemandaEdit((prev) =>
                      prev
                        ? { ...prev, pessoaSolicitante: e.target.value }
                        : prev
                    )
                  }
                  placeholder="Solicitante"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p>
                <span>Secretaria: </span>
                <Input
                  type="text"
                  value={demandaEdit?.secretariaSolicitante}
                  onChange={(e) =>
                    setDemandaEdit((prev) =>
                      prev
                        ? { ...prev, secretariaSolicitante: e.target.value }
                        : prev
                    )
                  }
                  placeholder="Secretaria Solicitante"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p>
                <span>E-mail: </span>
                <Input
                  type="text"
                  value={demandaEdit?.emailSolicitante}
                  onChange={(e) =>
                    setDemandaEdit((prev) =>
                      prev
                        ? { ...prev, emailSolicitante: e.target.value }
                        : prev
                    )
                  }
                  placeholder="E-mail"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p>
                <span>Contato: </span>
                <Input
                  type="text"
                  value={demandaEdit?.contato}
                  onChange={(e) =>
                    setDemandaEdit((prev) =>
                      prev ? { ...prev, contato: e.target.value } : prev
                    )
                  }
                  placeholder="Contato"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
            </div>
            <div className="flex flex-col gap-2 w-1/3 justify-items-start">
              <p>
                <span>Motorista: </span>
                <div className="relative">
                  <Input
                    type="text"
                    value={demandaEdit?.motorista?.nome || ""}
                    onChange={async (e) => {
                      const value = e.target.value;

                      setDemandaEdit((prev) =>
                        prev
                          ? {
                              ...prev,
                              motorista: prev.motorista
                                ? { ...prev.motorista, nome: value }
                                : ({ nome: value } as Motorista),
                            }
                          : prev
                      );

                      setQueryMotorista(value);

                      if (value.length >= 2) {
                        setLoadingMotorista(true);
                        try {
                          const res = await fetch(
                            `/api/motorista?search=${value}`
                          );
                          const data = await res.json();

                          setResultadosMotorista(data.motoristas || []);
                        } catch (err) {
                          console.error("Erro ao buscar motorista:", err);
                        } finally {
                          setLoadingMotorista(false);
                        }
                      } else {
                        setResultadosMotorista([]);
                      }
                    }}
                    placeholder="Nome do Motorista"
                    className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                  />

                  {loadingMotorista && (
                    <div className="absolute bg-white border w-full px-4 py-2 text-sm text-gray-400">
                      Buscando...
                    </div>
                  )}

                  {resultadosMotorista.length > 0 && (
                    <ul className="absolute bg-white border w-full rounded shadow mt-1 max-h-48 overflow-auto z-50">
                      {resultadosMotorista.map((item) => (
                        <li
                          key={item.id}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            setMotoristaEdit(item);
                            setDemandaEdit((prev) =>
                              prev
                                ? {
                                    ...prev,
                                    motorista: item,
                                  }
                                : prev
                            );
                            setQueryMotorista(item.nome);
                            setResultadosMotorista([]);
                          }}
                        >
                          {item.nome}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </p>
              <p>
                <span>Placa: </span>
                <div className="relative">
                  <Input
                    type="text"
                    value={demandaEdit?.veiculo?.placaVeiculo || ""}
                    onChange={async (e) => {
                      const value = e.target.value;

                      setDemandaEdit((prev) =>
                        prev
                          ? {
                              ...prev,
                              veiculo: prev.veiculo
                                ? { ...prev.veiculo, placaVeiculo: value }
                                : ({ placaVeiculo: value } as Veiculo),
                            }
                          : prev
                      );

                      setQueryPlaca(value);

                      if (value.length >= 2) {
                        setLoadingPlaca(true);
                        try {
                          const res = await fetch(
                            `/api/veiculo?search=${value}`
                          );
                          const data = await res.json();
                          setResultadosVeiculo(data.veiculos || []);
                        } catch (err) {
                          console.error("Erro ao buscar veículos:", err);
                        } finally {
                          setLoadingPlaca(false);
                        }
                      } else {
                        setResultadosVeiculo([]);
                      }
                    }}
                    placeholder="Placa do veículo"
                    className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                  />

                  {loadingPlaca && (
                    <div className="absolute bg-white border w-full px-4 py-2 text-sm text-gray-400">
                      Buscando...
                    </div>
                  )}

                  {resultadosVeiculo.length > 0 && (
                    <ul className="absolute bg-white border w-full rounded shadow max-h-48 overflow-auto z-50">
                      {resultadosVeiculo.map((item) => (
                        <li
                          key={item.id}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            setVeiculoEdit(item);
                            setDemandaEdit((prev) =>
                              prev
                                ? {
                                    ...prev,
                                    veiculo: item,
                                  }
                                : prev
                            );
                            setQueryPlaca(item.placaVeiculo);
                            setResultadosVeiculo([]);
                          }}
                        >
                          {item.placaVeiculo}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </p>

              <p>
                <span>Status: </span>
                <DropMenu
                  statusDemanda={demandaEdit?.statusDemanda ?? ""}
                  setStatusDemanda={(value) =>
                    setDemandaEdit((prev) =>
                      prev ? { ...prev, statusDemanda: value } : prev
                    )
                  }
                />
              </p>
            </div>

            <div className="flex flex-col gap-2 w-1/3 justify-items-start">
              <p>
                <span>Destino: </span>
                <Input
                  type="text"
                  value={demandaEdit?.destino}
                  onChange={(e) =>
                    setDemandaEdit((prev) =>
                      prev ? { ...prev, destino: e.target.value } : prev
                    )
                  }
                  placeholder="Destino"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p>
                <span>Local de Saída: </span>
                <input
                  type="text"
                  value={demandaEdit?.origem}
                  onChange={(e) =>
                    setDemandaEdit((prev) =>
                      prev ? { ...prev, origem: e.target.value } : prev
                    )
                  }
                  placeholder="Local de Saída"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p>
                <span>Horário da Saída: </span>
                <Input
                  type="datetime-local"
                  value={demandaEdit?.dataHoraIda ?? ""}
                  onChange={(e) =>
                    setDemandaEdit((prev) =>
                      prev ? { ...prev, dataHoraIda: e.target.value } : prev
                    )
                  }
                  placeholder="Horário da Saída"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
              <p>
                <span>Horário da Volta: </span>
                <Input
                  type="datetime-local"
                  value={demandaEdit?.dataHoraVolta ?? ""}
                  onChange={(e) =>
                    setDemandaEdit((prev) =>
                      prev ? { ...prev, dataHoraVolta: e.target.value } : prev
                    )
                  }
                  placeholder="Horario da Volta"
                  className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-w-2xl min-w-2xl mt-2">
            <p>
              <span>Detalhe: </span>
              {demandaEdit?.demandaDetalhe}
            </p>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => closeModalEditDemanda()}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (demandaEdit) {
                  saveEditDemanda(demandaEdit);
                  setShowModalEditDemanda(false);
                  setDemandaEdit(null);
                }
              }}
            >
              Salvar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={showModalDetalhesDemanda}
        onOpenChange={setShowModalDetalhesDemanda}
      >
        <AlertDialogContent className="w-full">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex w-full">
              <div className="w-1/2">Informações sobre a demanda</div>
              <div className="flex justify-end w-1/2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => {
                        const texto = `*DEMANDA DE TRANSPORTE* 
                        *Solicitante:* ${demandaEdit?.pessoaSolicitante || "N/A"} 
                        *Secretaria:* ${demandaEdit?.secretariaSolicitante || "N/A"}
                        *E-mail:* ${demandaEdit?.emailSolicitante || "N/A"}
                        *Contato:* ${demandaEdit?.contato || "N/A"}
                        *Destino:* ${demandaEdit?.destino || "N/A"}
                        *Local de Saída:* ${demandaEdit?.origem || "N/A"}
                        *Horário da Saída:* ${demandaEdit?.dataHoraIda || "N/A"}
                        *Horário da Volta:* ${demandaEdit?.dataHoraVolta || "N/A"}
                        *Detalhe:* ${demandaEdit?.demandaDetalhe || "N/A"}
                        *Status:* ${demandaEdit?.statusDemanda || "N/A"}`;
                        const textoFormatado = texto
                          .replace(/^\s+/gm, "")
                          .trim();

                        navigator.clipboard
                          .writeText(textoFormatado)
                          .then(() => {
                            toast.success(
                              "Detalhes da demanda copiados para a área de transferência!"
                            );
                          })
                          .catch((err) => {
                            console.error(
                              "Erro ao copiar para a área de transferência: ",
                              err
                            );
                          });
                      }}
                      className="px-1 py-1 rounded hover:bg-gray-300 transition-colors"
                    >
                      <FileText />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copiar</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => {
                        const texto = `*DEMANDA DE TRANSPORTE* 
                            *Solicitante:* ${demandaEdit?.pessoaSolicitante || "N/A"} 
                            *Secretaria:* ${demandaEdit?.secretariaSolicitante || "N/A"}
                            *E-mail:* ${demandaEdit?.emailSolicitante || "N/A"}
                            *Contato:* ${demandaEdit?.contato || "N/A"}
                            *Destino:* ${demandaEdit?.destino || "N/A"}
                            *Local de Saída:* ${demandaEdit?.origem || "N/A"}
                            *Horário da Saída:* ${demandaEdit?.dataHoraIda || "N/A"}
                            *Horário da Volta:* ${demandaEdit?.dataHoraVolta || "N/A"}
                            *Detalhe:* ${demandaEdit?.demandaDetalhe || "N/A"}
                            *Status:* ${demandaEdit?.statusDemanda || "N/A"}`;
                        const textoFormatado = texto
                          .replace(/^\s+/gm, "")
                          .trim();
                        const WhatsAppURL = `https://wa.me/?text=${encodeURIComponent(
                          textoFormatado
                        )}`;
                        window.open(WhatsAppURL, "_blank");
                      }}
                      className="px-1 py-1 rounded hover:bg-gray-300 transition-colors"
                    >
                      <Send />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enviar via WhatsApp</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className="bg-white p-6 rounded shadow-lg">
            <div className="flex sgrid-cols-2 gap-4">
              <div className="flex flex-col gap-2 w-1/3 justify-items-start">
                <p>
                  <span>Solicitante: </span>
                  {demandaEdit?.pessoaSolicitante}
                </p>
                <p>
                  <span>Secretaria: </span>
                  {demandaEdit?.secretariaSolicitante}
                </p>
                <p>
                  <span>E-mail: </span>
                  {demandaEdit?.emailSolicitante}
                </p>
                <p>
                  <span>Contato: </span>
                  {demandaEdit?.contato}
                </p>
              </div>
              <div className="flex flex-col gap-2 w-1/3 justify-items-start">
                <p>
                  <span>Motorista: </span>
                  {demandaEdit?.motorista?.nome}
                </p>
                <p>
                  <span>Placa: </span>
                  {demandaEdit?.veiculo?.placaVeiculo}
                </p>
              </div>

              <div className="flex flex-col gap-2 w-1/3 justify-items-start">
                <p>
                  <span>Destino: </span>
                  {demandaEdit?.destino}
                </p>
                <p>
                  <span>Local de Saída: </span> {demandaEdit?.origem}
                </p>
                <p>
                  <span>Horário da Saída: </span> {demandaEdit?.dataHoraIda}
                </p>
                <p>
                  <span>Horário da Volta: </span>
                  {demandaEdit?.dataHoraVolta}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 max-w-2xl min-w-2xl mt-2">
              <p className="font-medium">
                <span>Detalhe: </span>
                {demandaEdit?.demandaDetalhe}
              </p>
              <p className="font-medium">
                <span>Status: </span>
                {demandaEdit?.statusDemanda}
              </p>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => openModalEditDemanda(demanda)}>
              Editar
            </AlertDialogAction>
            <AlertDialogCancel>Fechar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={showModalDeleteDemanda}
        onOpenChange={setShowModalDeleteDemanda}
      >
        <AlertDialogContent className="w-full">
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja apagar a demanda?</AlertDialogTitle>
            <AlertDialogDescription>
              A demanda será apagada do sistema e não poderá ser recuperada.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (demandaDelete?.id) {
                  deletDemanda(demandaDelete.id);
                } else {
                  console.error("ID da demanda não está definido");
                }
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={showModalFinalizarDemanda}
        onOpenChange={setShowModalFinalizarDemanda}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja finalizar a demanda?</AlertDialogTitle>
            <AlertDialogDescription>
              Ao finalizar, a demanda terá seu status alterado para Finalizado.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                saveDemandaFinalizada(demandaFinalizada as DemandaType);
              }}
            >
              Finalizar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

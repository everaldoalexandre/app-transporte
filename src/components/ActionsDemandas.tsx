import { use, useEffect, useState } from "react";
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
  Copy,
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
import { DropMenuStatusDemanda } from "./DropMenuStatusDemanda";
import { Demanda, Veiculo, Motorista, User } from "@/generated/prisma";
import { DemandaType } from "./Types";
import { TooltipContent, Tooltip, TooltipTrigger } from "./ui/tooltip";
import { DropMenuRecursoDemanda } from "./DropMenuRecursoDemanda";
import { DropMenuCategoriaDemanda } from "./DropMenuCategoriaDemanda";
import { Textarea } from "./ui/textarea";
import {
  formatDateTimeBR,
  fromDatetimeLocal,
  toDatetimeLocal,
} from "@/lib/date";

export function ActionsDemandas({
  demanda,
  onRefresh,
  user,
  userAccessLevel,
}: {
  demanda: DemandaType;
  onRefresh: () => void;
  user: User | null;
  userAccessLevel: string | null;
}) {
  const [demandas, setDemandas] = useState<Demanda[]>([]);
  const [demandaEdit, setDemandaEdit] = useState<DemandaType | null>(null);
  const [veiculoEdit, setVeiculoEdit] = useState<Veiculo | null>(null);
  const [motoristaEdit, setMotoristaEdit] = useState<Motorista | null>(null);

  const [showModalDetalhesDemanda, setShowModalDetalhesDemanda] =
    useState(false);
  const [showModalEditDemanda, setShowModalEditDemanda] = useState(false);
  const [showModalDeleteDemanda, setShowModalDeleteDemanda] = useState(false);
  const [showMotoristaMenu, setShowMotoristaMenu] = useState(false);
  const [showPlacaMenu, setShowPlacaMenu] = useState(false);
  const [showDuplicarDemanda, setShowDuplicarDemanda] = useState(false);
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

  const isAdmin = (userAccessLevel: string | null) =>
    ["administrador"].includes(userAccessLevel ?? "");
  const isEditor = (userAccessLevel: string | null) =>
    ["administrador", "editor"].includes(userAccessLevel ?? "");

  function openModalDeleteDemanda(demanda: DemandaType) {
    setDemandaDelete(demanda);
    setShowModalDeleteDemanda(true);
  }

  function openModalDuplicarDemanda(demanda: DemandaType) {
    setShowDuplicarDemanda(true);
  }

  function openModalDetalhesDemanda(demanda: DemandaType) {
    setDemandaEdit({
      ...demanda,
      dataHoraIda: toDatetimeLocal(demanda.dataHoraIda),
      dataHoraVolta: toDatetimeLocal(demanda.dataHoraVolta),
    });
    setShowModalDetalhesDemanda(true);
  }

  function openModalEditDemanda(demanda: DemandaType) {
    setDemandaEdit({
      ...demanda,
      dataHoraIda: toDatetimeLocal(demanda.dataHoraIda),
      dataHoraVolta: toDatetimeLocal(demanda.dataHoraVolta),
    });
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

  function mensagemWhatsApp(demanda: DemandaType) {
    const base = {
      solicitante: demanda?.pessoaSolicitante || "N/A",
      secretaria: demanda?.secretariaSolicitante || "N/A",
      email: demanda?.emailSolicitante || "N/A",
      contato: demanda?.contato || "N/A",
      destino: demanda?.destino || "N/A",
      origem: demanda?.origem || "N/A",
      ida: demanda?.dataHoraIda
        ? formatDateTimeBR(demanda?.dataHoraIda)
        : "N/A",
      volta: demanda?.dataHoraVolta
        ? formatDateTimeBR(demanda?.dataHoraVolta)
        : "N/A",
      detalhe: demanda?.demandaDetalhe || "N/A",
      status: demanda?.statusDemanda || "N/A",
      veiculo: demanda?.veiculo?.placaVeiculo || "N/A",
    };

    switch (demanda?.categoria) {
      case "InternoSeduc":
        return `
  *🚗 DEMANDA INTERNA - SEDUC *
  *Solicitante:* ${base.solicitante}
  *Secretaria:* ${base.secretaria}
        `;

      case "InternoEscolar":
        return `
  *🚗 DEMANDA INTERNA - ESCOLAR *
  *Veículo:* ${base.veiculo}
  *Solicitante:* ${base.solicitante}
  *Detalhe:* ${base.detalhe}
  *Status:* ${base.status}
        `;

      case "Externo":
        return `
  *🚗 DEMANDA EXTERNA *
  *Solicitante:* ${base.solicitante}
  *Destino:* ${base.destino}
  *Detalhe:* ${base.detalhe}
        `;

      default:
        return `
  *📄 DEMANDA DE TRANSPORTE*
  *Solicitante:* ${base.solicitante}
  *Secretaria:* ${base.secretaria}
  *Destino:* ${base.destino}
  *Origem:* ${base.origem}
  *Ida:* ${base.ida}
  *Volta:* ${base.volta}
  *Detalhe:* ${base.detalhe}
  *Status:* ${base.status}
        `;
    }
  }

  async function buscarPlacas(texto: string) {
    try {
      setLoadingPlaca(true);
      const res = await fetch(`/api/veiculo?search=${texto}`);
      const data = await res.json();

      const veiculosArray = data.veiculos || [];

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

      const motoristasArray = data.motoristas || [];

      setResultadosMotorista(motoristasArray);
    } finally {
      setLoadingMotorista(false);
    }
  }

  async function duplicarDemanda(demanda: DemandaType) {
    try {
      const novaDemanda = {
        emailSolicitante: demanda.emailSolicitante,
        demandaDetalhe: demanda.demandaDetalhe,
        pessoaSolicitante: demanda.pessoaSolicitante,
        secretariaSolicitante: demanda.secretariaSolicitante,
        secretariaId: demanda.secretariaId,
        destino: demanda.destino,
        origem: demanda.origem,
        contato: demanda.contato,
        lotacao: demanda.lotacao,
        recurso: demanda.recurso,
        categoria: demanda.categoria,
        dataHoraIda: fromDatetimeLocal(demanda.dataHoraIda),
        dataHoraVolta: fromDatetimeLocal(demanda.dataHoraVolta),
        statusDemanda: "Aguardando",
        motoristaId: null,
        veiculoId: null,
        kmRodado: 0,
        origemDemanda: "INTERNA",
      };

      const response = await fetch("/api/demanda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ novaDemanda }),
      });

      if (!response.ok) {
        throw new Error("Erro ao duplicar demanda");
      }

      toast.success("Demanda duplicada com sucesso!");
      onRefresh();
    } catch (error) {
      console.error("Erro ao duplicar demanda:", error);
      toast.error("Erro ao duplicar demanda.");
    }
  }

  async function saveEditDemanda(demandaEdit: DemandaType) {
    if (!demandaEdit) {
      console.error("DemandaEdit não está definido");
      return;
    }

    if (!demandaEdit.dataHoraIda || !demandaEdit.dataHoraVolta) {
      toast.error("Data/Hora de Ida e Volta são obrigatórias.");
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
            dataHoraIda: fromDatetimeLocal(demandaEdit.dataHoraIda),
            dataHoraVolta: fromDatetimeLocal(demandaEdit.dataHoraVolta),
            origem: demandaEdit.origem,
            contato: demandaEdit.contato,
            lotacao: demandaEdit.lotacao,
            recurso: demandaEdit.recurso,
            statusDemanda: demandaEdit.statusDemanda,
            categoria: demandaEdit.categoria,
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
            <span className="sr-only">Abrir menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => openModalDetalhesDemanda(demanda)}>
            <FileText />
            Detalhes
          </DropdownMenuItem>
          {isEditor(userAccessLevel) && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => openModalEditDemanda(demanda)}>
                <ClipboardPen /> Editar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => openModalFinalizarDemanda(demanda)}
              >
                <Check />
                Finalizar
              </DropdownMenuItem>
            </>
          )}
          {isAdmin(userAccessLevel) && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => openModalDeleteDemanda(demanda)}>
                <X />
                Deletar
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={() => openModalDuplicarDemanda(demanda)}
              >
                <Copy />
                Duplicar
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog
        open={showModalEditDemanda}
        onOpenChange={setShowModalEditDemanda}
      >
        <AlertDialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-hidden">
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja editar a demanda?</AlertDialogTitle>
            <AlertDialogDescription>
              Edite os campos abaixo e clique em salvar.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[65vh] pr-2">
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Solicitante: </span>
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
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Secretaria: </span>
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
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">E-mail: </span>
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
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Contato: </span>
                  <Input
                    type="tel"
                    value={demandaEdit?.contato}
                    onChange={(e) =>
                      setDemandaEdit((prev) =>
                        prev
                          ? {
                              ...prev,
                              contato: e.target.value.replace(/\D/g, ""),
                            }
                          : prev
                      )
                    }
                    maxLength={11}
                    placeholder="Contato"
                    className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                  />
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span>Recurso: </span>
                  <DropMenuRecursoDemanda
                    recurso={demandaEdit?.recurso ?? ""}
                    setRecurso={(value) =>
                      setDemandaEdit((prev) =>
                        prev ? { ...prev, recurso: value } : prev
                      )
                    }
                  />
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-items-start">
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Motorista: </span>
                  <div className="relative">
                    <Input
                      type="text"
                      value={demandaEdit?.motorista?.nome || ""}
                      onFocus={() => setShowMotoristaMenu(true)}
                      onBlur={() => {
                        setTimeout(() => setShowMotoristaMenu(false), 300);
                      }}
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
                          setShowMotoristaMenu(true);
                        } else {
                          setResultadosMotorista([]);
                          setShowMotoristaMenu(false);
                        }
                      }}
                      placeholder="Nome do Motorista"
                      className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                    />

                    {showMotoristaMenu && loadingMotorista && (
                      <div className="absolute bg-white border w-full px-4 py-2 text-sm text-gray-400">
                        Buscando...
                      </div>
                    )}

                    {showMotoristaMenu && resultadosMotorista.length > 0 && (
                      <ul className="absolute bg-white border w-full rounded shadow mt-1 max-h-48 overflow-auto z-50">
                        {resultadosMotorista.map((item) => (
                          <li
                            key={item.id}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onMouseDown={() => {
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
                              setShowMotoristaMenu(false);
                            }}
                          >
                            {item.nome}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Placa: </span>
                  <div className="relative">
                    <Input
                      type="text"
                      value={demandaEdit?.veiculo?.placaVeiculo || ""}
                      onFocus={() => setShowPlacaMenu(true)}
                      onBlur={() => {
                        setTimeout(() => setShowPlacaMenu(false), 300);
                      }}
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
                          setShowPlacaMenu(true);
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
                          setShowPlacaMenu(false);
                        }
                      }}
                      placeholder="Placa do veículo"
                      className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                    />

                    {showPlacaMenu && loadingPlaca && (
                      <div className="absolute bg-white border w-full px-4 py-2 text-sm text-gray-400">
                        Buscando...
                      </div>
                    )}

                    {showPlacaMenu && resultadosVeiculo.length > 0 && (
                      <ul className="absolute bg-white border w-full rounded shadow max-h-48 overflow-auto z-50">
                        {resultadosVeiculo.map((item) => (
                          <li
                            key={item.id}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onMouseDown={() => {
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
                              setShowPlacaMenu(false);
                            }}
                          >
                            {item.placaVeiculo}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Lotação: </span>
                  <Input
                    type="number"
                    value={demandaEdit?.lotacao ?? ""}
                    onChange={(e) =>
                      setDemandaEdit((prev) =>
                        prev
                          ? { ...prev, lotacao: Number(e.target.value) }
                          : prev
                      )
                    }
                    placeholder="Lotação"
                    className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                  />
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">KM Rodado: </span>
                  <Input
                    type="text"
                    value={demandaEdit?.kmRodado ?? ""}
                    onChange={(e) =>
                      setDemandaEdit((prev) =>
                        prev
                          ? { ...prev, kmRodado: Number(e.target.value) }
                          : prev
                      )
                    }
                    placeholder="KM Rodado"
                    className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                  />
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Status: </span>
                  <DropMenuStatusDemanda
                    statusDemanda={demandaEdit?.statusDemanda ?? ""}
                    setStatusDemanda={(value) =>
                      setDemandaEdit((prev) =>
                        prev ? { ...prev, statusDemanda: value } : prev
                      )
                    }
                  />
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-items-start">
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Destino: </span>
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
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Local de Saída: </span>
                  <Input
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
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Horário da Saída: </span>
                  <Input
                    type="datetime-local"
                    value={demandaEdit?.dataHoraIda ?? ""}
                    onChange={(e) =>
                      setDemandaEdit((prev) =>
                        prev ? { ...prev, dataHoraIda: e.target.value } : prev
                      )
                    }
                    className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                  />
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Horário da Volta: </span>
                  <Input
                    type="datetime-local"
                    value={demandaEdit?.dataHoraVolta ?? ""}
                    onChange={(e) =>
                      setDemandaEdit((prev) =>
                        prev ? { ...prev, dataHoraVolta: e.target.value } : prev
                      )
                    }
                    className="w-full text-gray-500 rounded mb-2 border border-gray-300"
                  />
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Categoria: </span>
                  <DropMenuCategoriaDemanda
                    categoria={demandaEdit?.categoria ?? ""}
                    setCategoria={(value) =>
                      setDemandaEdit((prev) =>
                        prev ? { ...prev, categoria: value } : prev
                      )
                    }
                  />
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Detalhe: </span>
                <Textarea
                  value={demandaEdit?.demandaDetalhe}
                  onChange={(e) =>
                    setDemandaEdit((prev) =>
                      prev ? { ...prev, demandaDetalhe: e.target.value } : prev
                    )
                  }
                  placeholder="Detalhe da demanda"
                  className="w-full
                  min-h-[100px] 
                  sm:min-h-[120px]
                  md:min-h-[150px]
                  lg:min-h-[180px]
                  resize-none"
                />
              </p>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => closeModalEditDemanda()}>
              Cancelar
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
        <AlertDialogContent className="w-[95vw] max-w-5xl max-h-[90vh] overflow-hidden">
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
                        *Data e Horário da Saída:* ${demandaEdit?.dataHoraIda ? formatDateTimeBR(demandaEdit?.dataHoraIda) : "N/A"}
                        *Data e Horário da Volta:* ${demandaEdit?.dataHoraVolta ? formatDateTimeBR(demandaEdit?.dataHoraVolta) : "N/A"}
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
                            *Data e Horário da Saída:* ${formatDateTimeBR(demandaEdit?.dataHoraIda) || "N/A"}
                            *Data e Horário da Volta:* ${formatDateTimeBR(demandaEdit?.dataHoraVolta) || "N/A"}
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
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[65vh] pr-2">
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-3">
                  <p className="break-words whitespace-pre-wrap">
                    <span className="font-medium">Solicitante: </span>
                    {demandaEdit?.pessoaSolicitante}
                  </p>
                  <p>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => {
                            const texto = `*DEMANDA DE TRANSPORTE* 
                            *Olá,* ${demandaEdit?.pessoaSolicitante || "N/A"} 
                            Sua demanda foi agendada com sucesso, seguem as informações:
                            *Placa do Veículo:* ${demandaEdit?.veiculo?.placaVeiculo || "N/A"}
                            *Motorista:* ${demandaEdit?.motorista?.nome || "N/A"}
                            *Contato do Motorista:* ${demandaEdit?.motorista?.contato || "N/A"}
                            *Destino:* ${demandaEdit?.destino || "N/A"}
                            *Local de Saída:* ${demandaEdit?.origem || "N/A"}
                            *Data e Horário da Saída:* ${formatDateTimeBR(demandaEdit?.dataHoraIda) || "N/A"}
                            *Data e Horário da Volta:* ${formatDateTimeBR(demandaEdit?.dataHoraVolta) || "N/A"}
                            *Detalhe da demanda:* ${demandaEdit?.demandaDetalhe || "N/A"}`;
                            const textoFormatado = texto
                              .replace(/^\s+/gm, "")
                              .trim();
                            const WhatsAppURL = `https://wa.me/55${demandaEdit?.contato}?text=${encodeURIComponent(
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
                  </p>
                </div>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Secretaria: </span>
                  {demandaEdit?.secretariaSolicitante}
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">E-mail: </span>
                  {demandaEdit?.emailSolicitante}
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Contato: </span>
                  {demandaEdit?.contato}
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-items-start">
                <div className="flex gap-3">
                  <p className="break-words whitespace-pre-wrap">
                    <span className="font-medium">Motorista: </span>
                    {demandaEdit?.motorista?.nome}
                  </p>
                  <p>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => {
                            const texto = mensagemWhatsApp(demanda);
                            const textoFormatado = texto
                              .replace(/^\s+/gm, "")
                              .trim();
                            const WhatsAppURL = `https://wa.me/55${demandaEdit?.motorista?.contato}?text=${encodeURIComponent(
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
                        <p>Enviar para o Motorista</p>
                      </TooltipContent>
                    </Tooltip>
                  </p>
                </div>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Placa: </span>
                  {demandaEdit?.veiculo?.placaVeiculo}
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Lotação: </span>
                  {demandaEdit?.lotacao}
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Recurso: </span>
                  {demandaEdit?.recurso}
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Categoria: </span>
                  {demandaEdit?.categoria}
                </p>
              </div>

              <div className="flex flex-col gap-2 justify-items-start">
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Destino: </span>
                  {demandaEdit?.destino}
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Local de Saída: </span>{" "}
                  {demandaEdit?.origem}
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Horário da Saída: </span>{" "}
                  {demandaEdit?.dataHoraIda
                    ? formatDateTimeBR(demandaEdit?.dataHoraIda)
                    : "N/A"}
                </p>
                <p className="break-words whitespace-pre-wrap">
                  <span className="font-medium">Horário da Volta: </span>
                  {demandaEdit?.dataHoraIda
                    ? formatDateTimeBR(demandaEdit?.dataHoraVolta)
                    : "N/A"}{" "}
                </p>
                <p className="font-medium break-words whitespace-pre-wrap">
                  <span className="font-medium">Status: </span>
                  {demandaEdit?.statusDemanda}
                </p>
              </div>
            </div>
            <div
              className="flex flex-col gap-2 max-w-2xl w-full
                  min-h-[100px] 
                  sm:min-h-[120px]
                  md:min-h-[150px]
                  lg:min-h-[180px]
                  resize-none"
            >
              <p className="break-words whitespace-pre-wrap">
                <span className="font-medium">Detalhe: </span>
                {demandaEdit?.demandaDetalhe}
              </p>
            </div>
          </div>
          <AlertDialogFooter className="mt-2">
            {isEditor(userAccessLevel) && (
              <AlertDialogAction onClick={() => openModalEditDemanda(demanda)}>
                Editar
              </AlertDialogAction>
            )}
            <AlertDialogCancel>Fechar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={showModalDeleteDemanda}
        onOpenChange={setShowModalDeleteDemanda}
      >
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja apagar a demanda?</AlertDialogTitle>
            <AlertDialogDescription className="p-5">
              A demanda será apagada do sistema e não poderá ser recuperada.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
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
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja finalizar a demanda?</AlertDialogTitle>
            <AlertDialogDescription className="p-5">
              Ao finalizar, a demanda terá seu status alterado para Finalizado.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
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

      <AlertDialog
        open={showDuplicarDemanda}
        onOpenChange={setShowDuplicarDemanda}
      >
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja duplicar a demanda?</AlertDialogTitle>
          </AlertDialogHeader>

          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                duplicarDemanda(demanda);
              }}
            >
              Duplicar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

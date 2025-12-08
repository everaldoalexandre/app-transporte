import { Demanda, Motorista, Veiculo, VeiculoModelo } from "@/generated/prisma";

export type DemandaType = Demanda & { veiculo: Veiculo | null } & { motorista: Motorista | null};

export type VeiculoType = Veiculo & { modeloVeiculo: VeiculoModelo | null };

import { Demanda, Motorista, Veiculo } from "@/generated/prisma";

export type DemandaType = Demanda & { veiculo: Veiculo | null } & { motorista: Motorista | null};
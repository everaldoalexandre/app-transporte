import { Demanda, Motorista, Veiculo } from "@/generated/prisma";

export type DemandaType = Demanda & { veiculo: Veiculo | null } & { motorists: Motorista | null};
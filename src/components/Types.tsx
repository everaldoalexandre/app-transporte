import {
  Demanda,
  Motorista,
  Secretaria,
  Veiculo,
  VeiculoModelo,
} from "@/generated/prisma";

export type DemandaType = Demanda & { veiculo: Veiculo | null } & {
  motorista: Motorista | null;
};

export type VeiculoType = Veiculo & { modelo: VeiculoModelo | null };

export type MotoristaType = Motorista & { secretaria: Secretaria | null };

import {
  Demanda,
  Motorista,
  Secretaria,
  User,
  Veiculo,
  VeiculoModelo,
  UserSecretaria,
  Acesso,
} from "@/generated/prisma";

export type DemandaType = Demanda & { veiculo: Veiculo | null } & {
  motorista: Motorista | null;
};

export type VeiculoType = Veiculo & { modelo: VeiculoModelo | null };

export type MotoristaType = Motorista & { secretaria: Secretaria | null };

export type UsuarioType = User & {
  secretarias: (UserSecretaria & { secretaria: Secretaria })[] & {
    acesso: Acesso;
  };
};

export type SecretariaType = Secretaria & { motoristas: Motorista | null } & {
  usuarios: User | null;
} & { demandas: Demanda | null } & { veiculos: Veiculo | null };

export type AcessoType = Acesso & { user: User | null };

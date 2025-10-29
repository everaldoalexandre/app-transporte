-- AlterTable
ALTER TABLE "Demandas" ALTER COLUMN "statusDemanda" SET DEFAULT 'Aguardando';

-- CreateTable
CREATE TABLE "Veiculos" (
    "id" SERIAL NOT NULL,
    "placaVeiculo" TEXT,
    "chassiVeiculo" TEXT,
    "renvamVeiculo" TEXT,
    "proprietarioVeiculo" TEXT,
    "crlvVeiculo" TEXT,

    CONSTRAINT "Veiculos_pkey" PRIMARY KEY ("id")
);

/*
  Warnings:

  - You are about to drop the column `secretariasId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `Demandas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Secretarias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Veiculos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Demandas" DROP CONSTRAINT "Demandas_secretariasId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Demandas" DROP CONSTRAINT "Demandas_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Demandas" DROP CONSTRAINT "Demandas_veiculoId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Veiculos" DROP CONSTRAINT "Veiculos_secretariasId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Veiculos" DROP CONSTRAINT "Veiculos_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_secretariasId_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "secretariasId";

-- DropTable
DROP TABLE "public"."Demandas";

-- DropTable
DROP TABLE "public"."Secretarias";

-- DropTable
DROP TABLE "public"."Veiculos";

-- CreateTable
CREATE TABLE "Demanda" (
    "id" TEXT NOT NULL,
    "emailSolicitante" TEXT NOT NULL,
    "demandaDetalhe" TEXT,
    "pessoaSolicitante" TEXT NOT NULL,
    "secretariaSolicitante" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "dataHoraIda" TEXT,
    "dataHoraVolta" TEXT,
    "origem" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "statusDemanda" TEXT NOT NULL DEFAULT 'Aguardando',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "veiculoId" TEXT,
    "secretariaId" TEXT,

    CONSTRAINT "Demanda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Veiculo" (
    "id" TEXT NOT NULL,
    "placaVeiculo" TEXT NOT NULL,
    "chassiVeiculo" TEXT NOT NULL,
    "renavamVeiculo" TEXT NOT NULL,
    "proprietarioVeiculo" TEXT NOT NULL,
    "crlvVeiculo" TEXT NOT NULL,
    "secretariaId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Veiculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Secretaria" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Secretaria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_on_secretaria" (
    "userId" TEXT NOT NULL,
    "secretariaId" TEXT NOT NULL,

    CONSTRAINT "user_on_secretaria_pkey" PRIMARY KEY ("userId","secretariaId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Veiculo_placaVeiculo_key" ON "Veiculo"("placaVeiculo");

-- CreateIndex
CREATE UNIQUE INDEX "Secretaria_nome_key" ON "Secretaria"("nome");

-- AddForeignKey
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "Veiculo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_secretariaId_fkey" FOREIGN KEY ("secretariaId") REFERENCES "Secretaria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Veiculo" ADD CONSTRAINT "Veiculo_secretariaId_fkey" FOREIGN KEY ("secretariaId") REFERENCES "Secretaria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Veiculo" ADD CONSTRAINT "Veiculo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_on_secretaria" ADD CONSTRAINT "user_on_secretaria_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_on_secretaria" ADD CONSTRAINT "user_on_secretaria_secretariaId_fkey" FOREIGN KEY ("secretariaId") REFERENCES "Secretaria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `userId` on the `Secretarias` table. All the data in the column will be lost.
  - You are about to drop the column `veiculoId` on the `Secretarias` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nome]` on the table `Secretarias` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."Secretarias" DROP CONSTRAINT "Secretarias_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Secretarias" DROP CONSTRAINT "Secretarias_veiculoId_fkey";

-- AlterTable
ALTER TABLE "Demandas" ADD COLUMN     "secretariasId" TEXT;

-- AlterTable
ALTER TABLE "Secretarias" DROP COLUMN "userId",
DROP COLUMN "veiculoId";

-- AlterTable
ALTER TABLE "Veiculos" ADD COLUMN     "secretariasId" TEXT;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "secretariasId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Secretarias_nome_key" ON "Secretarias"("nome");

-- AddForeignKey
ALTER TABLE "Demandas" ADD CONSTRAINT "Demandas_secretariasId_fkey" FOREIGN KEY ("secretariasId") REFERENCES "Secretarias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Veiculos" ADD CONSTRAINT "Veiculos_secretariasId_fkey" FOREIGN KEY ("secretariasId") REFERENCES "Secretarias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_secretariasId_fkey" FOREIGN KEY ("secretariasId") REFERENCES "Secretarias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `userId` on the `Veiculo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[modelo]` on the table `VeiculoModelo` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."Veiculo" DROP CONSTRAINT "Veiculo_userId_fkey";

-- AlterTable
ALTER TABLE "Veiculo" DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "VeiculoModelo_modelo_key" ON "VeiculoModelo"("modelo");

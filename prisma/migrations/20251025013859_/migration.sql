/*
  Warnings:

  - You are about to drop the column `renvamVeiculo` on the `Veiculos` table. All the data in the column will be lost.
  - Added the required column `renavamVeiculo` to the `Veiculos` table without a default value. This is not possible if the table is not empty.
  - Made the column `placaVeiculo` on table `Veiculos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `chassiVeiculo` on table `Veiculos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `proprietarioVeiculo` on table `Veiculos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `crlvVeiculo` on table `Veiculos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Veiculos" DROP COLUMN "renvamVeiculo",
ADD COLUMN     "renavamVeiculo" TEXT NOT NULL,
ALTER COLUMN "placaVeiculo" SET NOT NULL,
ALTER COLUMN "chassiVeiculo" SET NOT NULL,
ALTER COLUMN "proprietarioVeiculo" SET NOT NULL,
ALTER COLUMN "crlvVeiculo" SET NOT NULL;

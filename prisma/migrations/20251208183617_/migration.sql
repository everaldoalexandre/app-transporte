/*
  Warnings:

  - You are about to drop the column `userId` on the `Demanda` table. All the data in the column will be lost.
  - The `lotacao` column on the `Demanda` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `demandaDetalhe` on table `Demanda` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dataHoraIda` on table `Demanda` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dataHoraVolta` on table `Demanda` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Demanda" DROP CONSTRAINT "Demanda_userId_fkey";

-- AlterTable
ALTER TABLE "Demanda" DROP COLUMN "userId",
ADD COLUMN     "kmRodado" INTEGER,
ALTER COLUMN "demandaDetalhe" SET NOT NULL,
ALTER COLUMN "dataHoraIda" SET NOT NULL,
ALTER COLUMN "dataHoraVolta" SET NOT NULL,
DROP COLUMN "lotacao",
ADD COLUMN     "lotacao" INTEGER;

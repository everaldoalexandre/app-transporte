/*
  Warnings:

  - You are about to drop the column `userId` on the `Motorista` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Motorista" DROP CONSTRAINT "Motorista_userId_fkey";

-- AlterTable
ALTER TABLE "Demanda" ADD COLUMN     "motoristaId" TEXT;

-- AlterTable
ALTER TABLE "Motorista" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "Motorista"("id") ON DELETE SET NULL ON UPDATE CASCADE;

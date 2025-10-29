/*
  Warnings:

  - Added the required column `userId` to the `Demandas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Veiculos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Demandas" ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "veiculoId" TEXT;

-- AlterTable
ALTER TABLE "Veiculos" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Demandas" ADD CONSTRAINT "Demandas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demandas" ADD CONSTRAINT "Demandas_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "Veiculos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Veiculos" ADD CONSTRAINT "Veiculos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

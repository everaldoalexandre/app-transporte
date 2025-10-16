/*
  Warnings:

  - You are about to drop the column `dataIda` on the `Demandas` table. All the data in the column will be lost.
  - You are about to drop the column `dataVolta` on the `Demandas` table. All the data in the column will be lost.
  - You are about to drop the column `horaIda` on the `Demandas` table. All the data in the column will be lost.
  - You are about to drop the column `horaVolta` on the `Demandas` table. All the data in the column will be lost.
  - Added the required column `contato` to the `Demandas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Demandas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Demandas" DROP COLUMN "dataIda",
DROP COLUMN "dataVolta",
DROP COLUMN "horaIda",
DROP COLUMN "horaVolta",
ADD COLUMN     "contato" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dataHoraIda" TEXT,
ADD COLUMN     "dataHoraVolta" TEXT,
ADD COLUMN     "statusDemanda" TEXT NOT NULL DEFAULT 'aguardando',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

/*
  Warnings:

  - Added the required column `lotacao` to the `Demanda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Demanda" ADD COLUMN     "lotacao" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Motorista" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "secretariaId" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Motorista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acesso" (
    "id" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Acesso_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Motorista" ADD CONSTRAINT "Motorista_secretariaId_fkey" FOREIGN KEY ("secretariaId") REFERENCES "Secretaria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Motorista" ADD CONSTRAINT "Motorista_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acesso" ADD CONSTRAINT "Acesso_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "Veiculo" ADD COLUMN     "modeloId" TEXT;

-- CreateTable
CREATE TABLE "VeiculoModelo" (
    "id" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,

    CONSTRAINT "VeiculoModelo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Veiculo" ADD CONSTRAINT "Veiculo_modeloId_fkey" FOREIGN KEY ("modeloId") REFERENCES "VeiculoModelo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

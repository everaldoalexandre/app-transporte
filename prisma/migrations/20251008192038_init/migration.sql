-- CreateTable
CREATE TABLE "Demandas" (
    "id" SERIAL NOT NULL,
    "emailSolicitante" TEXT NOT NULL,
    "demandaDetalhe" TEXT,
    "pessoaSolicitante" TEXT NOT NULL,
    "secretariaSolicitante" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "dataIda" TEXT NOT NULL,
    "horaIda" TEXT NOT NULL,
    "dataVolta" TEXT NOT NULL,
    "horaVolta" TEXT NOT NULL,
    "origem" TEXT NOT NULL,

    CONSTRAINT "Demandas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Demandas_emailSolicitante_key" ON "Demandas"("emailSolicitante");

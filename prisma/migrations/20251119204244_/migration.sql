-- CreateTable
CREATE TABLE "Secretarias" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "veiculoId" TEXT,

    CONSTRAINT "Secretarias_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Secretarias" ADD CONSTRAINT "Secretarias_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Secretarias" ADD CONSTRAINT "Secretarias_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "Veiculos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

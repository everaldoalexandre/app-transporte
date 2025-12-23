-- CreateEnum
CREATE TYPE "OrigemDemanda" AS ENUM ('EXTERNA', 'INTERNA');

-- AlterTable
ALTER TABLE "Demanda" ADD COLUMN     "origemDemanda" "OrigemDemanda" NOT NULL DEFAULT 'EXTERNA';

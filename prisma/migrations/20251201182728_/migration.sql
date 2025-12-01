/*
  Warnings:

  - You are about to drop the column `userId` on the `Acesso` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Acesso" DROP CONSTRAINT "Acesso_userId_fkey";

-- AlterTable
ALTER TABLE "Acesso" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "acessoId" TEXT;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_acessoId_fkey" FOREIGN KEY ("acessoId") REFERENCES "Acesso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

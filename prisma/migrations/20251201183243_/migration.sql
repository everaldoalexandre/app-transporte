/*
  Warnings:

  - You are about to drop the column `acessoId` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_acessoId_fkey";

-- AlterTable
ALTER TABLE "Acesso" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "acessoId";

-- AddForeignKey
ALTER TABLE "Acesso" ADD CONSTRAINT "Acesso_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

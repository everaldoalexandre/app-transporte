/*
  Warnings:

  - You are about to drop the column `userId` on the `Acesso` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Acesso" DROP CONSTRAINT "Acesso_userId_fkey";

-- AlterTable
ALTER TABLE "Acesso" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "_AcessoToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AcessoToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_AcessoToUser_B_index" ON "_AcessoToUser"("B");

-- AddForeignKey
ALTER TABLE "_AcessoToUser" ADD CONSTRAINT "_AcessoToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Acesso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AcessoToUser" ADD CONSTRAINT "_AcessoToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

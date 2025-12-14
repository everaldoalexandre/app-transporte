/*
  Warnings:

  - You are about to drop the column `userId` on the `user_on_secretaria` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."user_on_secretaria" DROP CONSTRAINT "user_on_secretaria_userId_fkey";

-- AlterTable
ALTER TABLE "user_on_secretaria" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "_UserToUserSecretaria" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserToUserSecretaria_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserToUserSecretaria_B_index" ON "_UserToUserSecretaria"("B");

-- AddForeignKey
ALTER TABLE "_UserToUserSecretaria" ADD CONSTRAINT "_UserToUserSecretaria_A_fkey" FOREIGN KEY ("A") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToUserSecretaria" ADD CONSTRAINT "_UserToUserSecretaria_B_fkey" FOREIGN KEY ("B") REFERENCES "user_on_secretaria"("secretariaId") ON DELETE CASCADE ON UPDATE CASCADE;

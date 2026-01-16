/*
  Warnings:

  - You are about to drop the column `password` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "account" DROP COLUMN "password";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "password";

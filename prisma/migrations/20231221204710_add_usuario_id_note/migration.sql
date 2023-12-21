/*
  Warnings:

  - Added the required column `usuario_id` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "usuario_id" INTEGER NOT NULL;

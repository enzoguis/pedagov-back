/*
  Warnings:

  - You are about to drop the column `changed_fields` on the `occurrence_histories` table. All the data in the column will be lost.
  - Added the required column `changes` to the `occurrence_histories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "occurrence_histories" DROP COLUMN "changed_fields",
ADD COLUMN     "changes" JSONB NOT NULL;

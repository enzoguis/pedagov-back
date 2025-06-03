/*
  Warnings:

  - You are about to drop the column `role` on the `pedagogues` table. All the data in the column will be lost.
  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'COMMON');

-- AlterTable
ALTER TABLE "pedagogues" DROP COLUMN "role";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "UserRole" NOT NULL;

-- DropEnum
DROP TYPE "PedagogueRole";

/*
  Warnings:

  - You are about to drop the column `status` on the `teachers` table. All the data in the column will be lost.
  - Added the required column `status` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "status" "UserStatus" NOT NULL;

-- DropEnum
DROP TYPE "TeacherStatus";

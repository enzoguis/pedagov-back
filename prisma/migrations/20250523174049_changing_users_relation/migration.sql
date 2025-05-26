/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `students` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('TEACHER', 'STUDENT', 'PEDAGOGUE');

-- CreateIndex
CREATE UNIQUE INDEX "students_user_id_key" ON "students"("user_id");

/*
  Warnings:

  - The primary key for the `pedagogues` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `pedagogues` table. All the data in the column will be lost.
  - The primary key for the `students` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `students` table. All the data in the column will be lost.
  - The primary key for the `teachers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `teachers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OccurrenceStudents" DROP CONSTRAINT "OccurrenceStudents_student_id_fkey";

-- DropForeignKey
ALTER TABLE "groups" DROP CONSTRAINT "groups_teacher_id_fkey";

-- DropForeignKey
ALTER TABLE "occurrences" DROP CONSTRAINT "occurrences_author_id_fkey";

-- DropForeignKey
ALTER TABLE "occurrences" DROP CONSTRAINT "occurrences_teacher_id_fkey";

-- AlterTable
ALTER TABLE "pedagogues" DROP CONSTRAINT "pedagogues_pkey",
DROP COLUMN "id";

-- AlterTable
ALTER TABLE "students" DROP CONSTRAINT "students_pkey",
DROP COLUMN "id";

-- AlterTable
ALTER TABLE "teachers" DROP CONSTRAINT "teachers_pkey",
DROP COLUMN "id";

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occurrences" ADD CONSTRAINT "occurrences_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "pedagogues"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occurrences" ADD CONSTRAINT "occurrences_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OccurrenceStudents" ADD CONSTRAINT "OccurrenceStudents_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

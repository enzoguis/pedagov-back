/*
  Warnings:

  - You are about to drop the `_Occurrence_attendee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Occurrence_students` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Occurrence_attendee" DROP CONSTRAINT "_Occurrence_attendee_A_fkey";

-- DropForeignKey
ALTER TABLE "_Occurrence_attendee" DROP CONSTRAINT "_Occurrence_attendee_B_fkey";

-- DropForeignKey
ALTER TABLE "_Occurrence_students" DROP CONSTRAINT "_Occurrence_students_A_fkey";

-- DropForeignKey
ALTER TABLE "_Occurrence_students" DROP CONSTRAINT "_Occurrence_students_B_fkey";

-- DropTable
DROP TABLE "_Occurrence_attendee";

-- DropTable
DROP TABLE "_Occurrence_students";

-- CreateTable
CREATE TABLE "OccurrenceStudents" (
    "occurrence_id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,

    CONSTRAINT "OccurrenceStudents_pkey" PRIMARY KEY ("occurrence_id","student_id")
);

-- CreateTable
CREATE TABLE "OccurrenceAttendees" (
    "user_id" TEXT NOT NULL,
    "occurrence_id" TEXT NOT NULL,

    CONSTRAINT "OccurrenceAttendees_pkey" PRIMARY KEY ("occurrence_id","user_id")
);

-- AddForeignKey
ALTER TABLE "OccurrenceStudents" ADD CONSTRAINT "OccurrenceStudents_occurrence_id_fkey" FOREIGN KEY ("occurrence_id") REFERENCES "occurrences"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OccurrenceStudents" ADD CONSTRAINT "OccurrenceStudents_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OccurrenceAttendees" ADD CONSTRAINT "OccurrenceAttendees_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OccurrenceAttendees" ADD CONSTRAINT "OccurrenceAttendees_occurrence_id_fkey" FOREIGN KEY ("occurrence_id") REFERENCES "occurrences"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

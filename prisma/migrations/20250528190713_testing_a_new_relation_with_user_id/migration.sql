-- DropForeignKey
ALTER TABLE "occurrences" DROP CONSTRAINT "occurrences_author_id_fkey";

-- DropForeignKey
ALTER TABLE "occurrences" DROP CONSTRAINT "occurrences_teacher_id_fkey";

-- AddForeignKey
ALTER TABLE "occurrences" ADD CONSTRAINT "occurrences_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "pedagogues"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occurrences" ADD CONSTRAINT "occurrences_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

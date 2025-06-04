/*
  Warnings:

  - Added the required column `role` to the `pedagogues` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PedagogueRole" AS ENUM ('ADMIN', 'COMMON');

-- DropForeignKey
ALTER TABLE "attachments" DROP CONSTRAINT "attachments_Occurrence_id_fkey";

-- DropForeignKey
ALTER TABLE "occurrence_histories" DROP CONSTRAINT "occurrence_histories_Occurrence_id_fkey";

-- DropForeignKey
ALTER TABLE "pedagogues" DROP CONSTRAINT "pedagogues_user_id_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_user_id_fkey";

-- DropForeignKey
ALTER TABLE "teachers" DROP CONSTRAINT "teachers_user_id_fkey";

-- AlterTable
ALTER TABLE "pedagogues" ADD COLUMN     "role" "PedagogueRole" NOT NULL;

-- DropEnum
DROP TYPE "UserType";

-- AddForeignKey
ALTER TABLE "pedagogues" ADD CONSTRAINT "pedagogues_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occurrence_histories" ADD CONSTRAINT "occurrence_histories_Occurrence_id_fkey" FOREIGN KEY ("Occurrence_id") REFERENCES "occurrences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attachments" ADD CONSTRAINT "attachments_Occurrence_id_fkey" FOREIGN KEY ("Occurrence_id") REFERENCES "occurrences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

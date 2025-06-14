import { OccurrenceWithStudentName } from '@/domain/occurrences/enterprise/entities/value-objects/occurrence-with-student-name'

export class OccurrenceWithStudentNamePresenter {
  static toHTTP(occurrence: OccurrenceWithStudentName) {
    return {
      occurrenceId: occurrence.occurrenceId.toString(),
      studentId: occurrence.studentId.toString(),
      student: occurrence.student,
      createdAt: occurrence.createdAt.toISOString(),
      title: occurrence.title,
      type: occurrence.type,
    }
  }
}

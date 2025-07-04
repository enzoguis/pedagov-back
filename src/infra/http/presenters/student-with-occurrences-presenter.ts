import { StudentWithOccurrences } from '@/domain/occurrences/enterprise/entities/value-objects/student-with-occurrences'
import { OccurrencePresenter } from './occurrence-presenter'

export class StudentWithOccurrencePresenter {
  static toHTTP(student: StudentWithOccurrences) {
    return {
      studentId: student.studentId.value,
      student: student.student,
      groupId: student.groupId.value,
      group: student.group,
      cpf: student.cpf.value,
      responsibleEmail: student.responsibleEmail,
      responsiblePhone: student.responsiblePhone,
      status: student.status,
      occurrences: student.occurrences.map(OccurrencePresenter.toHTTP),
    }
  }
}

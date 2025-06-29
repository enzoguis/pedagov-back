import { StudentWithGroup } from '@/domain/occurrences/enterprise/entities/value-objects/student-with-group'

export class StudentWithGroupPresenter {
  static toHTTP(student: StudentWithGroup) {
    return {
      studentId: student.studentId.value,
      student: student.student,
      groupId: student.groupId.value,
      group: student.group,
      status: student.status,
      cpf: student.cpf.value,
    }
  }
}

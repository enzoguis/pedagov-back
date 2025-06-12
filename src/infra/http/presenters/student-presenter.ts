import { Student } from '@/domain/occurrences/enterprise/entities/student'

export class StudentPresenter {
  static toHTTP(student: Student) {
    return {
      id: student.id.value,
      name: student.name,
      cpf: student.cpf,
      groupId: student.groupId.value,
      responsibleEmail: student.responsibleEmail,
      responsiblePhone: student.responsiblePhone,
      status: student.status,
    }
  }
}

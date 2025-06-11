import { Teacher } from '@/domain/occurrences/enterprise/entities/teacher'

export class TeacherPresenter {
  static toHTTP(teacher: Teacher) {
    return {
      id: teacher.id.value,
      name: teacher.name,
      status: teacher.status,
    }
  }
}

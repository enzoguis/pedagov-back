import { Group } from '@/domain/occurrences/enterprise/entities/group'

export class GroupPresenter {
  static toHTTP(group: Group) {
    return {
      id: group.id.toString(),
      teacherId: group.teacherId.toString(),
      name: group.name,
      shift: group.shift,
      numberOfStudents: group.numberOfStudents,
    }
  }
}

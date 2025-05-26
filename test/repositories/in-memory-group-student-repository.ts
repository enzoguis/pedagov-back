import { GroupStudentRepository } from '@/domain/occurrences/application/repositories/group-student-repository'
import { GroupStudent } from '@/domain/occurrences/enterprise/entities/group-student'

export class InMemoryGroupStudentRepository implements GroupStudentRepository {
  public items: GroupStudent[] = []

  async createMany(students: GroupStudent[]): Promise<void> {
    this.items.push(...students)
  }

  async findManyByGroupId(groupId: string): Promise<GroupStudent[]> {
    const groupStudents = this.items.filter(
      (item) => item.groupId.toString() === groupId
    )

    return groupStudents
  }

  async deleteMany(students: GroupStudent[]): Promise<void> {
    const groupStudent = this.items.filter((item) => {
      return !students.some((student) => student.equals(item))
    })

    this.items = groupStudent
  }
}

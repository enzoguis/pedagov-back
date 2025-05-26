import { OccurrenceStudentsRepository } from '@/domain/occurrences/application/repositories/occurrence-student-repository'
import { OccurrenceStudent } from '@/domain/occurrences/enterprise/entities/occurrence-student'

export class InMemoryOccurrenceStudentsRepository
  implements OccurrenceStudentsRepository
{
  public items: OccurrenceStudent[] = []

  async createMany(students: OccurrenceStudent[]): Promise<void> {
    this.items.push(...students)
  }

  async findManyByOccurrenceId(
    occurrenceId: string
  ): Promise<OccurrenceStudent[]> {
    const groupStudents = this.items.filter(
      (item) => item.occurrenceId.toString() === occurrenceId
    )

    return groupStudents
  }

  async deleteMany(students: OccurrenceStudent[]): Promise<void> {
    const occurrenceStudents = this.items.filter((item) => {
      return !students.some((student) => student.equals(item))
    })

    this.items = occurrenceStudents
  }
}

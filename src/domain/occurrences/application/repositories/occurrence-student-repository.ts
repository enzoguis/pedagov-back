import { OccurrenceStudent } from '@/domain/occurrences/enterprise/entities/occurrence-student'

export abstract class OccurrenceStudentsRepository {
  abstract createMany(students: OccurrenceStudent[]): Promise<void>
  abstract deleteMany(students: OccurrenceStudent[]): Promise<void>
  abstract findManyByOccurrenceId(
    occurrenceId: string
  ): Promise<OccurrenceStudent[]>
}

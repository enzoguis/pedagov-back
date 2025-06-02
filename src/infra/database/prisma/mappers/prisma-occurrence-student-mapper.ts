import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OccurrenceStudent } from '@/domain/occurrences/enterprise/entities/occurrence-student'
import {
  Prisma,
  OccurrenceStudents as PrismaOccurrenceStudents,
} from '@prisma/client'

export class PrismaOccurrenceStudentsMapper {
  static toDomain(raw: PrismaOccurrenceStudents): OccurrenceStudent {
    return OccurrenceStudent.create({
      occurrenceId: new UniqueEntityID(raw.occurrenceId),
      studentId: new UniqueEntityID(raw.studentId),
    })
  }

  static toPrisma(
    occurrenceStudents: OccurrenceStudent[]
  ): Prisma.OccurrenceStudentsCreateManyInput[] {
    return occurrenceStudents.map((student) => ({
      occurrenceId: student.occurrenceId.toString(),
      studentId: student.studentId.toString(),
    }))
  }
}

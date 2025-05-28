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
  ): Prisma.OccurrenceStudentsUpdateManyArgs {
    const studentIds = occurrenceStudents.map((student) =>
      student.studentId.toString()
    )
    return {
      where: {
        studentId: {
          in: studentIds,
        },
      },
      data: {
        occurrenceId: occurrenceStudents[0].occurrenceId.toString(),
      },
    }
  }
}

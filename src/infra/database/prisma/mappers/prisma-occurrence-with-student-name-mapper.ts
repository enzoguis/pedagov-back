import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OccurrenceType, Occurrence as PrismaOccurrence } from '@prisma/client'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'
import { OccurrenceWithStudentName } from '@/domain/occurrences/enterprise/entities/value-objects/occurrence-with-student-name'

type OccurrenceWithStudentNamePrismaRaw = {
  occurrence: {
    id: string
    title: string
    type: OccurrenceType
    createdAt: Date
  }
  student: {
    userId: string
    user: {
      name: string
    }
  }
}

export class PrismaOccurrenceWithStudentNameMapper {
  static toDomain(raw: OccurrenceWithStudentNamePrismaRaw) {
    return OccurrenceWithStudentName.create({
      occurrenceId: new UniqueEntityID(raw.occurrence.id),
      studentId: new UniqueEntityID(raw.student.userId),
      student: raw.student.user.name,
      createdAt: raw.occurrence.createdAt,
      title: raw.occurrence.title,
      type: OccurrenceTypeEnum[raw.occurrence.type],
    })
  }
}

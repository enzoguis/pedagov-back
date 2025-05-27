import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Occurrence,
  OccurrenceTypeEnum,
} from '@/domain/occurrences/enterprise/entities/occurrence'
import { Prisma, Occurrence as PrismaOccurrence } from '@prisma/client'

export class PrismaOccurrenceMapper {
  static toDomain(raw: PrismaOccurrence): Occurrence {
    return Occurrence.create({
      authorId: new UniqueEntityID(raw.authorId),
      teacherId: new UniqueEntityID(raw.teacherId),
      title: raw.title,
      description: raw.description,
      type: OccurrenceTypeEnum[raw.type],
      createdAt: raw.createdAt,
    })
  }

  static toPrisma(
    occurrence: Occurrence
  ): Prisma.OccurrenceUncheckedCreateInput {
    return {
      id: occurrence.id.toString(),
      authorId: occurrence.authorId.toString(),
      teacherId: occurrence.teacherId.toString(),
      title: occurrence.title,
      description: occurrence.description,
      type: occurrence.type,
      createdAt: occurrence.createdAt,
    }
  }
}

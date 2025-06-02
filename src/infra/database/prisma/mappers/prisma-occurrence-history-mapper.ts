import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OccurrenceHistory } from '@/domain/occurrences/enterprise/entities/occurrence-history'
import {
  Change,
  ChangeProps,
} from '@/domain/occurrences/enterprise/entities/value-objects/change'
import {
  Prisma,
  OccurrenceHistory as PrismaOccurrenceHistory,
} from '@prisma/client'

export class PrismaOccurrenceHistoryMapper {
  static toDomain(raw: PrismaOccurrenceHistory): OccurrenceHistory {
    const rawChanges = raw.changes as any[]
    const changePropsArray: ChangeProps[] = rawChanges.map((change) => ({
      field: change.field,
      value: change.value,
    }))

    return OccurrenceHistory.create(
      {
        editorId: new UniqueEntityID(raw.editorId),
        occurrenceId: new UniqueEntityID(raw.occurrenceId),
        changes: Change.createMany(changePropsArray),
        createdAt: raw.createdAt,
      },
      new UniqueEntityID(raw.id)
    )
  }

  static toPrisma(
    occurrenceHistory: OccurrenceHistory
  ): Prisma.OccurrenceHistoryUncheckedCreateInput {
    const changes = Change.toPrimitives(occurrenceHistory.changes)

    return {
      id: occurrenceHistory.id.toString(),
      editorId: occurrenceHistory.editorId.toString(),
      occurrenceId: occurrenceHistory.occurrenceId.toString(),
      createdAt: occurrenceHistory.createdAt,
      changes: changes as unknown as Prisma.InputJsonValue,
    }
  }
}

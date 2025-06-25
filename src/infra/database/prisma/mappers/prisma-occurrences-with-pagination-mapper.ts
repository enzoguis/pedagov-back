import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'
import { OccurrencesWithPagination } from '@/domain/occurrences/enterprise/entities/value-objects/occurrences-with-pagination'
import { Occurrence as PrismaOccurrence } from '@prisma/client'
import { PaginatedResult } from 'prisma-pagination'

export class PrismaOccurrencesWithPaginationMapper {
  static toDomain(
    paginatedOutput: PaginatedResult<PrismaOccurrence>
  ): OccurrencesWithPagination {
    return OccurrencesWithPagination.create({
      occurrences: paginatedOutput.data.map((occurrence) => ({
        id: new UniqueEntityID(occurrence.id),
        authorId: new UniqueEntityID(occurrence.authorId),
        title: occurrence.title,
        description: occurrence.description,
        type: OccurrenceTypeEnum[occurrence.type],
        createdAt: occurrence.createdAt,
      })),
      page: {
        currentPage: paginatedOutput.meta.currentPage,
        lastPage: paginatedOutput.meta.lastPage,
        next: paginatedOutput.meta.next,
        limit: paginatedOutput.meta.perPage,
        prev: paginatedOutput.meta.prev,
        total: paginatedOutput.meta.total,
      },
    })
  }
}

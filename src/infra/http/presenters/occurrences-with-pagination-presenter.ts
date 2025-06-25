import { OccurrencesWithPagination } from '@/domain/occurrences/enterprise/entities/value-objects/occurrences-with-pagination'

export class OccurrencesWithPaginationPresenter {
  static toHTTP(occurrencesWithPagination: OccurrencesWithPagination) {
    return {
      occurrences: occurrencesWithPagination.occurrences.map((occurrence) => ({
        id: occurrence.id.value,
        authorId: occurrence.authorId.value,
        title: occurrence.title,
        description: occurrence.description,
        type: occurrence.type,
        createdAt: occurrence.createdAt,
      })),
      page: {
        total: occurrencesWithPagination.page.total,
        lastPage: occurrencesWithPagination.page.lastPage,
        currentPage: occurrencesWithPagination.page.currentPage,
        limit: occurrencesWithPagination.page.limit,
        prev: occurrencesWithPagination.page.prev,
        next: occurrencesWithPagination.page.next,
      },
    }
  }
}

import { Occurrence } from '@/domain/occurrences/enterprise/entities/occurrence'

export class OccurrencePresenter {
  static toHTTP(occurrence: Occurrence) {
    return {
      id: occurrence.id.value,
      authorId: occurrence.authorId.value,
      title: occurrence.title,
      description: occurrence.description,
      type: occurrence.type,
      createdAt: occurrence.createdAt,
    }
  }
}

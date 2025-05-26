import { OccurrenceHistory } from '@/domain/occurrences/enterprise/entities/occurrence-history'

export abstract class OccurrenceHistoriesRepository {
  abstract create(occurrenceHistory: OccurrenceHistory): Promise<void>
  abstract findManyByOccurrenceId(
    occurrenceId: string
  ): Promise<OccurrenceHistory[]>
}

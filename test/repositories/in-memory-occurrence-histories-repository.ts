import { OccurrenceHistoriesRepository } from '@/domain/occurrences/application/repositories/occurrence-histories-repository'
import { OccurrenceHistory } from '@/domain/occurrences/enterprise/entities/occurrence-history'

export class InMemoryOccurrenceHistoriesRepository
  implements OccurrenceHistoriesRepository
{
  public items: OccurrenceHistory[] = []

  async create(occurrenceHistory: OccurrenceHistory): Promise<void> {
    this.items.push(occurrenceHistory)
  }

  async findManyByOccurrenceId(
    occurrenceId: string
  ): Promise<OccurrenceHistory[]> {
    const ocurreceHistory = this.items.filter(
      (item) => item.occurrenceId.toString() === occurrenceId
    )

    return ocurreceHistory
  }
}

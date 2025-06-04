import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { OccurrenceHistoriesRepository } from '@/domain/occurrences/application/repositories/occurrence-histories-repository'
import { PrismaOccurrenceHistoryMapper } from '../mappers/prisma-occurrence-history-mapper'
import { OccurrenceHistory } from '@/domain/occurrences/enterprise/entities/occurrence-history'

@Injectable()
export class PrismaOccurrenceHistoriesRepository
  implements OccurrenceHistoriesRepository
{
  constructor(private prisma: PrismaService) {}
  async create(occurrenceHistory: OccurrenceHistory): Promise<void> {
    const data = PrismaOccurrenceHistoryMapper.toPrisma(occurrenceHistory)

    await this.prisma.occurrenceHistory.create({ data })
  }

  async findManyByOccurrenceId(
    occurrenceId: string
  ): Promise<OccurrenceHistory[]> {
    const occurrenceHistories = await this.prisma.occurrenceHistory.findMany({
      where: {
        occurrenceId,
      },
    })

    return occurrenceHistories.map(PrismaOccurrenceHistoryMapper.toDomain)
  }
}

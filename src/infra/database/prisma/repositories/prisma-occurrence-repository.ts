import { PaginationParams } from '@/core/repositories/pagination-params'
import {
  FetchAllOccurrencesParams,
  OccurrencesRepository,
} from '@/domain/occurrences/application/repositories/occurrences-repository'
import { Occurrence } from '@/domain/occurrences/enterprise/entities/occurrence'
import { PrismaService } from '../prisma.service'
import { Injectable } from '@nestjs/common'
import { PrismaOccurrenceMapper } from '../mappers/prisma-occurrence-mapper'
import { OccurrenceAttachmentsRepository } from '@/domain/occurrences/application/repositories/occurrence-attachments-repository'

@Injectable()
export class PrismaOccurrenceRepository implements OccurrencesRepository {
  constructor(
    private prisma: PrismaService,
    private occurrenceAttachmentsRepository: OccurrenceAttachmentsRepository
  ) {}

  async create(occurrence: Occurrence) {
    const data = PrismaOccurrenceMapper.toPrisma(occurrence)

    await this.prisma.occurrence.create({ data })

    await this.occurrenceAttachmentsRepository.createMany(
      occurrence.attachments.getItems()
    )
  }
  async save(occurrence: Occurrence): Promise<void> {
    throw new Error('Method not implemented.')
  }
  findById(id: string): Promise<Occurrence | null> {
    throw new Error('Method not implemented.')
  }
  findManyRecents(params: PaginationParams): Promise<Occurrence[]> {
    throw new Error('Method not implemented.')
  }
  findAll(params: FetchAllOccurrencesParams): Promise<Occurrence[]> {
    throw new Error('Method not implemented.')
  }
  delete(occurrence: Occurrence): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

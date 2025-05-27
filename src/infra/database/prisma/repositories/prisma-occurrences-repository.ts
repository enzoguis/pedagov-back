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
import { OccurrenceStudentsRepository } from '@/domain/occurrences/application/repositories/occurrence-student-repository'
import { OccurrenceAttendeesRepository } from '@/domain/occurrences/application/repositories/occurrence-attendees-repository'

@Injectable()
export class PrismaOccurrencesRepository implements OccurrencesRepository {
  constructor(
    private prisma: PrismaService,
    private occurrenceAttachmentsRepository: OccurrenceAttachmentsRepository,
    private occurrenceStudentsRepository: OccurrenceStudentsRepository,
    private occurrenceAttendeesRepository: OccurrenceAttendeesRepository
  ) {}

  async create(occurrence: Occurrence) {
    const data = PrismaOccurrenceMapper.toPrisma(occurrence)

    await this.prisma.occurrence.create({ data })

    await this.occurrenceAttachmentsRepository.createMany(
      occurrence.attachments.getItems()
    )

    await this.occurrenceStudentsRepository.createMany(
      occurrence.students.getItems()
    )

    await this.occurrenceAttendeesRepository.createMany(
      occurrence.attendees.getItems()
    )
  }
  async save(occurrence: Occurrence): Promise<void> {
    const data = PrismaOccurrenceMapper.toPrisma(occurrence)

    await this.prisma.occurrence.update({
      where: {
        id: occurrence.id.toString(),
      },
      data,
    })

    await this.occurrenceAttachmentsRepository.createMany(
      occurrence.attachments.getNewItems()
    )

    await this.occurrenceAttachmentsRepository.deleteMany(
      occurrence.attachments.getRemovedItems()
    )

    await this.occurrenceStudentsRepository.createMany(
      occurrence.students.getNewItems()
    )

    await this.occurrenceStudentsRepository.deleteMany(
      occurrence.students.getRemovedItems()
    )

    await this.occurrenceAttendeesRepository.createMany(
      occurrence.attendees.getNewItems()
    )

    await this.occurrenceAttendeesRepository.deleteMany(
      occurrence.attendees.getRemovedItems()
    )
  }

  async findById(id: string): Promise<Occurrence | null> {
    const group = await this.prisma.occurrence.findUnique({
      where: {
        id,
      },
    })

    if (!group) {
      return null
    }

    return PrismaOccurrenceMapper.toDomain(group)
  }

  async findManyRecents({
    page,
    limit,
  }: PaginationParams): Promise<Occurrence[]> {
    const perPage = limit ?? 10

    const occurrences = await this.prisma.occurrence.findMany({
      orderBy: {
        createdAt: 'asc',
      },
      skip: perPage,
      take: (page - 1) * perPage,
    })

    return occurrences.map(PrismaOccurrenceMapper.toDomain)
  }

  async findAll({
    page,
    limit,
    studentId,
    type,
  }: FetchAllOccurrencesParams): Promise<Occurrence[]> {
    const perPage = limit ?? 10

    const groups = await this.prisma.occurrence.findMany({
      where: {
        ...(studentId && {
          students: {
            some: {
              studentId,
            },
          },
        }),
        ...(type && { type }),
      },
      orderBy: {
        createdAt: 'asc',
      },
      skip: perPage,
      take: (page - 1) * perPage,
    })

    return groups.map(PrismaOccurrenceMapper.toDomain)
  }

  async delete(occurrence: Occurrence): Promise<void> {
    await this.prisma.occurrence.delete({
      where: {
        id: occurrence.id.toString(),
      },
    })
  }
}

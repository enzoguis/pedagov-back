import { PaginationParams } from '@/core/repositories/pagination-params'
import {
  FetchAllOccurrencesParams,
  OccurrencesRepository,
} from '@/domain/occurrences/application/repositories/occurrences-repository'
import {
  Occurrence,
  OccurrenceTypeEnum,
} from '@/domain/occurrences/enterprise/entities/occurrence'
import { PrismaService } from '../prisma.service'
import { Injectable } from '@nestjs/common'
import { PrismaOccurrenceMapper } from '../mappers/prisma-occurrence-mapper'
import { OccurrenceAttachmentsRepository } from '@/domain/occurrences/application/repositories/occurrence-attachments-repository'
import { OccurrenceStudentsRepository } from '@/domain/occurrences/application/repositories/occurrence-student-repository'
import { OccurrenceAttendeesRepository } from '@/domain/occurrences/application/repositories/occurrence-attendees-repository'
import { OccurrenceDetails } from '@/domain/occurrences/enterprise/entities/value-objects/occurrence-details'
import { PrismaOccurrenceDetailsMapper } from '../mappers/prisma-occurrence-details-mapper'
import { OccurrenceWithStudentName } from '@/domain/occurrences/enterprise/entities/value-objects/occurrence-with-student-name'
import { PrismaOccurrenceWithStudentNameMapper } from '../mappers/prisma-occurrence-with-student-name-mapper'
import {
  OccurrenceProps,
  OccurrencesWithPagination,
} from '@/domain/occurrences/enterprise/entities/value-objects/occurrences-with-pagination'
import { createPaginator } from 'prisma-pagination'
import { Prisma, Occurrence as PrismaOccurrence } from '@prisma/client'
import { PrismaOccurrencesWithPaginationMapper } from '../mappers/prisma-occurrences-with-pagination-mapper'

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

    Promise.all([
      this.occurrenceAttachmentsRepository.createMany(
        occurrence.attachments.getNewItems()
      ),

      this.occurrenceAttachmentsRepository.deleteMany(
        occurrence.attachments.getRemovedItems()
      ),

      this.occurrenceStudentsRepository.createMany(
        occurrence.students.getNewItems()
      ),

      this.occurrenceStudentsRepository.deleteMany(
        occurrence.students.getRemovedItems()
      ),

      this.occurrenceAttendeesRepository.createMany(
        occurrence.attendees.getNewItems()
      ),

      this.occurrenceAttendeesRepository.deleteMany(
        occurrence.attendees.getRemovedItems()
      ),
    ])
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

  async findWithDetails(id: string): Promise<OccurrenceDetails | null> {
    const occurrence = await this.prisma.occurrence.findUnique({
      where: { id },
      include: {
        attachments: true,
        attendees: {
          include: {
            user: true,
          },
        },
        author: {
          include: {
            user: true,
          },
        },
        teacher: {
          include: {
            user: true,
          },
        },
        students: {
          include: {
            student: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    })

    if (!occurrence) {
      return null
    }

    return PrismaOccurrenceDetailsMapper.toDomain(occurrence)
  }

  async findManyForEachStudent({
    page,
    limit,
  }: PaginationParams): Promise<OccurrenceWithStudentName[]> {
    const perPage = limit ?? 10

    const occurrencesPerStudent = await this.prisma.occurrenceStudents.findMany(
      {
        select: {
          occurrence: {
            select: {
              id: true,
              title: true,
              type: true,
              createdAt: true,
            },
          },
          student: {
            select: {
              userId: true,
              user: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
        skip: (page - 1) * perPage,
        take: perPage,
      }
    )

    return occurrencesPerStudent.map((item) =>
      PrismaOccurrenceWithStudentNameMapper.toDomain(item)
    )
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
      skip: (page - 1) * perPage,
      take: perPage,
    })

    return occurrences.map(PrismaOccurrenceMapper.toDomain)
  }

  async findAll({
    page,
    limit = 10,
    search,
    order = 'desc',
    sort = 'createdAt',
  }: PaginationParams<
    keyof OccurrenceProps
  >): Promise<OccurrencesWithPagination> {
    const paginate = createPaginator({ page, perPage: limit })

    const isOccurrenceType = Object.values(OccurrenceTypeEnum).includes(
      search as OccurrenceTypeEnum
    )

    let dateFilter = {}
    let isDate = false

    if (search) {
      isDate = !isNaN(Date.parse(search))

      if (isDate) {
        const searchDate = new Date(search)
        const nextDate = new Date(searchDate)
        nextDate.setDate(nextDate.getDate() + 1)

        dateFilter = { createdAt: { gte: searchDate, lt: nextDate } }
      }
    }
    const occurrencesWithPagination = await paginate<
      PrismaOccurrence,
      Prisma.OccurrenceFindManyArgs
    >(this.prisma.occurrence, {
      where: {
        OR: [
          {
            author: {
              user: { name: { contains: search, mode: 'insensitive' } },
            },
          },
          {
            attendees: {
              some: {
                user: { name: { contains: search, mode: 'insensitive' } },
              },
            },
          },
          {
            students: {
              some: {
                student: {
                  user: {
                    name: { contains: search, mode: 'insensitive' },
                  },
                },
              },
            },
          },
          {
            teacher: {
              user: { name: { contains: search, mode: 'insensitive' } },
            },
          },
          { title: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
          { id: { contains: search, mode: 'insensitive' } },
          ...(isOccurrenceType
            ? [{ type: { equals: search as OccurrenceTypeEnum } }]
            : []),
          ...(isDate ? [dateFilter] : []),
        ],
      },
      orderBy: {
        [sort]: order,
      },
    })

    return PrismaOccurrencesWithPaginationMapper.toDomain(
      occurrencesWithPagination
    )
  }

  async delete(occurrence: Occurrence): Promise<void> {
    await this.prisma.occurrence.delete({
      where: {
        id: occurrence.id.toString(),
      },
    })
  }
}

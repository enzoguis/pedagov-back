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
    limit,
    searchTerm,
  }: FetchAllOccurrencesParams): Promise<Occurrence[]> {
    const perPage = limit ?? 10

    const isOccurrenceType = Object.values(OccurrenceTypeEnum).includes(
      searchTerm as OccurrenceTypeEnum
    )

    let dateFilter = {}
    let isDate = false

    if (searchTerm) {
      isDate = !isNaN(Date.parse(searchTerm))

      if (isDate) {
        const searchDate = new Date(searchTerm)
        const nextDate = new Date(searchDate)
        nextDate.setDate(nextDate.getDate() + 1)

        dateFilter = { createdAt: { gte: searchDate, lt: nextDate } }
      }
    }

    const occurrences = await this.prisma.occurrence.findMany({
      where: {
        OR: [
          {
            author: {
              user: { name: { contains: searchTerm, mode: 'insensitive' } },
            },
          },
          {
            attendees: {
              some: {
                user: { name: { contains: searchTerm, mode: 'insensitive' } },
              },
            },
          },
          {
            students: {
              some: {
                student: {
                  user: {
                    name: { contains: searchTerm, mode: 'insensitive' },
                  },
                },
              },
            },
          },
          {
            teacher: {
              user: { name: { contains: searchTerm, mode: 'insensitive' } },
            },
          },
          { title: { contains: searchTerm, mode: 'insensitive' } },
          { description: { contains: searchTerm, mode: 'insensitive' } },
          { id: { contains: searchTerm, mode: 'insensitive' } },
          ...(isOccurrenceType
            ? [{ type: { equals: searchTerm as OccurrenceTypeEnum } }]
            : []),
          ...(isDate ? [dateFilter] : []),
        ],
      },
      orderBy: {
        createdAt: 'asc',
      },
      skip: (page - 1) * perPage,
      take: perPage,
    })

    return occurrences.map(PrismaOccurrenceMapper.toDomain)
  }

  async delete(occurrence: Occurrence): Promise<void> {
    await this.prisma.occurrence.delete({
      where: {
        id: occurrence.id.toString(),
      },
    })
  }
}

import { OccurrenceAttendee } from '@/domain/occurrences/enterprise/entities/occurrence-attendee'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaOccurrenceAttendeesMapper } from '../mappers/prisma-occurrence-attendee-mapper'
import { OccurrenceAttendeesRepository } from '@/domain/occurrences/application/repositories/occurrence-attendees-repository'

@Injectable()
export class PrismaOccurrenceAttendeesRepository
  implements OccurrenceAttendeesRepository
{
  constructor(private prisma: PrismaService) {}

  async createMany(attendees: OccurrenceAttendee[]) {
    if (attendees.length === 0) {
      return
    }

    const data = PrismaOccurrenceAttendeesMapper.toPrisma(attendees)

    await this.prisma.occurrenceAttendees.updateMany(data)
  }

  async deleteMany(attendees: OccurrenceAttendee[]) {
    if (attendees.length === 0) {
      return
    }

    const attendeesIds = attendees.map((attachment) => attachment.id.toString())

    await this.prisma.occurrenceAttendees.deleteMany({
      where: {
        userId: {
          in: attendeesIds,
        },
      },
    })
  }

  async findManyByOccurrenceId(
    occurrenceId: string
  ): Promise<OccurrenceAttendee[]> {
    const occurrenceAttendees = await this.prisma.occurrenceAttendees.findMany({
      where: {
        occurrenceId,
      },
    })

    return occurrenceAttendees.map(PrismaOccurrenceAttendeesMapper.toDomain)
  }
}

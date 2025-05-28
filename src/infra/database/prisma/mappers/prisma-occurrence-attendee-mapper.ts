import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OccurrenceAttendee } from '@/domain/occurrences/enterprise/entities/occurrence-attendee'
import {
  Prisma,
  OccurrenceAttendees as PrismaOccurrenceAttendees,
} from '@prisma/client'

export class PrismaOccurrenceAttendeesMapper {
  static toDomain(raw: PrismaOccurrenceAttendees): OccurrenceAttendee {
    return OccurrenceAttendee.create({
      occurrenceId: new UniqueEntityID(raw.occurrenceId),
      attendeeId: new UniqueEntityID(raw.userId),
    })
  }

  static toPrisma(
    occurrenceAttendees: OccurrenceAttendee[]
  ): Prisma.OccurrenceAttendeesUpdateManyArgs {
    const attendeeIds = occurrenceAttendees.map((attendee) =>
      attendee.attendeeId.toString()
    )
    return {
      where: {
        userId: {
          in: attendeeIds,
        },
      },
      data: {
        occurrenceId: occurrenceAttendees[0].occurrenceId.toString(),
      },
    }
  }
}

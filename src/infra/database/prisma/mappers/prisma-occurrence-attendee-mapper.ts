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
  ): Prisma.OccurrenceAttendeesCreateManyInput[] {
    return occurrenceAttendees.map((attendee) => ({
      occurrenceId: attendee.occurrenceId.toString(),
      userId: attendee.attendeeId.toString(),
    }))
  }
}

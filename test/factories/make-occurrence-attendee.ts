import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  OccurrenceAttendee,
  OccurrenceAttendeeProps,
} from '@/domain/occurrences/enterprise/entities/occurrence-attendee'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

export function makeOccurrenceAttendee(
  override: Partial<OccurrenceAttendeeProps> = {},
  id?: UniqueEntityID
) {
  const occurrenceAttendee = OccurrenceAttendee.create(
    {
      occurrenceId: new UniqueEntityID(),
      attendeeId: new UniqueEntityID(),
      ...override,
    },
    id
  )

  return occurrenceAttendee
}

@Injectable()
export class OccurrenceAttendeeFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaOccurrenceAttendee(
    data: Partial<OccurrenceAttendeeProps> = {}
  ): Promise<OccurrenceAttendee> {
    const occurrenceAttendee = makeOccurrenceAttendee(data)

    await this.prisma.occurrenceAttendees.create({
      data: {
        occurrenceId: occurrenceAttendee.occurrenceId.toString(),
        userId: occurrenceAttendee.attendeeId.toString(),
      },
    })

    return occurrenceAttendee
  }
}

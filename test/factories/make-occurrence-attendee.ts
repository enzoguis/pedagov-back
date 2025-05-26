import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  OccurrenceAttendee,
  OccurrenceAttendeeProps,
} from '@/domain/occurrences/enterprise/entities/occurrence-attendee'

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

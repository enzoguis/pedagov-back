import { OccurrenceAttendee } from '@/domain/occurrences/enterprise/entities/occurrence-attendee'

export abstract class OccurrenceAttendeesRepository {
  abstract createMany(attendees: OccurrenceAttendee[]): Promise<void>
  abstract deleteMany(attendees: OccurrenceAttendee[]): Promise<void>
  abstract findManyByOccurrenceId(
    occurrenceId: string
  ): Promise<OccurrenceAttendee[]>
}

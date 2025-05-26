import { OccurrenceAttendee } from '@/domain/occurrences/enterprise/entities/occurrence-attendee'

export abstract class OccurrenceAttendeesRepository {
  abstract createMany(students: OccurrenceAttendee[]): Promise<void>
  abstract deleteMany(students: OccurrenceAttendee[]): Promise<void>
  abstract findManyByOccurrenceId(
    occurrenceId: string
  ): Promise<OccurrenceAttendee[]>
}

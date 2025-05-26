import { OccurrenceAttendeesRepository } from '@/domain/occurrences/application/repositories/occurrence-attendees-repository'
import { OccurrenceAttendee } from '@/domain/occurrences/enterprise/entities/occurrence-attendee'

export class InMemoryOccurrenceAttendeesRepository
  implements OccurrenceAttendeesRepository
{
  public items: OccurrenceAttendee[] = []

  async createMany(attendees: OccurrenceAttendee[]): Promise<void> {
    this.items.push(...attendees)
  }

  async findManyByOccurrenceId(
    occurrenceId: string
  ): Promise<OccurrenceAttendee[]> {
    const occurrenceAttendees = this.items.filter(
      (item) => item.occurrenceId.toString() === occurrenceId
    )

    return occurrenceAttendees
  }

  async deleteMany(attendees: OccurrenceAttendee[]): Promise<void> {
    const occurrenceAttendees = this.items.filter((item) => {
      return !attendees.some((attendee) => attendee.equals(item))
    })

    this.items = occurrenceAttendees
  }
}

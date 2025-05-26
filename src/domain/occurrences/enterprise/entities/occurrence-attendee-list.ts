import { WatchedList } from '@/core/entities/watched-list'
import { OccurrenceAttendee } from './occurrence-attendee'

export class OccurrenceAttendeesList extends WatchedList<OccurrenceAttendee> {
  compareItems(a: OccurrenceAttendee, b: OccurrenceAttendee): boolean {
    return a.id.equals(b.id)
  }
}

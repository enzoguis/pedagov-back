import { WatchedList } from '@/core/entities/watched-list'
import { OccurrenceAttendee } from './occurrence-attendee'

export class OccurrenceAttendeesList extends WatchedList<OccurrenceAttendee> {
  compareItems(a: OccurrenceAttendee, b: OccurrenceAttendee): boolean {
    return a.id.equals(b.id)
  }

  public equals(other: WatchedList<OccurrenceAttendee>): boolean {
    if (this.currentItems.length !== other.currentItems.length) {
      return false
    }

    return this.currentItems.every((item, index) =>
      this.compareItems(item, other.currentItems[index])
    )
  }
}

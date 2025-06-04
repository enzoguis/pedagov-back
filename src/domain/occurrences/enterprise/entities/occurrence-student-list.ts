import { WatchedList } from '@/core/entities/watched-list'
import { OccurrenceStudent } from './occurrence-student'

export class OccurrenceStudentList extends WatchedList<OccurrenceStudent> {
  compareItems(a: OccurrenceStudent, b: OccurrenceStudent): boolean {
    return a.id.equals(b.id)
  }

  public equals(other: WatchedList<OccurrenceStudent>): boolean {
    if (this.currentItems.length !== other.currentItems.length) {
      return false
    }

    return this.currentItems.every((item, index) =>
      this.compareItems(item, other.currentItems[index])
    )
  }
}

import { WatchedList } from '@/core/entities/watched-list'
import { OccurrenceStudent } from './occurrence-student'

export class OccurrenceStudentList extends WatchedList<OccurrenceStudent> {
  compareItems(a: OccurrenceStudent, b: OccurrenceStudent): boolean {
    return a.id.equals(b.id)
  }
}

import { WatchedList } from '@/core/entities/watched-list'
import { GroupStudent } from './group-student'

export class GroupStudentList extends WatchedList<GroupStudent> {
  compareItems(a: GroupStudent, b: GroupStudent): boolean {
    return a.id.equals(b.id)
  }

  public equals(other: WatchedList<GroupStudent>): boolean {
    if (this.currentItems.length !== other.currentItems.length) {
      return false
    }

    return this.currentItems.every((item, index) =>
      this.compareItems(item, other.currentItems[index])
    )
  }
}

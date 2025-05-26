import { WatchedList } from '@/core/entities/watched-list'
import { GroupStudent } from './group-student'

export class GroupStudentList extends WatchedList<GroupStudent> {
  compareItems(a: GroupStudent, b: GroupStudent): boolean {
    return a.id.equals(b.id)
  }
}

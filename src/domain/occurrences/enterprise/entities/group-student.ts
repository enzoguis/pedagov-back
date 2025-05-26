import { Entity } from '@/core/entities/entitity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface GroupStudentProps {
  groupId: UniqueEntityID
  studentId: UniqueEntityID
}

export class GroupStudent extends Entity<GroupStudentProps> {
  get groupId() {
    return this.props.groupId
  }

  get studentId() {
    return this.props.studentId
  }

  static create(props: GroupStudentProps, id?: UniqueEntityID) {
    const groupStudent = new GroupStudent(props, id)

    return groupStudent
  }
}

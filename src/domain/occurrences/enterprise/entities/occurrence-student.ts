import { Entity } from '@/core/entities/entitity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface OccurrenceStudentProps {
  occurrenceId: UniqueEntityID
  studentId: UniqueEntityID
}

export class OccurrenceStudent extends Entity<OccurrenceStudentProps> {
  get occurrenceId() {
    return this.props.occurrenceId
  }

  get studentId() {
    return this.props.studentId
  }

  static create(props: OccurrenceStudentProps, id?: UniqueEntityID) {
    const occurrenceStudent = new OccurrenceStudent(props, id)

    return occurrenceStudent
  }
}

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ValueObject } from '@/core/entities/value-object'
import { OccurrenceTypeEnum } from '../occurrence'

export interface OccurrenceWithStudentNameProps {
  occurrenceId: UniqueEntityID
  studentId: UniqueEntityID
  student: string
  title: string
  type: OccurrenceTypeEnum
  createdAt: Date
}

export class OccurrenceWithStudentName extends ValueObject<OccurrenceWithStudentNameProps> {
  get occurrenceId() {
    return this.props.occurrenceId
  }

  get studentId() {
    return this.props.studentId
  }

  get student() {
    return this.props.student
  }

  get title() {
    return this.props.title
  }

  get type() {
    return this.props.type
  }

  get createdAt() {
    return this.props.createdAt
  }

  static create(props: OccurrenceWithStudentNameProps) {
    return new OccurrenceWithStudentName(props)
  }
}

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ValueObject } from '@/core/entities/value-object'
import { Attachment } from '../attachment'
import { Student } from '../student'
import { OccurrenceTypeEnum } from '../occurrence'
import { Attendee } from '../attendee'

export interface OccurrenceDetailsProps {
  occurrenceId: UniqueEntityID
  authorId: UniqueEntityID
  author: string
  teacherId: UniqueEntityID
  teacher: string
  title: string
  description: string
  type: OccurrenceTypeEnum
  attachments: Attachment[]
  students: Student[]
  attendees: Attendee[]
  createdAt: Date
  updatedAt?: Date | null
}

export class OccurrenceDetails extends ValueObject<OccurrenceDetailsProps> {
  get occurrenceId() {
    return this.props.occurrenceId
  }

  get authorId() {
    return this.props.authorId
  }

  get author() {
    return this.props.author
  }

  get teacherId() {
    return this.props.teacherId
  }

  get teacher() {
    return this.props.teacher
  }

  get title() {
    return this.props.title
  }

  get description() {
    return this.props.description
  }

  get type() {
    return this.props.type
  }

  get attachments() {
    return this.props.attachments
  }

  get students() {
    return this.props.students
  }

  get attendees() {
    return this.props.attendees
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(props: OccurrenceDetailsProps) {
    return new OccurrenceDetails(props)
  }
}

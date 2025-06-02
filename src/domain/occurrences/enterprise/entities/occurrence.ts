import { AggregateRoot } from '@/core/entities/aggregate-root'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { OccurrenceAttendeesList } from './occurrence-attendee-list'
import { OccurrenceStudentList } from './occurrence-student-list'
import { OccurrenceHistory } from './occurrence-history'
import { OccurrenceAttachmentsList } from './occurrence-attachments-list'

export enum OccurrenceTypeEnum {
  DISCIPLINE = 'DISCIPLINE',
  UNIFORM = 'UNIFORM',
  ABSENCES = 'ABSENCES',
  TARDINESS = 'TARDINESS',
}

export type OccurrenceTypes = keyof typeof OccurrenceTypeEnum

export interface OccurrenceProps {
  authorId: UniqueEntityID
  attendees: OccurrenceAttendeesList
  teacherId: UniqueEntityID
  students: OccurrenceStudentList
  type: OccurrenceTypeEnum
  attachments: OccurrenceAttachmentsList
  changes: { field: string; value: unknown }[]
  title: string
  description: string
  createdAt: Date
  updatedAt?: Date | null
}

export class Occurrence extends AggregateRoot<OccurrenceProps> {
  get authorId() {
    return this.props.authorId
  }

  get attendees() {
    return this.props.attendees
  }

  get teacherId() {
    return this.props.teacherId
  }

  get students() {
    return this.props.students
  }

  get type() {
    return this.props.type
  }

  get attachments() {
    return this.props.attachments
  }

  get title() {
    return this.props.title
  }

  get description() {
    return this.props.description
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get changes() {
    return this.props.changes
  }

  set students(students: OccurrenceStudentList) {
    if (students.equals(this.props.students)) {
      return
    }

    this.props.students = students

    const currentStudentsIds = students.currentItems.map(
      (student) => student.studentId
    )

    this.touch('students', currentStudentsIds)
  }

  set attendees(attendees: OccurrenceAttendeesList) {
    if (attendees.equals(this.props.attendees)) {
      return
    }

    this.props.attendees = attendees

    const currentAttendeesIds = attendees.currentItems.map(
      (attendee) => attendee.id
    )

    this.touch('attendees', currentAttendeesIds)
  }

  set attachments(attachments: OccurrenceAttachmentsList) {
    if (attachments.equals(this.props.attachments)) {
      return
    }

    this.props.attachments = attachments

    const currentAttachmentsIds = attachments.currentItems.map(
      (attachment) => attachment.id
    )

    this.touch('attachments', currentAttachmentsIds)
  }

  set type(type: OccurrenceTypeEnum) {
    if (type === this.props.type) {
      return
    }

    this.props.type = type

    this.touch('type', type)
  }

  set title(title: string) {
    if (title === this.props.title) {
      return
    }

    this.props.title = title

    this.touch('title', title)
  }

  set teacherId(teacherId: UniqueEntityID) {
    if (teacherId.equals(this.props.teacherId)) {
      return
    }

    this.props.teacherId = teacherId

    this.touch('teacherId', teacherId)
  }

  set description(description: string) {
    if (description === this.props.description) {
      return
    }

    this.props.description = description

    this.touch('description', description)
  }

  private touch(field: string, value: unknown) {
    this.props.changes.push({ field, value })
  }

  static create(
    props: Optional<
      OccurrenceProps,
      'createdAt' | 'attendees' | 'students' | 'attachments' | 'changes'
    >,
    id?: UniqueEntityID
  ) {
    const occurrence = new Occurrence(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        attendees: props.attendees ?? new OccurrenceAttendeesList(),
        students: props.students ?? new OccurrenceStudentList(),
        attachments: props.attachments ?? new OccurrenceAttachmentsList(),
        changes: props.changes ?? [],
      },
      id
    )

    return occurrence
  }
}

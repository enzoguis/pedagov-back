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
  title: string
  description: string
  createdAt: Date
  updatedAt?: Date | null
}

export class Occurrence extends AggregateRoot<OccurrenceProps> {
  private history: OccurrenceHistory[] = []

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

  get histories() {
    return this.history
  }

  set students(students: OccurrenceStudentList) {
    this.props.students = students
  }

  set attendees(attendees: OccurrenceAttendeesList) {
    this.props.attendees = attendees
  }

  set attachments(attachments: OccurrenceAttachmentsList) {
    this.props.attachments = attachments
  }

  updateAttendees(
    attendees: OccurrenceAttendeesList,
    editorId: UniqueEntityID
  ) {
    this.props.attendees = attendees
    this.touch(editorId, ['attendees'])
  }

  updateStudents(students: OccurrenceStudentList, editorId: UniqueEntityID) {
    this.props.students = students
    this.touch(editorId, ['students'])
  }

  updateAttachments(
    attachments: OccurrenceAttachmentsList,
    editorId: UniqueEntityID
  ) {
    this.props.attachments = attachments
    this.touch(editorId, ['attachments'])
  }

  updateType(type: OccurrenceTypeEnum, editorId: UniqueEntityID) {
    this.props.type = type
    this.touch(editorId, ['type'])
  }

  updateTitle(title: string, editorId: UniqueEntityID) {
    this.props.title = title
    this.touch(editorId, ['title'])
  }

  updateTeacherId(teacherId: UniqueEntityID, editorId: UniqueEntityID) {
    this.props.teacherId = teacherId
    this.touch(editorId, ['teacherId'])
  }

  updateDescription(description: string, editorId: UniqueEntityID) {
    this.props.description = description
    this.touch(editorId, ['description'])
  }

  private touch(editorId: UniqueEntityID, changedFields: string[]) {
    this.props.updatedAt = new Date()

    const history = OccurrenceHistory.create({
      editorId,
      occurrenceId: this.id,
      createdAt: this.props.updatedAt,
      changedFields,
    })

    this.history.push(history)
  }

  static create(
    props: Optional<
      OccurrenceProps,
      'createdAt' | 'attendees' | 'students' | 'attachments'
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
      },
      id
    )

    return occurrence
  }
}

import { OccurrencesRepository } from '../repositories/occurrences-repository'
import { Either, left, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { OccurrenceStudent } from '@/domain/occurrences/enterprise/entities/occurrence-student'
import { OccurrenceStudentList } from '@/domain/occurrences/enterprise/entities/occurrence-student-list'
import { OccurrenceAttendeesList } from '@/domain/occurrences/enterprise/entities/occurrence-attendee-list'
import { OccurrenceStudentsRepository } from '../repositories/occurrence-student-repository'
import { OccurrenceAttendeesRepository } from '../repositories/occurrence-attendees-repository'
import { OccurrenceAttendee } from '@/domain/occurrences/enterprise/entities/occurrence-attendee'
import {
  OccurrenceTypeEnum,
  OccurrenceTypes,
} from '@/domain/occurrences/enterprise/entities/occurrence'
import { OccurrenceAttachmentsRepository } from '../repositories/occurrence-attachments-repository'
import { OccurrenceAttachmentsList } from '@/domain/occurrences/enterprise/entities/occurrence-attachments-list'
import { OccurrenceAttachment } from '@/domain/occurrences/enterprise/entities/occurrence-attachment'

interface EditOccurrenceUseCaseRequest {
  occurrenceId: string
  attendeesIds: string[]
  studentsIds: string[]
  attachmentsIds: string[]
  teacherId: string
  editorId: string
  type: OccurrenceTypes
  title: string
  description: string
}

type EditOccurrenceUseCaseResponse = Either<ResourceNotFoundError, {}>

export class EditOccurrenceUseCase {
  constructor(
    private occurrencesRepository: OccurrencesRepository,
    private occurrenceStudentsRepository: OccurrenceStudentsRepository,
    private occurrenceAttendeesRepository: OccurrenceAttendeesRepository,
    private occurrenceAttachmentsRepository: OccurrenceAttachmentsRepository
  ) {}
  async execute({
    occurrenceId,
    attendeesIds,
    description,
    editorId,
    studentsIds,
    attachmentsIds,
    type,
    teacherId,
    title,
  }: EditOccurrenceUseCaseRequest): Promise<EditOccurrenceUseCaseResponse> {
    const occurrence = await this.occurrencesRepository.findById(occurrenceId)

    if (!occurrence) {
      return left(new ResourceNotFoundError())
    }

    const currentOccurrenceStudents =
      await this.occurrenceStudentsRepository.findManyByOccurrenceId(
        occurrenceId
      )

    const occurrenceStudentsList = new OccurrenceStudentList(
      currentOccurrenceStudents
    )

    const occurrenceStudents = studentsIds.map((id) => {
      return OccurrenceStudent.create({
        studentId: new UniqueEntityID(id),
        occurrenceId: occurrence.id,
      })
    })

    occurrenceStudentsList.update(occurrenceStudents)

    const currentOccurrenceAttendees =
      await this.occurrenceAttendeesRepository.findManyByOccurrenceId(
        occurrenceId
      )

    const occurrenceAttendeesList = new OccurrenceAttendeesList(
      currentOccurrenceAttendees
    )

    const occurrenceAttendees = attendeesIds.map((id) => {
      return OccurrenceAttendee.create({
        attendeeId: new UniqueEntityID(id),
        occurrenceId: occurrence.id,
      })
    })

    occurrenceAttendeesList.update(occurrenceAttendees)

    const currentOccurrenceAttachments =
      await this.occurrenceAttachmentsRepository.findManyByOccurrenceId(
        occurrenceId
      )

    const occurrenceAttachmentsList = new OccurrenceAttachmentsList(
      currentOccurrenceAttachments
    )

    const occurrenceAttachments = attachmentsIds.map((id) => {
      return OccurrenceAttachment.create({
        attachmentId: new UniqueEntityID(id),
        occurrenceId: occurrence.id,
      })
    })

    occurrenceAttachmentsList.update(occurrenceAttachments)

    occurrence.updateStudents(
      occurrenceStudentsList,
      new UniqueEntityID(editorId)
    )
    occurrence.updateAttendees(
      occurrenceAttendeesList,
      new UniqueEntityID(editorId)
    )
    occurrence.updateAttachments(
      occurrenceAttachmentsList,
      new UniqueEntityID(editorId)
    )
    occurrence.updateTitle(title, new UniqueEntityID(editorId))
    occurrence.updateDescription(description, new UniqueEntityID(editorId))
    occurrence.updateType(
      OccurrenceTypeEnum[type],
      new UniqueEntityID(editorId)
    )
    occurrence.updateTeacherId(
      new UniqueEntityID(teacherId),
      new UniqueEntityID(editorId)
    )

    await this.occurrencesRepository.save(occurrence)

    return right({})
  }
}

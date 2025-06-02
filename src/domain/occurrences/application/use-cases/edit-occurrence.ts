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
import { Injectable } from '@nestjs/common'
import { OccurrenceHistory } from '../../enterprise/entities/occurrence-history'
import { Change } from '../../enterprise/entities/value-objects/change'
import { OccurrenceHistoriesRepository } from '../repositories/occurrence-histories-repository'

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

@Injectable()
export class EditOccurrenceUseCase {
  constructor(
    private occurrencesRepository: OccurrencesRepository,
    private occurrenceHistoriesRepository: OccurrenceHistoriesRepository,
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

    occurrence.students = occurrenceStudentsList
    occurrence.attendees = occurrenceAttendeesList

    occurrence.attachments = occurrenceAttachmentsList
    occurrence.title = title
    occurrence.description = description
    occurrence.type = OccurrenceTypeEnum[type]
    occurrence.teacherId = new UniqueEntityID(teacherId)

    const occurrenceChange = occurrence.changes.map((change) => {
      return Change.create(change)
    })

    await this.occurrencesRepository.save(occurrence)

    if (occurrenceChange.length > 0) {
      const occurrenceHistory = OccurrenceHistory.create({
        createdAt: new Date(),
        editorId: new UniqueEntityID(editorId),
        occurrenceId: occurrence.id,
        changes: occurrenceChange,
      })

      await this.occurrenceHistoriesRepository.create(occurrenceHistory)
    }

    return right({})
  }
}

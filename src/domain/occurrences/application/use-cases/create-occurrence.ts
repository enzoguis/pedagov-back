import {
  Occurrence,
  OccurrenceTypeEnum,
  OccurrenceTypes,
} from '@/domain/occurrences/enterprise/entities/occurrence'
import { OccurrencesRepository } from '../repositories/occurrences-repository'
import { Either, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OccurrenceStudent } from '@/domain/occurrences/enterprise/entities/occurrence-student'
import { OccurrenceStudentList } from '@/domain/occurrences/enterprise/entities/occurrence-student-list'
import { OccurrenceAttendee } from '@/domain/occurrences/enterprise/entities/occurrence-attendee'
import { OccurrenceAttendeesList } from '@/domain/occurrences/enterprise/entities/occurrence-attendee-list'
import { EmailSender } from '../email/email-sender'
import { StudentsRepository } from '../repositories/students-repository'
import { OccurrenceAttachment } from '@/domain/occurrences/enterprise/entities/occurrence-attachment'
import { OccurrenceAttachmentsList } from '@/domain/occurrences/enterprise/entities/occurrence-attachments-list'

interface CreateOccurrenceUseCaseRequest {
  authorId: string
  attendeesIds: string[]
  studentsIds: string[]
  attachmentsIds: string[]
  teacherId: string
  type: OccurrenceTypes
  title: string
  description: string
  shouldSendEmail: boolean
  templateId: string
}

type CreateOccurrenceUseCaseResponse = Either<
  null,
  {
    occurrence: Occurrence
  }
>

export class CreateOccurrenceUseCase {
  constructor(
    private occurrencesRepository: OccurrencesRepository,
    private emailSender: EmailSender,
    private studentsRepository: StudentsRepository
  ) {}
  async execute({
    attendeesIds,
    authorId,
    studentsIds,
    attachmentsIds,
    description,
    type,
    teacherId,
    title,
    shouldSendEmail,
    templateId,
  }: CreateOccurrenceUseCaseRequest): Promise<CreateOccurrenceUseCaseResponse> {
    const occurrence = Occurrence.create({
      authorId: new UniqueEntityID(authorId),
      description,
      teacherId: new UniqueEntityID(teacherId),
      title,
      type: OccurrenceTypeEnum[type],
    })

    const occurrenceStudents = studentsIds.map((id) => {
      return OccurrenceStudent.create({
        studentId: new UniqueEntityID(id),
        occurrenceId: occurrence.id,
      })
    })

    const attendees = attendeesIds.map((id) => {
      return OccurrenceAttendee.create({
        attendeeId: new UniqueEntityID(id),
        occurrenceId: occurrence.id,
      })
    })

    const occurrenceAttachments = attachmentsIds.map((id) => {
      return OccurrenceAttachment.create({
        attachmentId: new UniqueEntityID(id),
        occurrenceId: occurrence.id,
      })
    })

    occurrence.students = new OccurrenceStudentList(occurrenceStudents)
    occurrence.attendees = new OccurrenceAttendeesList(attendees)
    occurrence.attachments = new OccurrenceAttachmentsList(
      occurrenceAttachments
    )

    await this.occurrencesRepository.create(occurrence)

    if (shouldSendEmail) {
      const students = await this.studentsRepository.findManyByIds(studentsIds)

      await Promise.all(
        students.map(async (student) => {
          await this.emailSender.send({
            recipientEmail: student.responsibleEmail,
            templateId,
            data: { studentName: student.name },
          })
        })
      )
    }

    return right({ occurrence })
  }
}

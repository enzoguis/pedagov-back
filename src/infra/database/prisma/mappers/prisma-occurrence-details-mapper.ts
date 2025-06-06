import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OccurrenceDetails } from '@/domain/occurrences/enterprise/entities/value-objects/occurrence-details'
import {
  Occurrence as PrismaOccurrence,
  User as PrismaUser,
  Attachment as PrismaAttachment,
  OccurrenceAttendees as PrismaOccurrenceAttendee,
} from '@prisma/client'
import { PrismaAttachmentMapper } from './prisma-attachment-mapper'
import {
  PrismaStudentMapper,
  PrismaStudentWithName,
} from './prisma-student-mapper'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'
import { PrismaAttendeeMapper } from './prisma-attendee-mapper'

type PrismaOccurrenceDetails = PrismaOccurrence & {
  author: { user: PrismaUser }
  teacher: { user: PrismaUser }
  attendees: { user: PrismaUser }[]
  students: Array<{
    student: PrismaStudentWithName
  }>
  attachments: PrismaAttachment[]
}

export class PrismaOccurrenceDetailsMapper {
  static toDomain(raw: PrismaOccurrenceDetails) {
    return OccurrenceDetails.create({
      occurrenceId: new UniqueEntityID(raw.id),
      authorId: new UniqueEntityID(raw.author.user.id),
      author: raw.author.user.name,
      teacherId: new UniqueEntityID(raw.teacher.user.id),
      teacher: raw.teacher.user.name,
      attachments: raw.attachments.map(PrismaAttachmentMapper.toDomain),
      students: raw.students.map((s) =>
        PrismaStudentMapper.toDomain(s.student)
      ),
      attendees: raw.attendees.map((attendee) =>
        PrismaAttendeeMapper.toDomain(attendee.user)
      ),
      createdAt: raw.createdAt,
      description: raw.description,
      title: raw.title,
      type: OccurrenceTypeEnum[raw.type],
    })
  }
}

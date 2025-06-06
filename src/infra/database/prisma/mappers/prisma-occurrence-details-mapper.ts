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
import { PrismaOccurrenceAttendeesMapper } from './prisma-occurrence-attendee-mapper'

type PrismaOccurrenceDetails = PrismaOccurrence & {
  author: PrismaUser
  teacher: PrismaUser
  attendees: (PrismaOccurrenceAttendee & { attendee: PrismaUser })[]
  students: PrismaStudentWithName[]
  attachments: PrismaAttachment[]
}

export class PrismaOccurrenceDetailsMapper {
  static toDomain(raw: PrismaOccurrenceDetails) {
    return OccurrenceDetails.create({
      occurrenceId: new UniqueEntityID(raw.id),
      authorId: new UniqueEntityID(raw.author.id),
      author: raw.author.name,
      teacherId: new UniqueEntityID(raw.teacher.id),
      teacher: raw.teacher.name,
      attachments: raw.attachments.map(PrismaAttachmentMapper.toDomain),
      students: raw.students.map(PrismaStudentMapper.toDomain),
      attendees: raw.attendees.map(PrismaOccurrenceAttendeesMapper.toDomain),
      createdAt: raw.createdAt,
      description: raw.description,
      title: raw.title,
      type: OccurrenceTypeEnum[raw.type],
    })
  }
}

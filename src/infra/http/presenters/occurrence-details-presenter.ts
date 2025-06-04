import { OccurrenceDetails } from '@/domain/occurrences/enterprise/entities/value-objects/occurrence-details'
import { StudentPresenter } from './student-presenter'
import { AttachmentPresenter } from './attachment-presenter'

export class OccurrenceDetailsPresenter {
  static toHTTP(occurrenceDetails: OccurrenceDetails) {
    return {
      occurrenceId: occurrenceDetails.occurrenceId,
      authorId: occurrenceDetails.authorId,
      author: occurrenceDetails.author,
      teacherId: occurrenceDetails.teacherId,
      teacher: occurrenceDetails.teacher,
      title: occurrenceDetails.title,
      description: occurrenceDetails.description,
      type: occurrenceDetails.type,
      students: occurrenceDetails.students.map(StudentPresenter.toHTTP),
      attendees: occurrenceDetails.attendees,
      attachments: occurrenceDetails.attachments.map(
        AttachmentPresenter.toHTTP
      ),
      createdAt: occurrenceDetails.createdAt,
    }
  }
}

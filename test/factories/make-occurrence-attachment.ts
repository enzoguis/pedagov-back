import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  OccurrenceAttachment,
  OccurrenceAttachmentProps,
} from '@/domain/occurrences/enterprise/entities/occurrence-attachment'

export function makeOccurrenceAttachment(
  override: Partial<OccurrenceAttachmentProps> = {},
  id?: UniqueEntityID
) {
  const occurrenceAttachment = OccurrenceAttachment.create(
    {
      attachmentId: new UniqueEntityID(),
      occurrenceId: new UniqueEntityID(),
      ...override,
    },
    id
  )

  return occurrenceAttachment
}

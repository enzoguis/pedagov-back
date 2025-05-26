import { Entity } from '@/core/entities/entitity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface OccurrenceAttachmentProps {
  occurrenceId: UniqueEntityID
  attachmentId: UniqueEntityID
}

export class OccurrenceAttachment extends Entity<OccurrenceAttachmentProps> {
  get occurrenceId() {
    return this.props.occurrenceId
  }
  get attachmentId() {
    return this.props.attachmentId
  }

  static create(props: OccurrenceAttachmentProps, id?: UniqueEntityID) {
    const occurrenceAttachment = new OccurrenceAttachment(props, id)

    return occurrenceAttachment
  }
}

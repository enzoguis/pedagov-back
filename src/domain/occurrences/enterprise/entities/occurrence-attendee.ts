import { Entity } from '@/core/entities/entitity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface OccurrenceAttendeeProps {
  occurrenceId: UniqueEntityID
  attendeeId: UniqueEntityID
}

export class OccurrenceAttendee extends Entity<OccurrenceAttendeeProps> {
  get occurrenceId() {
    return this.props.occurrenceId
  }

  get attendeeId() {
    return this.props.attendeeId
  }

  static create(props: OccurrenceAttendeeProps, id?: UniqueEntityID) {
    const occurrenceAttendee = new OccurrenceAttendee(props, id)

    return occurrenceAttendee
  }
}

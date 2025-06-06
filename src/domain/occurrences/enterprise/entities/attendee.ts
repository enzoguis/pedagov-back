import { Entity } from '@/core/entities/entitity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface AttendeeProps {
  name: string
}

export class Attendee extends Entity<AttendeeProps> {
  get name() {
    return this.props.name
  }

  set name(name: string) {
    this.props.name = name
  }

  static create(props: AttendeeProps, id?: UniqueEntityID) {
    const attendee = new Attendee(props, id)

    return attendee
  }
}

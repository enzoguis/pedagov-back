import { AggregateRoot } from '@/core/entities/aggregate-root'
import { Entity } from '@/core/entities/entitity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { PedagogueCreatedEvent } from '../events/pedagogue-created-event'

export interface PedagogueProps {
  name: string
}

export class Pedagogue extends AggregateRoot<PedagogueProps> {
  get name() {
    return this.props.name
  }

  set name(name: string) {
    this.props.name = name
  }

  static create(props: PedagogueProps, id?: UniqueEntityID) {
    const pedagogue = new Pedagogue(props, id)

    const isNewPedagogue = !id

    if (isNewPedagogue) {
      pedagogue.addDomainEvent(new PedagogueCreatedEvent(pedagogue))
    }

    return pedagogue
  }
}

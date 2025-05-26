import { AggregateRoot } from '@/core/entities/aggregate-root'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { PedagogueCreatedEvent } from '../events/pedagogue-created-event'

export enum PedagogueRoleEnum {
  ADMIN = 'ADMIN',
  COMMON = 'COMMON',
}

export type PedagogueRoleType = keyof typeof PedagogueRoleEnum

export interface PedagogueProps {
  name: string
  role: PedagogueRoleEnum
}

export class Pedagogue extends AggregateRoot<PedagogueProps> {
  get name() {
    return this.props.name
  }

  get role() {
    return this.props.role
  }

  set name(name: string) {
    this.props.name = name
  }

  set role(role: PedagogueRoleEnum) {
    this.props.role = role
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

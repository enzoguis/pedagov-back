import { AggregateRoot } from '@/core/entities/aggregate-root'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'
import { PedagogueRoleEnum } from '../pedagogue'
import { ValueObject } from '@/core/entities/value-object'

export interface PedagogueWithEmailProps {
  pedagogueId: UniqueEntityID
  name: string
  email: string
  status: UserStatusEnum
  role: PedagogueRoleEnum
}

export class PedagogueWithEmail extends ValueObject<PedagogueWithEmailProps> {
  get pedagogueId() {
    return this.props.pedagogueId
  }

  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get status() {
    return this.props.status
  }

  get role() {
    return this.props.role
  }

  set name(name: string) {
    this.props.name = name
  }

  set status(status: UserStatusEnum) {
    this.props.status = status
  }

  set role(role: PedagogueRoleEnum) {
    this.props.role = role
  }

  static create(props: PedagogueWithEmailProps) {
    const pedagogue = new PedagogueWithEmail(props)

    return pedagogue
  }
}

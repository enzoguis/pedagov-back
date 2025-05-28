import { Entity } from '@/core/entities/entitity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface UserProps {
  email?: string | null
  password?: string | null
  temporaryPassword?: string | null
}

export class User extends Entity<UserProps> {
  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  get temporaryPassword() {
    return this.props.temporaryPassword
  }

  set temporaryPassword(newPassword: string | null | undefined) {
    this.props.temporaryPassword = newPassword
  }

  set password(password: string | null | undefined) {
    this.props.password = password
  }

  static create(props: UserProps, id?: UniqueEntityID) {
    const user = new User(props, id)

    return user
  }
}

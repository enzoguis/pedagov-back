import { Entity } from '@/core/entities/entitity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface UserProps {
  email: string
  password: string
  temporaryPassword?: string
}

export class User extends Entity<UserProps> {
  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  get temporaryPassword() {
    return this.props.temporaryPassword ?? ''
  }

  set temporaryPassword(newPassword: string) {
    this.props.temporaryPassword = newPassword
  }

  set password(password: string) {
    this.props.password = password
  }

  static create(props: UserProps, id?: UniqueEntityID) {
    const user = new User(props, id)

    return user
  }
}

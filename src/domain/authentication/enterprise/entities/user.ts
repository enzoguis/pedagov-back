import { Entity } from '@/core/entities/entitity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export enum UserStatusEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  COMMON = 'COMMON',
}

export type UserStatusType = keyof typeof UserStatusEnum
export type UserRoleEnumType = keyof typeof UserRoleEnum

export interface UserProps {
  role: UserRoleEnum
  status: UserStatusEnum
  avatar?: string | null
  email?: string | null
  password?: string | null
  temporaryPassword?: string | null
}

export class User extends Entity<UserProps> {
  get role() {
    return this.props.role
  }

  get status() {
    return this.props.status
  }

  get avatar() {
    return this.props.avatar
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  get temporaryPassword() {
    return this.props.temporaryPassword
  }

  set status(status: UserStatusEnum) {
    this.props.status = status
  }

  set role(role: UserRoleEnum) {
    this.props.role = role
  }

  set avatar(avatar: string | null | undefined) {
    this.props.avatar = avatar
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

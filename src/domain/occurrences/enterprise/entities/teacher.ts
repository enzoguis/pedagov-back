import { Entity } from '@/core/entities/entitity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'

export interface TeacherProps {
  avatar?: string
  name: string
  status: UserStatusEnum
}

export class Teacher extends Entity<TeacherProps> {
  get avatar() {
    return this.props.avatar
  }

  get name() {
    return this.props.name
  }

  get status() {
    return this.props.status
  }

  set name(name: string) {
    this.props.name = name
  }

  set status(status: UserStatusEnum) {
    this.props.status = status
  }

  static create(props: TeacherProps, id?: UniqueEntityID) {
    const teacher = new Teacher(props, id)

    return teacher
  }
}

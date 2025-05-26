import { Entity } from '@/core/entities/entitity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export enum TeacherStatusEnum {
  ACTIVE = 'active',
  INACTIVED = 'inactived',
}

export type TeacherStatusType = keyof typeof TeacherStatusEnum

export interface TeacherProps {
  name: string
  status: TeacherStatusEnum
}

export class Teacher extends Entity<TeacherProps> {
  get name() {
    return this.props.name
  }

  get status() {
    return this.props.status
  }

  set name(name: string) {
    this.props.name = name
  }

  set status(status: TeacherStatusEnum) {
    this.props.status = status
  }

  static create(props: TeacherProps, id?: UniqueEntityID) {
    const teacher = new Teacher(props, id)

    return teacher
  }
}

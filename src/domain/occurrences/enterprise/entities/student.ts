import { Entity } from '@/core/entities/entitity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { CPF } from './value-objects/cpf'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'

export interface StudentProps {
  name: string
  status: UserStatusEnum
  groupId: UniqueEntityID
  cpf: CPF
  responsiblePhone: string
  responsibleEmail: string
}

export class Student extends Entity<StudentProps> {
  get name() {
    return this.props.name
  }

  get status() {
    return this.props.status
  }

  get groupId() {
    return this.props.groupId
  }

  get cpf() {
    return this.props.cpf
  }

  get responsiblePhone() {
    return this.props.responsiblePhone
  }

  get responsibleEmail() {
    return this.props.responsibleEmail
  }

  set name(name: string) {
    this.props.name = name
  }

  set status(status: UserStatusEnum) {
    this.props.status = status
  }

  set groupId(id: UniqueEntityID) {
    this.props.groupId = id
  }

  set cpf(cpf: CPF) {
    this.props.cpf = cpf
  }

  set responsiblePhone(responsiblePhone: string) {
    this.props.responsiblePhone = responsiblePhone
  }

  set responsibleEmail(responsibleEmail: string) {
    this.props.responsibleEmail = responsibleEmail
  }

  static create(props: StudentProps, id?: UniqueEntityID) {
    const student = new Student(props, id)

    return student
  }
}

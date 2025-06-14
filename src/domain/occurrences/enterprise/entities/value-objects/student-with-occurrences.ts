import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ValueObject } from '@/core/entities/value-object'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'
import { CPF } from './cpf'
import { Occurrence } from '../occurrence'

export interface StudentWithOccurrencesProps {
  avatar?: string | null
  studentId: UniqueEntityID
  student: string
  cpf: CPF
  groupId: UniqueEntityID
  group: string
  responsibleEmail: string
  responsiblePhone: string
  status: UserStatusEnum
  occurrences: Occurrence[]
}

export class StudentWithOccurrences extends ValueObject<StudentWithOccurrencesProps> {
  get avatar() {
    return this.props.avatar
  }

  get studentId() {
    return this.props.studentId
  }

  get student() {
    return this.props.student
  }

  get groupId() {
    return this.props.groupId
  }

  get group() {
    return this.props.group
  }

  get cpf() {
    return this.props.cpf
  }

  get responsibleEmail() {
    return this.props.responsibleEmail
  }

  get responsiblePhone() {
    return this.props.responsiblePhone
  }

  get status() {
    return this.props.status
  }

  get occurrences() {
    return this.props.occurrences
  }

  static create(props: StudentWithOccurrencesProps) {
    return new StudentWithOccurrences(props)
  }
}

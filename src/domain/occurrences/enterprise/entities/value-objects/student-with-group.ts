import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ValueObject } from '@/core/entities/value-object'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'
import { CPF } from './cpf'

export interface StudentWithGroupProps {
  studentId: UniqueEntityID
  student: string
  groupId: UniqueEntityID
  group: string
  status: UserStatusEnum
  cpf: CPF
}

export class StudentWithGroup extends ValueObject<StudentWithGroupProps> {
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

  get status() {
    return this.props.status
  }

  get cpf() {
    return this.props.cpf
  }

  static create(props: StudentWithGroupProps) {
    return new StudentWithGroup(props)
  }
}

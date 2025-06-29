import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'
import { Student } from '@/domain/occurrences/enterprise/entities/student'
import { CPF } from '@/domain/occurrences/enterprise/entities/value-objects/cpf'
import { StudentWithGroup } from '@/domain/occurrences/enterprise/entities/value-objects/student-with-group'
import {
  Prisma,
  Student as PrismaStudent,
  User as PrismaUser,
  Group as PrismaGroup,
} from '@prisma/client'

export type PrismaStudentWithGroup = PrismaStudent & {
  user: PrismaUser
  group: PrismaGroup
}

export class PrismaStudentWithGroupMapper {
  static toDomain(raw: PrismaStudentWithGroup): StudentWithGroup {
    return StudentWithGroup.create({
      studentId: new UniqueEntityID(raw.userId),
      student: raw.user.name,
      groupId: new UniqueEntityID(raw.groupId),
      group: raw.group.name,
      status: UserStatusEnum[raw.user.status],
      cpf: CPF.create(raw.cpf),
    })
  }
}

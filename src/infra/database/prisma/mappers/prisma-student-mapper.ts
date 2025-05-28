import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Student } from '@/domain/occurrences/enterprise/entities/student'
import { CPF } from '@/domain/occurrences/enterprise/entities/value-objects/cpf'
import {
  Prisma,
  Student as PrismaStudent,
  User as PrismaUser,
} from '@prisma/client'

type PrismaStudentWithName = PrismaStudent & {
  user: PrismaUser
}

export class PrismaStudentMapper {
  static toDomain(raw: PrismaStudentWithName): Student {
    return Student.create(
      {
        groupId: new UniqueEntityID(raw.groupId),
        name: raw.user.name,
        cpf: CPF.create(raw.cpf),
        responsibleEmail: raw.responsibleEmail,
        responsiblePhone: raw.responsiblePhone,
      },
      new UniqueEntityID(raw.userId)
    )
  }

  static toPrisma(student: Student): Prisma.StudentUncheckedCreateInput {
    return {
      userId: student.id.toString(),
      groupId: student.groupId.toString(),
      cpf: student.cpf.value,
      responsibleEmail: student.responsibleEmail,
      responsiblePhone: student.responsiblePhone,
    }
  }
}

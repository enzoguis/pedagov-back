import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  UserRoleEnum,
  UserStatusEnum,
} from '@/domain/authentication/enterprise/entities/user'
import {
  Student,
  StudentProps,
} from '@/domain/occurrences/enterprise/entities/student'
import { CPF } from '@/domain/occurrences/enterprise/entities/value-objects/cpf'
import { PrismaStudentMapper } from '@/infra/database/prisma/mappers/prisma-student-mapper'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { faker } from '@faker-js/faker'
import { Injectable } from '@nestjs/common'

export function makeStudent(
  override: Partial<StudentProps> = {},
  id?: UniqueEntityID
) {
  const student = Student.create(
    {
      name: faker.person.fullName(),
      status: UserStatusEnum.ACTIVE,
      cpf: CPF.create('11505628032'),
      groupId: new UniqueEntityID(faker.string.uuid()),
      responsibleEmail: faker.internet.email(),
      responsiblePhone: faker.phone.number(),
      ...override,
    },
    id
  )

  return student
}

@Injectable()
export class StudentFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaStudent(data: Partial<StudentProps> = {}): Promise<Student> {
    const student = makeStudent(data)

    await this.prisma.user.create({
      data: {
        id: student.id.toString(),
        status: student.status,
        role: UserRoleEnum.COMMON,
        name: student.name,
      },
    })

    await this.prisma.student.create({
      data: PrismaStudentMapper.toPrisma(student),
    })

    return student
  }
}

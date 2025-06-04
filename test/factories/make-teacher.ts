import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  UserRoleEnum,
  UserStatusEnum,
} from '@/domain/authentication/enterprise/entities/user'
import {
  Teacher,
  TeacherProps,
} from '@/domain/occurrences/enterprise/entities/teacher'
import { CPF } from '@/domain/occurrences/enterprise/entities/value-objects/cpf'
import { PrismaTeacherMapper } from '@/infra/database/prisma/mappers/prisma-teacher-mapper'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { faker } from '@faker-js/faker'
import { Injectable } from '@nestjs/common'

export function makeTeacher(
  override: Partial<TeacherProps> = {},
  id?: UniqueEntityID
) {
  const teacher = Teacher.create(
    {
      name: faker.person.fullName(),
      status: UserStatusEnum.ACTIVE,
      ...override,
    },
    id
  )

  return teacher
}

@Injectable()
export class TeacherFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaTeacher(data: Partial<TeacherProps> = {}): Promise<Teacher> {
    const teacher = makeTeacher(data)

    await this.prisma.user.create({
      data: {
        id: teacher.id.toString(),
        status: teacher.status,
        role: UserRoleEnum.COMMON,
        name: teacher.name,
      },
    })

    await this.prisma.teacher.create({
      data: PrismaTeacherMapper.toPrisma(teacher),
    })

    return teacher
  }
}

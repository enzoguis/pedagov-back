import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { UserRoleEnum } from '@/domain/authentication/enterprise/entities/user'
import {
  Teacher,
  TeacherProps,
  TeacherStatusEnum,
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
      status: TeacherStatusEnum.ACTIVE,
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

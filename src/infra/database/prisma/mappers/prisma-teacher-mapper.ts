import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'
import { Teacher } from '@/domain/occurrences/enterprise/entities/teacher'
import {
  Prisma,
  Teacher as PrismaTeacher,
  User as PrismaUser,
} from '@prisma/client'

type PrismaTeacherWithName = PrismaTeacher & {
  user: PrismaUser
}

export class PrismaTeacherMapper {
  static toDomain(raw: PrismaTeacherWithName): Teacher {
    return Teacher.create(
      {
        name: raw.user.name,
        status: UserStatusEnum[raw.user.status],
      },
      new UniqueEntityID(raw.userId)
    )
  }

  static toPrisma(teacher: Teacher): Prisma.TeacherUncheckedCreateInput {
    return {
      userId: teacher.id.toString(),
    }
  }
}

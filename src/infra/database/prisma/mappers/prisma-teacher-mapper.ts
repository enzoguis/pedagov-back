import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Teacher,
  TeacherStatusEnum,
} from '@/domain/occurrences/enterprise/entities/teacher'
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
        status: TeacherStatusEnum[raw.status],
      },
      new UniqueEntityID(raw.userId)
    )
  }

  static toPrisma(teacher: Teacher): Prisma.TeacherUncheckedCreateInput {
    const id = new UniqueEntityID()

    return {
      id: id.toString(),
      userId: teacher.id.toString(),
      status: teacher.status,
    }
  }
}

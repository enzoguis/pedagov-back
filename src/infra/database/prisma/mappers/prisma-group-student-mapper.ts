import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { GroupStudent } from '@/domain/occurrences/enterprise/entities/group-student'

import { Prisma, Student as PrismaStudent } from '@prisma/client'

export class PrismaGroupStudentMapper {
  static toDomain(raw: PrismaStudent): GroupStudent {
    return GroupStudent.create({
      groupId: new UniqueEntityID(raw.id),
      studentId: new UniqueEntityID(raw.userId),
    })
  }

  static toPrisma(groupStudents: GroupStudent[]): Prisma.StudentUpdateManyArgs {
    const studentsIds = groupStudents.map((student) =>
      student.studentId.toString()
    )

    return {
      where: {
        id: {
          in: studentsIds,
        },
      },
      data: {
        groupId: groupStudents[0].groupId.toString(),
      },
    }
  }
}

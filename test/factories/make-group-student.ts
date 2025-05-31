import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  GroupStudent,
  GroupStudentProps,
} from '@/domain/occurrences/enterprise/entities/group-student'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

export function makeGroupStudent(
  override: Partial<GroupStudentProps> = {},
  id?: UniqueEntityID
) {
  const groupstudent = GroupStudent.create(
    {
      groupId: new UniqueEntityID(),
      studentId: new UniqueEntityID(),
      ...override,
    },
    id
  )

  return groupstudent
}

@Injectable()
export class GroupStudentFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaGroupStudent(
    data: Partial<GroupStudentProps> = {}
  ): Promise<GroupStudent> {
    const groupStudent = makeGroupStudent(data)

    await this.prisma.student.update({
      where: {
        userId: groupStudent.studentId.toString(),
      },
      data: {
        groupId: groupStudent.groupId.toString(),
      },
    })

    return groupStudent
  }
}

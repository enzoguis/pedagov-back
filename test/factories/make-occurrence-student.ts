import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  OccurrenceStudent,
  OccurrenceStudentProps,
} from '@/domain/occurrences/enterprise/entities/occurrence-student'

import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

export function makeOccurrenceStudent(
  override: Partial<OccurrenceStudentProps> = {},
  id?: UniqueEntityID
) {
  const occurrenceStudent = OccurrenceStudent.create(
    {
      occurrenceId: new UniqueEntityID(),
      studentId: new UniqueEntityID(),
      ...override,
    },
    id
  )

  return occurrenceStudent
}

@Injectable()
export class OccurrenceStudentFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaOccurrenceStudent(
    data: Partial<OccurrenceStudentProps> = {}
  ): Promise<OccurrenceStudent> {
    const occurrenceStudent = makeOccurrenceStudent(data)

    await this.prisma.occurrenceStudents.create({
      data: {
        occurrenceId: occurrenceStudent.occurrenceId.toString(),
        studentId: occurrenceStudent.studentId.toString(),
      },
    })

    return occurrenceStudent
  }
}

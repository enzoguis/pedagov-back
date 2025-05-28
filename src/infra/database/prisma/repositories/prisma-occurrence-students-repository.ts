import { OccurrenceStudentsRepository } from '@/domain/occurrences/application/repositories/occurrence-student-repository'
import { OccurrenceStudent } from '@/domain/occurrences/enterprise/entities/occurrence-student'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaOccurrenceStudentsMapper } from '../mappers/prisma-occurrence-student-mapper'

@Injectable()
export class PrismaOccurrenceStudentsRepository
  implements OccurrenceStudentsRepository
{
  constructor(private prisma: PrismaService) {}

  async createMany(students: OccurrenceStudent[]) {
    if (students.length === 0) {
      return
    }

    const data = PrismaOccurrenceStudentsMapper.toPrisma(students)

    await this.prisma.occurrenceStudents.updateMany(data)
  }

  async deleteMany(students: OccurrenceStudent[]) {
    if (students.length === 0) {
      return
    }

    const studentsIds = students.map((attachment) => attachment.id.toString())

    await this.prisma.occurrenceStudents.deleteMany({
      where: {
        studentId: {
          in: studentsIds,
        },
      },
    })
  }

  async findManyByOccurrenceId(
    occurrenceId: string
  ): Promise<OccurrenceStudent[]> {
    const occurrenceStudents = await this.prisma.occurrenceStudents.findMany({
      where: {
        occurrenceId,
      },
    })

    return occurrenceStudents.map(PrismaOccurrenceStudentsMapper.toDomain)
  }
}

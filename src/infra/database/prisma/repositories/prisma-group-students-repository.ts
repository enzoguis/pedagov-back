import { GroupStudentsRepository } from '@/domain/occurrences/application/repositories/group-student-repository'
import { GroupStudent } from '@/domain/occurrences/enterprise/entities/group-student'
import { PrismaGroupStudentMapper } from '../mappers/prisma-group-student-mapper'
import { PrismaService } from '../prisma.service'

export class PrismaGroupStudentsRepository implements GroupStudentsRepository {
  constructor(private prisma: PrismaService) {}

  async createMany(students: GroupStudent[]): Promise<void> {
    if (students.length === 0) {
      return
    }

    const data = PrismaGroupStudentMapper.toPrisma(students)

    await this.prisma.student.updateMany(data)
  }

  async deleteMany(students: GroupStudent[]): Promise<void> {
    if (students.length === 0) {
      return
    }

    const studentsIds = students.map((student) => student.studentId.toString())

    await this.prisma.student.deleteMany({
      where: {
        id: {
          in: studentsIds,
        },
      },
    })
  }

  async findManyByGroupId(groupId: string): Promise<GroupStudent[]> {
    const students = await this.prisma.student.findMany({
      where: {
        groupId,
      },
    })
    return students.map(PrismaGroupStudentMapper.toDomain)
  }
}

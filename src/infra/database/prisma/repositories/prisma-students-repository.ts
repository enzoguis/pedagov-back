import { StudentsRepository } from '@/domain/occurrences/application/repositories/students-repository'
import { Student } from '@/domain/occurrences/enterprise/entities/student'
import { PrismaStudentMapper } from '../mappers/prisma-student-mapper'
import { PrismaService } from '../prisma.service'
import { Injectable } from '@nestjs/common'
import { UserRoleEnum } from '@/domain/authentication/enterprise/entities/user'
import { StudentWithOccurrences } from '@/domain/occurrences/enterprise/entities/value-objects/student-with-occurrences'
import { PrismaStudentWithOccurrencesMapper } from '../mappers/prisma-student-with-occurrences-mapper'
import { PaginationParams } from '@/core/repositories/pagination-params'

@Injectable()
export class PrismaStudentsRepository implements StudentsRepository {
  constructor(private prisma: PrismaService) {}
  async findAll(): Promise<Student[]> {
    const students = await this.prisma.student.findMany({
      include: {
        user: true,
      },
    })

    return students.map(PrismaStudentMapper.toDomain)
  }

  async create(student: Student): Promise<void> {
    const userData = {
      id: student.id.toString(),
      status: student.status,
      role: UserRoleEnum.COMMON,
      name: student.name,
    }

    const studentData = PrismaStudentMapper.toPrisma(student)

    await this.prisma.$transaction([
      this.prisma.user.create({ data: userData }),
      this.prisma.student.create({ data: studentData }),
    ])
  }

  async save(student: Student) {
    const userUpdate = this.prisma.user.update({
      where: {
        id: student.id.toString(),
      },
      data: {
        name: student.name,
      },
    })

    const studentUpdate = this.prisma.student.update({
      where: {
        userId: student.id.toString(),
      },
      data: PrismaStudentMapper.toPrisma(student),
    })

    await this.prisma.$transaction([userUpdate, studentUpdate])
  }

  async findById(id: string) {
    const student = await this.prisma.student.findUnique({
      where: {
        userId: id,
      },
      include: {
        user: true,
      },
    })

    if (!student) {
      return null
    }

    return PrismaStudentMapper.toDomain(student)
  }

  async findWithOccurrences(
    id: string
  ): Promise<StudentWithOccurrences | null> {
    const student = await this.prisma.student.findUnique({
      where: {
        userId: id,
      },
      include: {
        occurrences: {
          include: {
            occurrence: true,
          },
        },
        group: true,
        user: true,
      },
    })

    if (!student) {
      return null
    }

    return PrismaStudentWithOccurrencesMapper.toDomain(student)
  }

  async findManyByIds(ids: string[]) {
    const students = await this.prisma.student.findMany({
      where: {
        userId: {
          in: ids,
        },
      },
      include: {
        user: true,
      },
    })

    return students.map(PrismaStudentMapper.toDomain)
  }

  async findByCPF(cpf: string): Promise<Student | null> {
    const student = await this.prisma.student.findUnique({
      where: {
        cpf,
      },
      include: {
        user: true,
      },
    })

    if (!student) {
      return null
    }

    return PrismaStudentMapper.toDomain(student)
  }

  async delete(student: Student): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id: student.id.toString(),
      },
    })
  }
}

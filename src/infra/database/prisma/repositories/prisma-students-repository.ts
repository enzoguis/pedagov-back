import { StudentsRepository } from '@/domain/occurrences/application/repositories/students-repository'
import { Student } from '@/domain/occurrences/enterprise/entities/student'
import { PrismaStudentMapper } from '../mappers/prisma-student-mapper'
import { PrismaService } from '../prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaStudentsRepository implements StudentsRepository {
  constructor(private prisma: PrismaService) {}

  async create(student: Student): Promise<void> {
    const data = PrismaStudentMapper.toPrisma(student)

    await this.prisma.student.create({ data })
  }

  async save(student: Student) {
    const data = PrismaStudentMapper.toPrisma(student)

    await this.prisma.student.update({
      where: {
        userId: student.id.toString(),
      },
      data,
    })
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

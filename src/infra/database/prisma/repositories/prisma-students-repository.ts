import { StudentsRepository } from '@/domain/occurrences/application/repositories/students-repository'
import { Student } from '@/domain/occurrences/enterprise/entities/student'
import { PrismaStudentMapper } from '../mappers/prisma-student-mapper'
import { PrismaService } from '../prisma.service'

export class PrismaStudentsRepository implements StudentsRepository {
  constructor(private prisma: PrismaService) {}

  async create(student: Student): Promise<void> {
    const data = PrismaStudentMapper.toPrisma(student)

    await this.prisma.student.create({ data })
  }

  save(student: Student): Promise<void> {
    throw new Error('Method not implemented.')
  }

  findById(id: string): Promise<Student | null> {
    throw new Error('Method not implemented.')
  }

  findManyByIds(ids: string[]): Promise<Student[]> {
    throw new Error('Method not implemented.')
  }

  findByCPF(cpf: string): Promise<Student | null> {
    throw new Error('Method not implemented.')
  }

  delete(student: Student): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

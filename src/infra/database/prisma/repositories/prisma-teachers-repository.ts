import { TeachersRepository } from '@/domain/occurrences/application/repositories/teachers-repository'
import { Teacher } from '@/domain/occurrences/enterprise/entities/teacher'
import { Injectable } from '@nestjs/common'
import { PrismaTeacherMapper } from '../mappers/prisma-teacher-mapper'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaTeachersRepository implements TeachersRepository {
  constructor(private prisma: PrismaService) {}

  async create(teacher: Teacher): Promise<void> {
    const userData = {
      id: teacher.id.toString(),
      name: teacher.name,
    }

    const teacherData = PrismaTeacherMapper.toPrisma(teacher)

    await this.prisma.$transaction([
      this.prisma.user.create({ data: userData }),
      this.prisma.teacher.create({ data: teacherData }),
    ])
  }

  async save(teacher: Teacher): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async findById(id: string): Promise<Teacher | null> {
    throw new Error('Method not implemented.')
  }

  async delete(teacher: Teacher): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

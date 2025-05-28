import { TeachersRepository } from '@/domain/occurrences/application/repositories/teachers-repository'
import { Teacher } from '@/domain/occurrences/enterprise/entities/teacher'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaTeachersRepository implements TeachersRepository {
  create(teacher: Teacher): Promise<void> {
    throw new Error('Method not implemented.')
  }
  save(teacher: Teacher): Promise<void> {
    throw new Error('Method not implemented.')
  }
  findById(id: string): Promise<Teacher | null> {
    throw new Error('Method not implemented.')
  }
  delete(teacher: Teacher): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

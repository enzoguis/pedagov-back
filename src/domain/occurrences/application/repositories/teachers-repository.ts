import { PaginationParams } from '@/core/repositories/pagination-params'
import { Teacher } from '@/domain/occurrences/enterprise/entities/teacher'

export abstract class TeachersRepository {
  abstract create(teacher: Teacher): Promise<void>
  abstract save(teacher: Teacher): Promise<void>
  abstract findById(id: string): Promise<Teacher | null>
  abstract findAll(params: PaginationParams): Promise<Teacher[]>
  abstract delete(teacher: Teacher): Promise<void>
}

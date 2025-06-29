import { Student } from '@/domain/occurrences/enterprise/entities/student'
import { StudentWithOccurrences } from '../../enterprise/entities/value-objects/student-with-occurrences'
import { PaginationParams } from '@/core/repositories/pagination-params'

export abstract class StudentsRepository {
  abstract create(student: Student): Promise<void>
  abstract save(student: Student): Promise<void>
  abstract findById(id: string): Promise<Student | null>
  abstract findWithOccurrences(
    id: string
  ): Promise<StudentWithOccurrences | null>
  abstract findManyByIds(ids: string[]): Promise<Student[]>
  abstract findByCPF(cpf: string): Promise<Student | null>
  abstract findAll(): Promise<Student[]>
  abstract delete(student: Student): Promise<void>
}

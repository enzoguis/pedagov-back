import { Student } from '@/domain/occurrences/enterprise/entities/student'

export abstract class StudentsRepository {
  abstract create(student: Student): Promise<void>
  abstract save(student: Student): Promise<void>
  abstract findById(id: string): Promise<Student | null>
  abstract findManyByIds(ids: string[]): Promise<Student[]>
  abstract findByCPF(cpf: string): Promise<Student | null>
  abstract delete(student: Student): Promise<void>
}

import { StudentsRepository } from '@/domain/occurrences/application/repositories/students-repository'
import { Student } from '@/domain/occurrences/enterprise/entities/student'
import { CPF } from '@/domain/occurrences/enterprise/entities/value-objects/cpf'

export class InMemoryStudentsRepository implements StudentsRepository {
  public items: Student[] = []

  async findByCPF(cpf: string): Promise<Student | null> {
    const formattedCpf = CPF.create(cpf)

    const student = this.items.find((item) => item.cpf.equals(formattedCpf))

    if (!student) {
      return null
    }

    return student
  }

  async create(student: Student): Promise<void> {
    this.items.push(student)
  }

  async save(student: Student): Promise<void> {
    const index = this.items.findIndex((item) => item.id === student.id)

    this.items[index] = student
  }

  async findById(id: string): Promise<Student | null> {
    const student = this.items.find((item) => item.id.toString() === id)

    if (!student) {
      return null
    }

    return student
  }

  async findManyByIds(ids: string[]): Promise<Student[]> {
    return this.items.filter((student) => ids.includes(student.id.toString()))
  }

  async delete(student: Student): Promise<void> {
    this.items = this.items.filter(
      (item) => item.id.toString() !== student.id.toString()
    )
  }
}

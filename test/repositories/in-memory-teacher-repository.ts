import { TeachersRepository } from '@/domain/occurrences/application/repositories/teachers-repository'
import { Teacher } from '@/domain/occurrences/enterprise/entities/teacher'

export class InMemoryTeachersRepository implements TeachersRepository {
  async findAll(): Promise<Teacher[]> {
    return this.items
  }
  public items: Teacher[] = []

  async create(teacher: Teacher): Promise<void> {
    this.items.push(teacher)
  }
  async save(teacher: Teacher): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.id === teacher.id)
    this.items[itemIndex] = teacher
  }
  async findById(id: string): Promise<Teacher | null> {
    const teacher = this.items.find((item) => item.id.toString() === id)

    if (!teacher) {
      return null
    }

    return teacher
  }
  async delete(teacher: Teacher): Promise<void> {
    this.items = this.items.filter(
      (item) => item.id.toString() !== teacher.id.toString()
    )
  }
}

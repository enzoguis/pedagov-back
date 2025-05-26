import { PaginationParams } from '@/core/repositories/pagination-params'
import { GroupsRepository } from '@/domain/occurrences/application/repositories/groups-repository'
import { Group } from '@/domain/occurrences/enterprise/entities/group'
import { InMemoryGroupStudentRepository } from './in-memory-group-student-repository'

export class InMemoryGroupsRepository implements GroupsRepository {
  public items: Group[] = []

  constructor(private groupStudentRepository: InMemoryGroupStudentRepository) {}

  async create(group: Group) {
    this.items.push(group)

    await this.groupStudentRepository.createMany(group.students.getItems())
  }

  async findAll({ page }: PaginationParams) {
    const groups = this.items.slice((page - 1) * 20, page * 20)

    return groups
  }

  async save(group: Group) {
    const itemIndex = this.items.findIndex((item) => item.id === group.id)

    if (itemIndex >= 0) {
      this.items[itemIndex] = group
    }

    await this.groupStudentRepository.createMany(group.students.getNewItems())

    await this.groupStudentRepository.deleteMany(
      group.students.getRemovedItems()
    )
  }

  async findById(id: string) {
    const group = this.items.find((item) => item.id.toString() === id)

    if (!group) {
      return null
    }

    return group
  }

  async findManyByShift(shift: string): Promise<Group[]> {
    return this.items.filter((group) => group.shift === shift)
  }

  async delete(group: Group): Promise<void> {
    this.items = this.items.filter(
      (item) => item.id.toString() !== group.id.toString()
    )
  }
}

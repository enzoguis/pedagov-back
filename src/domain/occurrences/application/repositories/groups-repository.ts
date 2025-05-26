import { PaginationParams } from '@/core/repositories/pagination-params'
import { Group } from '@/domain/occurrences/enterprise/entities/group'

export abstract class GroupsRepository {
  abstract create(group: Group): Promise<void>
  abstract save(group: Group): Promise<void>
  abstract findById(id: string): Promise<Group | null>
  abstract findManyByShift(shift: string): Promise<Group[]>
  abstract findAll(params: PaginationParams): Promise<Group[]>
  abstract delete(group: Group): Promise<void>
}

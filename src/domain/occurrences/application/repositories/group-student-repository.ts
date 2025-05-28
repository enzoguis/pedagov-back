import { GroupStudent } from '@/domain/occurrences/enterprise/entities/group-student'

export abstract class GroupStudentsRepository {
  abstract createMany(students: GroupStudent[]): Promise<void>
  abstract deleteMany(students: GroupStudent[]): Promise<void>
  abstract findManyByGroupId(groupId: string): Promise<GroupStudent[]>
}

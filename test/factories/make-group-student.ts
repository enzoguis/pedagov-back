import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  GroupStudent,
  GroupStudentProps,
} from '@/domain/occurrences/enterprise/entities/group-student'

export function makeGroupStudent(
  override: Partial<GroupStudentProps> = {},
  id?: UniqueEntityID
) {
  const groupstudent = GroupStudent.create(
    {
      groupId: new UniqueEntityID(),
      studentId: new UniqueEntityID(),
      ...override,
    },
    id
  )

  return groupstudent
}

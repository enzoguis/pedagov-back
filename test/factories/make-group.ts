import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Group,
  GroupProps,
  GroupShiftsEnum,
} from '@/domain/occurrences/enterprise/entities/group'
import { faker } from '@faker-js/faker'

export function makeGroup(
  override: Partial<GroupProps> = {},
  id?: UniqueEntityID
) {
  const group = Group.create(
    {
      name: faker.lorem.sentence(),
      shift: GroupShiftsEnum.AFTERNOON,
      teacherId: new UniqueEntityID(),
      ...override,
    },
    id
  )

  return group
}

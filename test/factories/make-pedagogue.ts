import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Pedagogue,
  PedagogueProps,
} from '@/domain/occurrences/enterprise/entities/pedagogue'
import { faker } from '@faker-js/faker'

export function makePedagogue(
  override: Partial<PedagogueProps> = {},
  id?: UniqueEntityID
) {
  const pedagogue = Pedagogue.create(
    {
      name: faker.person.fullName(),
      ...override,
    },
    id
  )

  return pedagogue
}

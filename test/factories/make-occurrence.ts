import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Occurrence,
  OccurrenceProps,
  OccurrenceTypeEnum,
} from '@/domain/occurrences/enterprise/entities/occurrence'

import { faker } from '@faker-js/faker'

export function makeOccurrence(
  override: Partial<OccurrenceProps> = {},
  id?: UniqueEntityID
) {
  const occurrence = Occurrence.create(
    {
      authorId: new UniqueEntityID(),
      description: faker.lorem.sentence(),
      teacherId: new UniqueEntityID(),
      type: OccurrenceTypeEnum.ABSENCES,
      title: faker.lorem.sentence(),
      ...override,
    },
    id
  )

  return occurrence
}

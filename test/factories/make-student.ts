import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Student,
  StudentProps,
} from '@/domain/occurrences/enterprise/entities/student'
import { CPF } from '@/domain/occurrences/enterprise/entities/value-objects/cpf'
import { faker } from '@faker-js/faker'

export function makeStudent(
  override: Partial<StudentProps> = {},
  id?: UniqueEntityID
) {
  const student = Student.create(
    {
      name: faker.person.fullName(),
      cpf: CPF.create('11505628032'),
      groupId: new UniqueEntityID(faker.string.uuid()),
      responsibleEmail: faker.internet.email(),
      responsiblePhone: faker.phone.number(),
      ...override,
    },
    id
  )

  return student
}

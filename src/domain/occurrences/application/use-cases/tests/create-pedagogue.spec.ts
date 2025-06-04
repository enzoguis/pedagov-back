import { InMemoryPedagoguesRepository } from 'test/repositories/in-memory-pedagogues-repository'
import { CreatePedagogueUseCase } from '../create-pedagogue'
import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import { makePedagogue } from 'test/factories/make-pedagogue'
import { makeUser } from 'test/factories/make-user'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { PedagogueAlreadyExistsError } from '../errors/pedagogue-already-exists-error'

let inMemoryPedagoguesRepository: InMemoryPedagoguesRepository
let inMemoryUsersRepository: InMemoryUsersRepository
let sut: CreatePedagogueUseCase

describe('Create Pedagogue Use Case', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    inMemoryPedagoguesRepository = new InMemoryPedagoguesRepository(
      inMemoryUsersRepository
    )
    sut = new CreatePedagogueUseCase(inMemoryPedagoguesRepository)
  })

  it('should be able to create a new pedagogue', async () => {
    const result = await sut.execute({
      email: 'pedagogue@example.com',
      status: 'ACTIVE',
      name: 'pedagogue',
      role: 'COMMON',
    })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryPedagoguesRepository.items).toHaveLength(1)
    expect(inMemoryPedagoguesRepository.items[0].role).toBe('COMMON')
  })

  it('should not be able to create a new pedagogue with an existing email', async () => {
    await inMemoryUsersRepository.create(
      makeUser({ email: 'pedagogue@example.com' }, new UniqueEntityID('user-1'))
    )

    await inMemoryPedagoguesRepository.create(
      makePedagogue({}, new UniqueEntityID('user-1'))
    )

    const result = await sut.execute({
      email: 'pedagogue@example.com',
      status: 'ACTIVE',
      name: 'pedagogue',
      role: 'COMMON',
    })

    expect(result.isLeft()).toBeTruthy()
    expect(result.value).toBeInstanceOf(PedagogueAlreadyExistsError)
  })
})

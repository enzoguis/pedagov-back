import { InMemoryPedagoguesRepository } from 'test/repositories/in-memory-pedagogues-repository'
import { CreatePedagogueUseCase } from '../create-pedagogue'

let inMemoryPedagoguesRepository: InMemoryPedagoguesRepository
let sut: CreatePedagogueUseCase

describe('Create Pedagogue Use Case', () => {
  beforeEach(() => {
    inMemoryPedagoguesRepository = new InMemoryPedagoguesRepository()
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
})

import { InMemoryPedagoguesRepository } from 'test/repositories/in-memory-pedagogues-repository'
import { makePedagogue } from 'test/factories/make-pedagogue'
import { DeletePedagogueUseCase } from '../delete-pedagogue'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
let inMemoryPedagoguesRepository: InMemoryPedagoguesRepository
let sut: DeletePedagogueUseCase

describe('Delete Pedagogue Use Case', () => {
  beforeEach(() => {
    inMemoryPedagoguesRepository = new InMemoryPedagoguesRepository()
    sut = new DeletePedagogueUseCase(inMemoryPedagoguesRepository)
  })

  it('should be able to delete a pedagogue', async () => {
    const pedagogue = await makePedagogue()

    inMemoryPedagoguesRepository.create(pedagogue)

    const pedagogueId = pedagogue.id.toString()

    const result = await sut.execute({ pedagogueId })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryPedagoguesRepository.items).toHaveLength(0)
  })

  it('should not be able to delete a pedagogue without an existing pedagogue', async () => {
    const pedagogue = await makePedagogue({}, new UniqueEntityID('pedagogue-1'))

    inMemoryPedagoguesRepository.create(pedagogue)

    const pedagogueId = 'non-existing-pedagogue'

    const result = await sut.execute({ pedagogueId })

    expect(result.isLeft).toBeTruthy()
    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
    expect(inMemoryPedagoguesRepository.items).toHaveLength(1)
  })
})

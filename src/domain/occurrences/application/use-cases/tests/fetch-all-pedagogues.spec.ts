import { InMemoryPedagoguesRepository } from 'test/repositories/in-memory-pedagogues-repository'
import { FetchAllPedagoguesUseCase } from '../fetch-all-pedagogues'
import { makePedagogue } from 'test/factories/make-pedagogue'
import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'

let inMemoryUsersRepository: InMemoryUsersRepository
let inMemoryPedagoguesRepository: InMemoryPedagoguesRepository
let sut: FetchAllPedagoguesUseCase

describe('Fetch All Pedagogues Use Case', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    inMemoryPedagoguesRepository = new InMemoryPedagoguesRepository(
      inMemoryUsersRepository
    )
    sut = new FetchAllPedagoguesUseCase(inMemoryPedagoguesRepository)
  })

  it('should be able to fetch all existing pedagogues', async () => {
    await inMemoryPedagoguesRepository.create(
      makePedagogue({
        name: 'pedagogue-1',
      })
    )
    await inMemoryPedagoguesRepository.create(
      makePedagogue({
        name: 'pedagogue-2',
      })
    )
    await inMemoryPedagoguesRepository.create(
      makePedagogue({
        name: 'pedagogue-3',
      })
    )

    const result = await sut.execute({})

    expect(result.isRight).toBeTruthy()
    expect(result.value).toEqual({
      pedagogues: expect.arrayContaining([
        expect.objectContaining({
          name: 'pedagogue-1',
        }),
        expect.objectContaining({
          name: 'pedagogue-2',
        }),
        expect.objectContaining({
          name: 'pedagogue-3',
        }),
      ]),
    })
  })
})

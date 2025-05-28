import { InMemoryGroupsRepository } from 'test/repositories/in-memory-groups-repository'
import { FetchAllGroupsUseCase } from '../fetch-all-groups'
import { makeGroup } from 'test/factories/make-group'
import { InMemoryGroupStudentsRepository } from 'test/repositories/in-memory-group-student-repository'
let inMemoryGroupStudentsRepository: InMemoryGroupStudentsRepository
let inMemoryGroupsRepository: InMemoryGroupsRepository
let sut: FetchAllGroupsUseCase

describe('Fetch All Groups Use Case', () => {
  beforeEach(() => {
    inMemoryGroupStudentsRepository = new InMemoryGroupStudentsRepository()
    inMemoryGroupsRepository = new InMemoryGroupsRepository(
      inMemoryGroupStudentsRepository
    )
    sut = new FetchAllGroupsUseCase(inMemoryGroupsRepository)
  })

  it('should be able to fetch all existing groups with pagination', async () => {
    for (let i = 1; i <= 22; i++) {
      await inMemoryGroupsRepository.create(makeGroup())
    }

    const result = await sut.execute({
      page: 2,
    })

    expect(result.isRight).toBeTruthy()
    expect(result.value?.groups).toHaveLength(2)
  })
})

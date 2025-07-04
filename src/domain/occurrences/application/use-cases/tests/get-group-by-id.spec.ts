import { InMemoryGroupsRepository } from 'test/repositories/in-memory-groups-repository'
import { makeGroup } from 'test/factories/make-group'
import { InMemoryGroupStudentsRepository } from 'test/repositories/in-memory-group-student-repository'
import { GetGroupByIdUseCase } from '../get-group-by-id'
let inMemoryGroupStudentsRepository: InMemoryGroupStudentsRepository
let inMemoryGroupsRepository: InMemoryGroupsRepository
let sut: GetGroupByIdUseCase

describe('Edit Group Use Case', () => {
  beforeEach(() => {
    inMemoryGroupStudentsRepository = new InMemoryGroupStudentsRepository()
    inMemoryGroupsRepository = new InMemoryGroupsRepository(
      inMemoryGroupStudentsRepository
    )
    sut = new GetGroupByIdUseCase(inMemoryGroupsRepository)
  })

  it('should be able to edit a group', async () => {
    const group = await makeGroup()
    inMemoryGroupsRepository.create(group)
    inMemoryGroupsRepository.create(makeGroup())

    const result = await sut.execute({
      groupId: group.id.toString(),
    })

    expect(result.isRight()).toBeTruthy()
    expect(result.value).toEqual({
      group: expect.objectContaining({
        name: group.name,
      }),
    })
  })
})

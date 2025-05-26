import { InMemoryGroupsRepository } from 'test/repositories/in-memory-groups-repository'
import { makeGroup } from 'test/factories/make-group'
import { DeleteGroupUseCase } from '../delete-group'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { InMemoryGroupStudentRepository } from 'test/repositories/in-memory-group-student-repository'
let inMemoryGroupStudentRepository: InMemoryGroupStudentRepository
let inMemoryGroupsRepository: InMemoryGroupsRepository
let sut: DeleteGroupUseCase

describe('Delete Group Use Case', () => {
  beforeEach(() => {
    inMemoryGroupStudentRepository = new InMemoryGroupStudentRepository()
    inMemoryGroupsRepository = new InMemoryGroupsRepository(
      inMemoryGroupStudentRepository
    )
    sut = new DeleteGroupUseCase(inMemoryGroupsRepository)
  })

  it('should be able to delete a group', async () => {
    const group = await makeGroup()

    inMemoryGroupsRepository.create(group)

    const groupId = group.id.toString()

    const result = await sut.execute({ groupId })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryGroupsRepository.items).toHaveLength(0)
  })

  it('should not be able to delete a group without an existing group', async () => {
    const group = await makeGroup({}, new UniqueEntityID('group-1'))

    inMemoryGroupsRepository.create(group)

    const groupId = 'non-existing-group'

    const result = await sut.execute({ groupId })

    expect(result.isLeft).toBeTruthy()
    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
    expect(inMemoryGroupsRepository.items).toHaveLength(1)
  })
})

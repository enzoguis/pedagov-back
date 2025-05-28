import { InMemoryGroupsRepository } from 'test/repositories/in-memory-groups-repository'
import { makeGroup } from 'test/factories/make-group'
import { EditGroupUseCase } from '../edit-group'
import { InMemoryGroupStudentsRepository } from 'test/repositories/in-memory-group-student-repository'
import { makeGroupStudent } from 'test/factories/make-group-student'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
let inMemoryGroupStudentsRepository: InMemoryGroupStudentsRepository
let inMemoryGroupsRepository: InMemoryGroupsRepository
let sut: EditGroupUseCase

describe('Edit Group Use Case', () => {
  beforeEach(() => {
    inMemoryGroupStudentsRepository = new InMemoryGroupStudentsRepository()
    inMemoryGroupsRepository = new InMemoryGroupsRepository(
      inMemoryGroupStudentsRepository
    )
    sut = new EditGroupUseCase(
      inMemoryGroupsRepository,
      inMemoryGroupStudentsRepository
    )
  })

  it('should be able to edit a group', async () => {
    const group = await makeGroup({})
    inMemoryGroupsRepository.create(group)

    const groupId = group.id.toString()

    inMemoryGroupStudentsRepository.items.push(
      makeGroupStudent({
        groupId: group.id,
        studentId: new UniqueEntityID('1'),
      })
    )

    const result = await sut.execute({
      groupId,
      name: 'Novo nome',
      shift: 'MORNING',
      studentsIds: ['2'],
      teacherId: group.teacherId.toString(),
    })

    expect(result.isRight()).toBeTruthy()
    expect(inMemoryGroupStudentsRepository.items).toHaveLength(1)
    expect(inMemoryGroupsRepository.items[0].students.currentItems).toEqual([
      expect.objectContaining({
        studentId: new UniqueEntityID('2'),
      }),
    ])
  })
})

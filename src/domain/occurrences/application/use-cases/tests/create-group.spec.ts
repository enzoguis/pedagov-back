import { InMemoryGroupsRepository } from 'test/repositories/in-memory-groups-repository'
import { InMemoryGroupStudentsRepository } from 'test/repositories/in-memory-group-student-repository'
import { CreateGroupUseCase } from '../create-group'
let inMemoryGroupStudentsRepository: InMemoryGroupStudentsRepository
let inMemoryGroupsRepository: InMemoryGroupsRepository
let sut: CreateGroupUseCase

describe('Create Group Use Case', () => {
  beforeEach(() => {
    inMemoryGroupStudentsRepository = new InMemoryGroupStudentsRepository()
    inMemoryGroupsRepository = new InMemoryGroupsRepository(
      inMemoryGroupStudentsRepository
    )
    sut = new CreateGroupUseCase(inMemoryGroupsRepository)
  })

  it('should be able to create a new group without student', async () => {
    const result = await sut.execute({
      name: 'Turma 1',
      shift: 'AFTERNOON',
      studentsIds: [],
      teacherId: '1',
    })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryGroupsRepository.items[0].shift).toBe('AFTERNOON')
  })

  it('should be able to create a group with student', async () => {
    const result = await sut.execute({
      name: 'Turma 1',
      shift: 'AFTERNOON',
      studentsIds: ['1', '2'],
      teacherId: '1',
    })

    expect(result.isRight).toBeTruthy()
    expect(
      inMemoryGroupsRepository.items[0].students.currentItems
    ).toHaveLength(2)
  })
})

import { CreateStudentUseCase } from '../create-student'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
let inMemoryStudentsRepository: InMemoryStudentsRepository
let sut: CreateStudentUseCase

describe('Create Student Use Case', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    sut = new CreateStudentUseCase(inMemoryStudentsRepository)
  })

  it('should be able to create a new student', async () => {
    const result = await sut.execute({
      name: 'John Doe',
      status: 'ACTIVE',
      cpf: '92624103015',
      groupId: '1',
      responsibleEmail: 'johndoe@example.com',
      responsiblePhone: '1234567891011',
    })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryStudentsRepository.items).toHaveLength(1)
    expect(inMemoryStudentsRepository.items[0].responsibleEmail).toBe(
      'johndoe@example.com'
    )
  })
})

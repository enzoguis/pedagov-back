import { InMemoryTeachersRepository } from 'test/repositories/in-memory-teacher-repository'
import { CreateTeacherUseCase } from '../create-teacher'
let inMemoryTeachersRepository: InMemoryTeachersRepository
let sut: CreateTeacherUseCase

describe('Create Teacher Use Case', () => {
  beforeEach(() => {
    inMemoryTeachersRepository = new InMemoryTeachersRepository()
    sut = new CreateTeacherUseCase(inMemoryTeachersRepository)
  })

  it('should be able to create a new teacher', async () => {
    const result = await sut.execute({
      name: 'teacher',
      status: 'ACTIVE',
    })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryTeachersRepository.items).toHaveLength(1)
    expect(inMemoryTeachersRepository.items[0].status).toBe('ACTIVE')
  })
})

import { makeTeacher } from 'test/factories/make-teacher'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { DeleteTeacherUseCase } from '../delete-teacher'
import { InMemoryTeachersRepository } from 'test/repositories/in-memory-teacher-repository'

let inMemoryTeachersRepository: InMemoryTeachersRepository
let sut: DeleteTeacherUseCase

describe('Delete Teacher Use Case', () => {
  beforeEach(() => {
    inMemoryTeachersRepository = new InMemoryTeachersRepository()
    sut = new DeleteTeacherUseCase(inMemoryTeachersRepository)
  })

  it('should be able to delete a teacher', async () => {
    const teacher = await makeTeacher({})

    await inMemoryTeachersRepository.create(teacher)

    const teacherId = teacher.id.toString()

    const result = await sut.execute({ teacherId })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryTeachersRepository.items).toHaveLength(0)
  })

  it('should not be able to delete a teacher without an existing teacher', async () => {
    const teacher = await makeTeacher({}, new UniqueEntityID('teacher-1'))

    inMemoryTeachersRepository.create(teacher)

    const teacherId = 'non-existing-teacher'

    const result = await sut.execute({ teacherId })

    expect(result.isLeft).toBeTruthy()
    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
    expect(inMemoryTeachersRepository.items).toHaveLength(1)
  })
})

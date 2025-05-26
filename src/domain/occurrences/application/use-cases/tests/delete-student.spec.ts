import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { makeStudent } from 'test/factories/make-student'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { DeleteStudentUseCase } from '../delete-student'

let inMemoryStudentsRepository: InMemoryStudentsRepository
let sut: DeleteStudentUseCase

describe('Delete Student Use Case', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    sut = new DeleteStudentUseCase(inMemoryStudentsRepository)
  })

  it('should be able to delete a student', async () => {
    const student = await makeStudent({})

    await inMemoryStudentsRepository.create(student)

    const studentId = student.id.toString()

    const result = await sut.execute({ studentId })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryStudentsRepository.items).toHaveLength(0)
  })

  it('should not be able to delete a student without an existing student', async () => {
    const student = await makeStudent({}, new UniqueEntityID('student-1'))

    inMemoryStudentsRepository.create(student)

    const studentId = 'non-existing-student'

    const result = await sut.execute({ studentId })

    expect(result.isLeft).toBeTruthy()
    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
    expect(inMemoryStudentsRepository.items).toHaveLength(1)
  })
})

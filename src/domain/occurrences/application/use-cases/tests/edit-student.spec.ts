import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { makeStudent } from 'test/factories/make-student'
import { EditStudentUseCase } from '../edit-student'
import { makeGroup } from 'test/factories/make-group'
let inMemoryStudentsRepository: InMemoryStudentsRepository
let sut: EditStudentUseCase

describe('Edit Student Use Case', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    sut = new EditStudentUseCase(inMemoryStudentsRepository)
  })

  it('should be able to edit a student', async () => {
    const student = makeStudent({
      responsibleEmail: 'johndoe@example.com',
    })
    inMemoryStudentsRepository.create(student)

    const group = makeGroup()

    const studentId = student.id.toString()

    const result = await sut.execute({
      studentId,
      cpf: '08495967006',
      groupId: group.id.toString(),
      responsibleEmail: 'resposible@example.com',
      responsiblePhone: '1234567891011',
    })

    expect(result.isRight()).toBeTruthy()
    expect(inMemoryStudentsRepository.items[0].responsibleEmail).toBe(
      'resposible@example.com'
    )
  })
})

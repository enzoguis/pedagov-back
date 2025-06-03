import { InMemoryOccurrencesRepository } from 'test/repositories/in-memory-occurrences-repository'
import { InMemoryOccurrenceStudentsRepository } from 'test/repositories/in-memory-occurrence-students-repository'
import { InMemoryOccurrenceAttendeesRepository } from 'test/repositories/in-memory-occurrence-attendees-repository'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { makeStudent } from 'test/factories/make-student'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { InMemoryOccurrenceAttachmentsRepository } from 'test/repositories/in-memory-occurrence-attachments-repository'
import { makeAttachment } from 'test/factories/make-attachments'
import { InMemoryAttachmentsRepository } from 'test/repositories/in-memory-attachments-repository'
import { InMemoryOccurrenceHistoriesRepository } from 'test/repositories/in-memory-occurrence-histories-repository'
import { EditOccurrenceUseCase } from '../edit-occurrence'
import { makeOccurrence } from 'test/factories/make-occurrence'

let inMemoryOccurrenceHistoriesRepository: InMemoryOccurrenceHistoriesRepository
let inMemoryAttachmentsRepository: InMemoryAttachmentsRepository
let inMemoryStudentsRepository: InMemoryStudentsRepository
let inMemoryOccurrenceStudentsRepository: InMemoryOccurrenceStudentsRepository
let inMemoryOccurrenceAttachmentsRepository: InMemoryOccurrenceAttachmentsRepository
let inMemoryOccurrenceAttendeesRepository: InMemoryOccurrenceAttendeesRepository
let inMemoryOccurrencesRepository: InMemoryOccurrencesRepository
let sut: EditOccurrenceUseCase
describe('Edit Occurrence Use Case', () => {
  beforeEach(() => {
    inMemoryOccurrenceHistoriesRepository =
      new InMemoryOccurrenceHistoriesRepository()
    inMemoryAttachmentsRepository = new InMemoryAttachmentsRepository()
    inMemoryOccurrenceAttachmentsRepository =
      new InMemoryOccurrenceAttachmentsRepository()
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    inMemoryOccurrenceStudentsRepository =
      new InMemoryOccurrenceStudentsRepository()
    inMemoryOccurrenceAttendeesRepository =
      new InMemoryOccurrenceAttendeesRepository()
    inMemoryOccurrencesRepository = new InMemoryOccurrencesRepository(
      inMemoryOccurrenceStudentsRepository,
      inMemoryOccurrenceAttendeesRepository,
      inMemoryOccurrenceAttachmentsRepository,
      inMemoryOccurrenceHistoriesRepository
    )
    sut = new EditOccurrenceUseCase(
      inMemoryOccurrencesRepository,
      inMemoryOccurrenceHistoriesRepository,
      inMemoryOccurrenceStudentsRepository,
      inMemoryOccurrenceAttendeesRepository,
      inMemoryOccurrenceAttachmentsRepository
    )
  })

  it('should be able to edit a occurrence', async () => {
    await inMemoryStudentsRepository.create(
      makeStudent(
        { responsibleEmail: 'responsible@example.com' },
        new UniqueEntityID('1')
      )
    )
    await inMemoryStudentsRepository.create(
      makeStudent({}, new UniqueEntityID('2'))
    )

    await inMemoryAttachmentsRepository.create(
      makeAttachment({}, new UniqueEntityID('1'))
    )

    const occurrence = makeOccurrence()

    await inMemoryOccurrencesRepository.create(occurrence)

    const result = await sut.execute({
      attendeesIds: ['1', '2'],
      editorId: '1',
      attachmentsIds: ['1'],
      description: 'occurrence description',
      studentsIds: ['1', '2'],
      teacherId: '1',
      title: 'occurrence title',
      type: 'ABSENCES',
      occurrenceId: occurrence.id.toString(),
    })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryAttachmentsRepository.items).toHaveLength(1)
    expect(
      inMemoryOccurrencesRepository.items[0].attendees.currentItems
    ).toHaveLength(2)
    expect(
      inMemoryOccurrencesRepository.items[0].students.currentItems
    ).toHaveLength(2)
    expect(inMemoryOccurrenceHistoriesRepository.items[0].changes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          field: 'title',
          value: 'occurrence title',
        }),
      ])
    )
  })
})

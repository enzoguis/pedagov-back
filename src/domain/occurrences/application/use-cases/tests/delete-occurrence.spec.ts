import { InMemoryOccurrencesRepository } from 'test/repositories/in-memory-occurrences-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { DeleteOccurrenceUseCase } from '../delete-occurrence'
import { InMemoryOccurrenceStudentsRepository } from 'test/repositories/in-memory-occurrence-students-repository'
import { InMemoryOccurrenceAttendeesRepository } from 'test/repositories/in-memory-occurrence-attendees-repository'
import { makeOccurrence } from 'test/factories/make-occurrence'
import { InMemoryOccurrenceAttachmentsRepository } from 'test/repositories/in-memory-occurrence-attachments-repository'
import { InMemoryOccurrenceHistoriesRepository } from 'test/repositories/in-memory-occurrence-histories-repository'

let inMemoryOccurrenceHistoriesRepository: InMemoryOccurrenceHistoriesRepository
let inMemoryOccurrenceAttachmentsRepository: InMemoryOccurrenceAttachmentsRepository
let inMemoryOccurrenceAttendeesRepository: InMemoryOccurrenceAttendeesRepository
let inMemoryOccurrenceStudentRepository: InMemoryOccurrenceStudentsRepository
let inMemoryOccurrencesRepository: InMemoryOccurrencesRepository
let sut: DeleteOccurrenceUseCase

describe('Delete Occurrence Use Case', () => {
  beforeEach(() => {
    inMemoryOccurrenceHistoriesRepository =
      new InMemoryOccurrenceHistoriesRepository()
    inMemoryOccurrenceAttachmentsRepository =
      new InMemoryOccurrenceAttachmentsRepository()
    inMemoryOccurrenceAttendeesRepository =
      new InMemoryOccurrenceAttendeesRepository()
    inMemoryOccurrenceStudentRepository =
      new InMemoryOccurrenceStudentsRepository()
    inMemoryOccurrencesRepository = new InMemoryOccurrencesRepository(
      inMemoryOccurrenceStudentRepository,
      inMemoryOccurrenceAttendeesRepository,
      inMemoryOccurrenceAttachmentsRepository,
      inMemoryOccurrenceHistoriesRepository
    )
    sut = new DeleteOccurrenceUseCase(inMemoryOccurrencesRepository)
  })

  it('should be able to delete an occurrence', async () => {
    const occurrence = await makeOccurrence()

    inMemoryOccurrencesRepository.create(occurrence)

    const occurrenceId = occurrence.id.toString()

    const result = await sut.execute({ occurrenceId })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryOccurrencesRepository.items).toHaveLength(0)
  })

  it('should not be able to delete a occurrence without a existing occurrence', async () => {
    const occurrence = await makeOccurrence(
      {},
      new UniqueEntityID('occurrence-1')
    )

    inMemoryOccurrencesRepository.create(occurrence)

    const occurrenceId = 'non-existing-occurrence'

    const result = await sut.execute({ occurrenceId })

    expect(result.isLeft).toBeTruthy()
    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
    expect(inMemoryOccurrencesRepository.items).toHaveLength(1)
  })
})

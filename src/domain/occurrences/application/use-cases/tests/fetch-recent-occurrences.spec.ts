import { FetchRecentsOccurrencesUseCase } from '../fetch-recents-occurrences'
import { InMemoryOccurrencesRepository } from 'test/repositories/in-memory-occurrences-repository'
import { InMemoryOccurrenceAttachmentsRepository } from 'test/repositories/in-memory-occurrence-attachments-repository'
import { InMemoryOccurrenceAttendeesRepository } from 'test/repositories/in-memory-occurrence-attendees-repository'
import { InMemoryOccurrenceHistoriesRepository } from 'test/repositories/in-memory-occurrence-histories-repository'
import { InMemoryOccurrenceStudentsRepository } from 'test/repositories/in-memory-occurrence-students-repository'
import { makeOccurrence } from 'test/factories/make-occurrence'

let inMemoryOccurrenceHistoriesRepository: InMemoryOccurrenceHistoriesRepository
let inMemoryOccurrenceAttachmentsRepository: InMemoryOccurrenceAttachmentsRepository
let inMemoryOccurrenceAttendeesRepository: InMemoryOccurrenceAttendeesRepository
let inMemoryOccurrenceStudentRepository: InMemoryOccurrenceStudentsRepository
let inMemoryOccurrencesRepository: InMemoryOccurrencesRepository
let sut: FetchRecentsOccurrencesUseCase

describe('Fetch Recent Occurrences Use Case', () => {
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
    sut = new FetchRecentsOccurrencesUseCase(inMemoryOccurrencesRepository)
  })

  it('should be able to fetch recent occurrences', async () => {
    await inMemoryOccurrencesRepository.create(
      makeOccurrence({
        createdAt: new Date(2025, 0, 3),
      })
    )

    await inMemoryOccurrencesRepository.create(
      makeOccurrence({
        createdAt: new Date(2025, 0, 1),
      })
    )

    await inMemoryOccurrencesRepository.create(
      makeOccurrence({
        createdAt: new Date(2025, 0, 2),
      })
    )

    const result = await sut.execute({
      page: 1,
    })

    expect(result.isRight).toBeTruthy()
    expect(result.value?.occurrences).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          createdAt: new Date(2025, 0, 1),
        }),
        expect.objectContaining({
          createdAt: new Date(2025, 0, 2),
        }),
        expect.objectContaining({
          createdAt: new Date(2025, 0, 3),
        }),
      ])
    )
  })

  it('should be able to fetch recent occurrences with pagination', async () => {
    for (let i = 1; i <= 22; i++) {
      await inMemoryOccurrencesRepository.create(makeOccurrence())
    }

    const result = await sut.execute({
      page: 2,
      limit: 20,
    })

    expect(result.isRight).toBeTruthy()
    expect(result.value?.occurrences).toHaveLength(2)
  })
})

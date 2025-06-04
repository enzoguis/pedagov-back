import { FetchAllOccurrencesUseCase } from '../fetch-all-occurrences'
import { InMemoryOccurrencesRepository } from 'test/repositories/in-memory-occurrences-repository'
import { InMemoryOccurrenceAttachmentsRepository } from 'test/repositories/in-memory-occurrence-attachments-repository'
import { InMemoryOccurrenceAttendeesRepository } from 'test/repositories/in-memory-occurrence-attendees-repository'
import { InMemoryOccurrenceHistoriesRepository } from 'test/repositories/in-memory-occurrence-histories-repository'
import { InMemoryOccurrenceStudentsRepository } from 'test/repositories/in-memory-occurrence-students-repository'
import { makeOccurrence } from 'test/factories/make-occurrence'
import {
  OccurrenceTypeEnum,
  OccurrenceTypes,
} from '@/domain/occurrences/enterprise/entities/occurrence'

let inMemoryOccurrenceHistoriesRepository: InMemoryOccurrenceHistoriesRepository
let inMemoryOccurrenceAttachmentsRepository: InMemoryOccurrenceAttachmentsRepository
let inMemoryOccurrenceAttendeesRepository: InMemoryOccurrenceAttendeesRepository
let inMemoryOccurrenceStudentRepository: InMemoryOccurrenceStudentsRepository
let inMemoryOccurrencesRepository: InMemoryOccurrencesRepository
let sut: FetchAllOccurrencesUseCase

describe('Fetch All Occurrences Use Case', () => {
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
    sut = new FetchAllOccurrencesUseCase(inMemoryOccurrencesRepository)
  })

  it('should be able to fetch all occurrences', async () => {
    await inMemoryOccurrencesRepository.create(makeOccurrence())
    await inMemoryOccurrencesRepository.create(makeOccurrence())
    await inMemoryOccurrencesRepository.create(makeOccurrence())

    const result = await sut.execute({ page: 1 })

    expect(result.isRight()).toBeTruthy()
    expect(result.value?.occurrences).toHaveLength(3)
  })

  it('should be able to fetch occurrences with pagination', async () => {
    for (let i = 0; i < 25; i++) {
      await inMemoryOccurrencesRepository.create(makeOccurrence())
    }

    const result = await sut.execute({
      page: 2,
      limit: 20,
    })

    expect(result.isRight()).toBeTruthy()
    expect(result.value?.occurrences).toHaveLength(5)
  })

  it('should be able to filter occurrences by type', async () => {
    await inMemoryOccurrencesRepository.create(
      makeOccurrence({ type: OccurrenceTypeEnum['TARDINESS'] })
    )
    await inMemoryOccurrencesRepository.create(
      makeOccurrence({ type: OccurrenceTypeEnum['ABSENCES'] })
    )

    const result = await sut.execute({
      page: 1,
      type: 'TARDINESS',
    })

    expect(result.isRight()).toBeTruthy()
    expect(result.value?.occurrences).toHaveLength(1)
    expect(result.value?.occurrences[0].type).toBe('TARDINESS')
  })
})

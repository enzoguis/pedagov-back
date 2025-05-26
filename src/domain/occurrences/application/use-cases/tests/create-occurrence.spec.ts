import { InMemoryOccurrencesRepository } from 'test/repositories/in-memory-occurrences-repository'
import { InMemoryOccurrenceStudentsRepository } from 'test/repositories/in-memory-occurrence-students-repository'
import { InMemoryOccurrenceAttendeesRepository } from 'test/repositories/in-memory-occurrence-attendees-repository'
import { CreateOccurrenceUseCase } from '../create-occurrence'
import { FakeEmailSender } from 'test/email/fake-email-sender'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { makeStudent } from 'test/factories/make-student'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { InMemoryOccurrenceAttachmentsRepository } from 'test/repositories/in-memory-occurrence-attachments-repository'
import { makeAttachment } from 'test/factories/make-attachments'
import { InMemoryAttachmentsRepository } from 'test/repositories/in-memory-attachments-repository'
import { InMemoryOccurrenceHistoriesRepository } from 'test/repositories/in-memory-occurrence-histories-repository'

let fakeEmailSender: FakeEmailSender
let inMemoryOccurrenceHistoriesRepository: InMemoryOccurrenceHistoriesRepository
let inMemoryAttachmentsRepository: InMemoryAttachmentsRepository
let inMemoryStudentsRepository: InMemoryStudentsRepository
let inMemoryOccurrenceStudentsRepository: InMemoryOccurrenceStudentsRepository
let inMemoryOccurrenceAttachmentsRepository: InMemoryOccurrenceAttachmentsRepository
let inMemoryOccurrenceAttendeesRepository: InMemoryOccurrenceAttendeesRepository
let inMemoryOccurrencesRepository: InMemoryOccurrencesRepository
let sut: CreateOccurrenceUseCase
describe('Create Occurrence Use Case', () => {
  beforeEach(() => {
    inMemoryOccurrenceHistoriesRepository =
      new InMemoryOccurrenceHistoriesRepository()
    inMemoryAttachmentsRepository = new InMemoryAttachmentsRepository()
    inMemoryOccurrenceAttachmentsRepository =
      new InMemoryOccurrenceAttachmentsRepository()
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    fakeEmailSender = new FakeEmailSender()
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
    sut = new CreateOccurrenceUseCase(
      inMemoryOccurrencesRepository,
      fakeEmailSender,
      inMemoryStudentsRepository
    )
  })

  it('should be able to create a new occurrence', async () => {
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

    const result = await sut.execute({
      shouldSendEmail: true,
      attendeesIds: ['1', '2'],
      authorId: '1',
      attachmentsIds: ['1'],
      description: 'occurrence description',
      studentsIds: ['1', '2'],
      teacherId: '1',
      title: 'occurrence title',
      type: 'ABSENCES',
      templateId: '1',
    })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryOccurrencesRepository.items).toHaveLength(1)
    expect(inMemoryOccurrencesRepository.items[0].type).toBe('ABSENCES')
    expect(fakeEmailSender.sentMessages).toHaveLength(2)
    expect(fakeEmailSender.sentMessages[0].recipientEmail).toBe(
      'responsible@example.com'
    )
    expect(inMemoryOccurrenceAttendeesRepository.items).toHaveLength(2)
    expect(inMemoryOccurrenceStudentsRepository.items).toHaveLength(2)
    expect(inMemoryOccurrenceAttachmentsRepository.items).toHaveLength(1)
    expect(inMemoryOccurrenceAttachmentsRepository.items[0]).toEqual(
      expect.objectContaining({
        attachmentId: new UniqueEntityID('1'),
      })
    )
  })

  it('should be able to create a new occurrence without send email to responsible', async () => {
    await inMemoryStudentsRepository.create(
      makeStudent({}, new UniqueEntityID('1'))
    )
    await inMemoryStudentsRepository.create(
      makeStudent({}, new UniqueEntityID('2'))
    )

    const result = await sut.execute({
      shouldSendEmail: false,
      attendeesIds: ['1', '2'],
      authorId: '1',
      attachmentsIds: [],
      description: 'occurrence description',
      studentsIds: ['1', '2'],
      teacherId: '1',
      title: 'occurrence title',
      type: 'ABSENCES',
      templateId: '1',
    })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryOccurrencesRepository.items).toHaveLength(1)
    expect(inMemoryOccurrencesRepository.items[0].type).toBe('ABSENCES')
    expect(fakeEmailSender.sentMessages).toHaveLength(0)
    expect(inMemoryOccurrenceAttendeesRepository.items).toHaveLength(2)
    expect(inMemoryOccurrenceStudentsRepository.items).toHaveLength(2)
  })
})

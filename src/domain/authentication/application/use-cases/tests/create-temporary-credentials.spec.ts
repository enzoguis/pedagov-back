import { FakeHasher } from 'test/cryptography/fake-hasher'
import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import { CreateTemporaryCredentialsUseCase } from '../create-temporary-credentials'
import { FakeEmailSender } from 'test/email/fake-email-sender'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { makeUser } from 'test/factories/make-user'

let fakeHasher: FakeHasher
let fakeEmailSender: FakeEmailSender
let inMemoryUsersRepository: InMemoryUsersRepository
let sut: CreateTemporaryCredentialsUseCase

describe('Create Temporary Credentials Use Case', () => {
  beforeEach(() => {
    fakeEmailSender = new FakeEmailSender()
    fakeHasher = new FakeHasher()
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new CreateTemporaryCredentialsUseCase(
      inMemoryUsersRepository,
      fakeHasher,
      fakeEmailSender
    )
  })

  it('should send an email with the temporary password to the registered email', async () => {
    inMemoryUsersRepository.create(makeUser({}, new UniqueEntityID('user-1')))

    const result = await sut.execute({
      userId: 'user-1',
      email: 'user@example.com',
    })

    expect(result.isRight).toBeTruthy()
    expect(
      inMemoryUsersRepository.items[0].temporaryPassword?.length
    ).toBeGreaterThan(1)
    expect(fakeEmailSender.sentMessages[0].data).toHaveProperty(
      'temporaryPassword'
    )
    expect(fakeEmailSender.sentMessages[0].recipientEmail).toBe(
      'user@example.com'
    )
  })
})

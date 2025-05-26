import { FakeHasher } from 'test/cryptography/fake-hasher'
import { FakeEncrypter } from 'test/cryptography/fake-encrypter'
import generatePassword from 'generate-password'
import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import { User } from '@/domain/authentication/enterprise/entities/user'
import { CreateTemporaryCredentialsUseCase } from '../create-temporary-credentials'
import { FakeEmailSender } from 'test/email/fake-email-sender'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

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
    const result = await sut.execute({
      userId: '1',
      email: 'user@example.com',
    })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryUsersRepository.items[0].id).toStrictEqual(
      new UniqueEntityID('1')
    )
    expect(fakeEmailSender.sentMessages[0].data).toHaveProperty(
      'temporaryPassword'
    )
    expect(fakeEmailSender.sentMessages[0].recipientEmail).toBe(
      'user@example.com'
    )
  })
})

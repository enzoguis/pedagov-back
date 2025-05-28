import { FakeHasher } from 'test/cryptography/fake-hasher'
import { ChangePasswordUseCase } from '../change-password'
import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import { makeUser } from 'test/factories/make-user'

let fakeHasher: FakeHasher
let inMemoryUsersRepository: InMemoryUsersRepository
let sut: ChangePasswordUseCase

describe('ChangePassword Use Case', () => {
  beforeEach(() => {
    fakeHasher = new FakeHasher()
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new ChangePasswordUseCase(
      inMemoryUsersRepository,
      fakeHasher,
      fakeHasher
    )
  })

  it('should be able to change password', async () => {
    const user = makeUser({
      password: await fakeHasher.hash('password-123'),
    })

    inMemoryUsersRepository.create(user)

    if (!user.email) {
      return
    }

    const result = await sut.execute({
      email: user.email,
      password: 'password-123',
      newPassword: '123456',
    })

    expect(result.isRight).toBeTruthy()
    expect(inMemoryUsersRepository.items[0].password).toBe('123456-hashed')
  })
})

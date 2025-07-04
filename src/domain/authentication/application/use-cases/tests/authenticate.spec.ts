import { FakeHasher } from 'test/cryptography/fake-hasher'
import { AuthenticateUseCase } from '../authenticate'
import { FakeEncrypter } from 'test/cryptography/fake-encrypter'
import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import {
  User,
  UserRoleEnum,
  UserStatusEnum,
} from '@/domain/authentication/enterprise/entities/user'

let fakeHasher: FakeHasher
let fakeEncrypter: FakeEncrypter
let inMemoryUsersRepository: InMemoryUsersRepository
let sut: AuthenticateUseCase

describe('Authenticate Use Case', () => {
  beforeEach(() => {
    fakeEncrypter = new FakeEncrypter()
    fakeHasher = new FakeHasher()
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new AuthenticateUseCase(
      inMemoryUsersRepository,
      fakeHasher,
      fakeEncrypter
    )
  })

  it('should return isFirstLogin when password is equal to temporary password', async () => {
    const password = await fakeHasher.hash('12345678')

    const user = User.create({
      role: UserRoleEnum.ADMIN,
      status: UserStatusEnum.ACTIVE,
      email: 'user@example.com',
      password: password,
      temporaryPassword: password,
    })

    await inMemoryUsersRepository.create(user)

    const result = await sut.execute({
      email: 'user@example.com',
      password: '12345678',
    })

    expect(result.isRight()).toBeTruthy()
    expect(result.value).toEqual(
      expect.objectContaining({
        isFirstLogin: true,
        accessToken: expect.any(String),
        isActive: true,
      })
    )

    if (result.isLeft()) {
      return
    }

    const parsedToken = JSON.parse(result.value.accessToken)

    expect(parsedToken).toEqual(
      expect.objectContaining({
        roles: ['ADMIN'],
      })
    )
  })

  it('should return isFirstLogin when password is equal to temporary password', async () => {
    const password = await fakeHasher.hash('12345678')

    const user = User.create({
      role: UserRoleEnum.COMMON,
      status: UserStatusEnum.ACTIVE,
      email: 'user@example.com',
      password,
      temporaryPassword: '',
    })

    inMemoryUsersRepository.create(user)

    const result = await sut.execute({
      email: 'user@example.com',
      password: '12345678',
    })

    expect(result.isRight).toBeTruthy()
    expect(result.value).toEqual(
      expect.objectContaining({
        isFirstLogin: false,
        accessToken: expect.any(String),
      })
    )

    if (result.isLeft()) {
      return
    }

    const parsedToken = JSON.parse(result.value.accessToken)

    expect(parsedToken).toEqual(
      expect.objectContaining({
        roles: ['COMMON'],
      })
    )
  })
})

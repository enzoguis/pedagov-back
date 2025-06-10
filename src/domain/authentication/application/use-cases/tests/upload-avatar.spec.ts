import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import { UploadAvatarUseCase } from '../upload-avatar'
import { makeUser } from 'test/factories/make-user'

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: UploadAvatarUseCase

describe('Upload Avatar Use Case', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new UploadAvatarUseCase(inMemoryUsersRepository)
  })

  it('should be able to upload an avatar', async () => {
    const user = makeUser({
      avatar: null,
    })

    await inMemoryUsersRepository.create(user)

    const result = await sut.execute({
      avatar: 'https://github.com/enzoguis.png',
      userId: user.id.toString(),
    })

    expect(result.isRight()).toBeTruthy()
    expect(inMemoryUsersRepository.items[0].avatar).toBe(
      'https://github.com/enzoguis.png'
    )
  })
})

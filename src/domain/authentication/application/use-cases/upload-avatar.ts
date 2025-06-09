import { Either, left, right } from '@/core/either'
import { Injectable } from '@nestjs/common'
import { UsersRepository } from '../repositories/users-repository'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'

export interface UploadAvatarUseCaseRequest {
  userId: string
  avatar: string
}

type UploadAvatarUseCaseResponse = Either<ResourceNotFoundError, {}>

@Injectable()
export class UploadAvatarUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
    avatar,
  }: UploadAvatarUseCaseRequest): Promise<UploadAvatarUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      return left(new ResourceNotFoundError())
    }

    user.avatar = avatar

    await this.usersRepository.save(user)

    return right({})
  }
}

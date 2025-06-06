import { UsersRepository } from '../repositories/users-repository'
import { Either, left, right } from '@/core/either'
import { HashGenerator } from '../../../authentication/application/cryptography/hash-generator'
import { User } from '../../enterprise/entities/user'
import { Injectable } from '@nestjs/common'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import {
  EmailSender,
  EmailSenderTemplateIdEnum,
} from '@/core/email/email-sender'
import { randomBytes } from 'node:crypto'

interface CreateTemporaryCredentialsUseCaseRequest {
  userId: string
  email: string
}

type CreateTemporaryCredentialsUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    user: User
  }
>

@Injectable()
export class CreateTemporaryCredentialsUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashGenerator: HashGenerator,
    private emailSender: EmailSender
  ) {}
  async execute({
    userId,
    email,
  }: CreateTemporaryCredentialsUseCaseRequest): Promise<CreateTemporaryCredentialsUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      return left(new ResourceNotFoundError())
    }

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const special = '!@#$%^&()-_=+[]{}|;:,.<>?'
    const allCharacters = uppercase + lowercase + numbers + special

    const passwordParts = [
      uppercase[Math.floor(Math.random() * uppercase.length)],
      lowercase[Math.floor(Math.random() * lowercase.length)],
      numbers[Math.floor(Math.random() * numbers.length)],
      special[Math.floor(Math.random() * special.length)],
    ]

    const remainingLength = 12 - passwordParts.length
    const randomCharacters = Array.from(randomBytes(remainingLength))
      .map((byte) => allCharacters[byte % allCharacters.length])
      .join('')

    const temporaryPassword = [...passwordParts, ...randomCharacters]
      .sort(() => Math.random() - 0.5)
      .join('')

    const password = await this.hashGenerator.hash(temporaryPassword)

    user.password = password
    user.temporaryPassword = password

    await this.usersRepository.save(user)

    await this.emailSender.send({
      recipientEmail: email,
      templateId: EmailSenderTemplateIdEnum.TEMPORARY_PASSWORD_CREATED,
      data: { temporaryPassword },
    })

    return right({ user })
  }
}

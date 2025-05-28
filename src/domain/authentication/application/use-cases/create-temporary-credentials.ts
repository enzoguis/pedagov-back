import { UsersRepository } from '../repositories/users-repository'
import { Either, left, right } from '@/core/either'
import generatePassword from 'generate-password'
import { HashGenerator } from '../../../authentication/application/cryptography/hash-generator'
import { EmailSender, EmailSenderTemplateIdEnum } from '../email/email-sender'
import { User } from '../../enterprise/entities/user'
import { Injectable } from '@nestjs/common'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'

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

    const temporaryPassword = generatePassword.generate({
      length: 8,
      numbers: true,
      symbols: true,
    })

    const password = await this.hashGenerator.hash(temporaryPassword)

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

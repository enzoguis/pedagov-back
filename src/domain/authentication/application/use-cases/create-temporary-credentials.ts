import { UsersRepository } from '../repositories/users-repository'
import { Either, right } from '@/core/either'
import generatePassword from 'generate-password'
import { HashGenerator } from '../../../authentication/application/cryptography/hash-generator'
import { EmailSender } from '../email/email-sender'
import { User } from '../../enterprise/entities/user'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface CreateTemporaryCredentialsUseCaseRequest {
  userId: string
  email: string
}

type CreateTemporaryCredentialsUseCaseResponse = Either<
  null,
  {
    user: User
  }
>

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
    const temporaryPassword = generatePassword.generate({
      length: 8,
      numbers: true,
      symbols: true,
    })

    const password = await this.hashGenerator.hash(temporaryPassword)

    const user = User.create(
      {
        email,
        password,
        temporaryPassword: password,
      },
      new UniqueEntityID(userId)
    )

    await this.usersRepository.create(user)

    await this.emailSender.send({
      recipientEmail: email,
      templateId: '1',
      data: { temporaryPassword },
    })

    return right({ user })
  }
}

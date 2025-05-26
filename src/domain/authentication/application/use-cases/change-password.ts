import { Either, left, right } from '@/core/either'
import { HashComparer } from '../../../authentication/application/cryptography/hash-comparer'
import { Encrypter } from '../../../authentication/application/cryptography/encrypter'
import { UsersRepository } from '../repositories/users-repository'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { HashGenerator } from '../../../authentication/application/cryptography/hash-generator'
import { WrongCredentialsError } from './errors/wrong-credentials-error'

interface ChangePasswordUseCaseRequest {
  email: string
  password: string
  newPassword: string
}

type ChangePasswordUseCaseResponse = Either<
  ResourceNotFoundError | WrongCredentialsError,
  {}
>

export class ChangePasswordUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashComparer: HashComparer,
    private hashGenerator: HashGenerator
  ) {}

  async execute({
    email,
    password,
    newPassword,
  }: ChangePasswordUseCaseRequest): Promise<ChangePasswordUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      return left(new ResourceNotFoundError())
    }

    const isPasswordValid = await this.hashComparer.compare(
      password,
      user.password
    )

    if (!isPasswordValid) {
      return left(new WrongCredentialsError())
    }

    const newPasswordHashed = await this.hashGenerator.hash(newPassword)

    user.password = newPasswordHashed
    user.temporaryPassword = ''

    await this.usersRepository.save(user)

    return right({})
  }
}

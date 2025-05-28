import { Either, left, right } from '@/core/either'
import { HashComparer } from '../../../authentication/application/cryptography/hash-comparer'
import { UsersRepository } from '../repositories/users-repository'
import { HashGenerator } from '../../../authentication/application/cryptography/hash-generator'
import { WrongCredentialsError } from './errors/wrong-credentials-error'
import { Injectable } from '@nestjs/common'

interface ChangePasswordUseCaseRequest {
  email: string
  password: string
  newPassword: string
}

type ChangePasswordUseCaseResponse = Either<WrongCredentialsError, {}>

@Injectable()
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

    if (!user || !user.password) {
      return left(new WrongCredentialsError())
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
    user.temporaryPassword = null

    await this.usersRepository.save(user)

    return right({})
  }
}

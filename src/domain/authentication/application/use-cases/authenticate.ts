import { Either, left, right } from '@/core/either'
import { HashComparer } from '../../../authentication/application/cryptography/hash-comparer'
import { Encrypter } from '../../../authentication/application/cryptography/encrypter'
import { UsersRepository } from '../repositories/users-repository'
import { WrongCredentialsError } from './errors/wrong-credentials-error'
import { Injectable } from '@nestjs/common'
import { UserStatusEnum } from '../../enterprise/entities/user'

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

type AuthenticateUseCaseResponse = Either<
  WrongCredentialsError,
  {
    accessToken: string
    isFirstLogin: boolean
    isActive: boolean
  }
>

@Injectable()
export class AuthenticateUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashComparer: HashComparer,
    private encrypter: Encrypter
  ) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      return left(new WrongCredentialsError())
    }

    if (user.password) {
      const isPasswordValid = await this.hashComparer.compare(
        password,
        user.password
      )

      if (!isPasswordValid) {
        return left(new WrongCredentialsError())
      }

      let isFirstLogin = false

      if (user.temporaryPassword) {
        const isTemporaryPassword = await this.hashComparer.compare(
          password,
          user.temporaryPassword
        )

        if (isTemporaryPassword) {
          isFirstLogin = true
        }
      }

      const accessToken = await this.encrypter.encrypt({
        sub: user.id.toString(),
        roles: [user.role],
      })

      const isActive = user.status === UserStatusEnum.ACTIVE ? true : false

      return right({
        accessToken,
        isFirstLogin,
        isActive,
      })
    }

    return left(new WrongCredentialsError())
  }
}

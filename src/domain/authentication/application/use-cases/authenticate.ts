import { Either, left, right } from '@/core/either'
import { HashComparer } from '../../../authentication/application/cryptography/hash-comparer'
import { Encrypter } from '../../../authentication/application/cryptography/encrypter'
import { UsersRepository } from '../repositories/users-repository'
import { WrongCredentialsError } from './errors/wrong-credentials-error'
import { Injectable } from '@nestjs/common'

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

type AuthenticateUseCaseResponse = Either<
  WrongCredentialsError,
  {
    accessToken: string
    isFirstLogin: boolean
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

    console.log(
      'password use case: ',
      password,
      'temporaryPassword de user',
      user?.temporaryPassword
    )

    if (!user) {
      return left(new WrongCredentialsError())
    }

    if (user.temporaryPassword) {
      const isFirstLogin = await this.hashComparer.compare(
        password,
        user.temporaryPassword
      )

      console.log(isFirstLogin)

      if (!isFirstLogin) {
        console.log('caiu no !isFirstLogin')
        return left(new WrongCredentialsError())
      }

      const accessToken = await this.encrypter.encrypt({
        sub: user.id.toString(),
      })

      return right({
        accessToken,
        isFirstLogin,
      })
    }

    if (user.password) {
      const isPasswordValid = await this.hashComparer.compare(
        password,
        user.password
      )

      if (!isPasswordValid) {
        return left(new WrongCredentialsError())
      }

      const accessToken = await this.encrypter.encrypt({
        sub: user.id.toString(),
      })

      return right({
        accessToken,
        isFirstLogin: false,
      })
    }

    return left(new WrongCredentialsError())
  }
}

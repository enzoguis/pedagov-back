import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UsePipes,
} from '@nestjs/common'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { z } from 'zod'
import { Public } from '@/infra/auth/public'
import { AuthenticateUseCase } from '@/domain/authentication/application/use-cases/authenticate'
import { WrongCredentialsError } from '@/domain/authentication/application/use-cases/errors/wrong-credentials-error'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { AuthenticateDto } from '../dtos/authenticate-dto'

const authenticateBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type AuthenticateBody = z.infer<typeof authenticateBodySchema>

@ApiTags('Auth')
@Controller('/sessions')
@Public()
export class AuthenticateController {
  constructor(private authenticate: AuthenticateUseCase) {}

  @Post()
  @ApiBody({ type: AuthenticateDto })
  @UsePipes(new ZodValidationPipe(authenticateBodySchema))
  async handle(@Body() body: AuthenticateBody) {
    const { email, password } = body

    const result = await this.authenticate.execute({
      email,
      password,
    })

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case WrongCredentialsError:
          throw new UnauthorizedException(error.message)
        default:
          throw new BadRequestException(error.message)
      }
    }

    const { accessToken, isFirstLogin, isActive } = result.value

    return {
      access_token: accessToken,
      is_first_login: isFirstLogin,
      is_active: isActive,
    }
  }
}

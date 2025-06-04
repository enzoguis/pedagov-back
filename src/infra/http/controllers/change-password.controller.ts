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
import { WrongCredentialsError } from '@/domain/authentication/application/use-cases/errors/wrong-credentials-error'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { ChangePasswordUseCase } from '@/domain/authentication/application/use-cases/change-password'
import { changePasswordDto } from '../dtos/change-password-dto'

const ChangePasswordBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
  newPassword: z.string().min(8, {
    message: 'The newPassword field must contain at least 8 characters.',
  }),
})

type ChangePasswordBody = z.infer<typeof ChangePasswordBodySchema>

@ApiTags('Auth')
@Controller('/change-password')
@Public()
export class ChangePasswordController {
  constructor(private changePassword: ChangePasswordUseCase) {}

  @Post()
  @ApiBody({ type: changePasswordDto })
  @UsePipes(new ZodValidationPipe(ChangePasswordBodySchema))
  async handle(@Body() body: ChangePasswordBody) {
    const { email, password, newPassword } = body

    const result = await this.changePassword.execute({
      email,
      password,
      newPassword,
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

    return {}
  }
}

import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common'
import { CreatePedagogueUseCase } from '@/domain/occurrences/application/use-cases/create-pedagogue'
import { z } from 'zod'
import { PedagogueRoleEnum } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { Roles } from '@/infra/auth/roles.decorator'
import { RolesGuard } from '@/infra/auth/roles-guard'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth-guard'
import { PedagoguePresenter } from '../presenters/pedagogue-presenter'
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger'
import { CreatePedagogueDto } from '../dtos/create-pedagogue-dto'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'

const createPedagogueBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  status: z.preprocess(
    (val) => (typeof val === 'string' ? val.toUpperCase() : val),
    z.nativeEnum(UserStatusEnum)
  ),
  role: z.preprocess(
    (val) => (typeof val === 'string' ? val.toUpperCase() : val),
    z.nativeEnum(PedagogueRoleEnum)
  ),
})

type CreatePedagogueBody = z.infer<typeof createPedagogueBodySchema>

@ApiTags('Pedagogues')
@Controller('/accounts/pedagogue')
@UseGuards(RolesGuard, JwtAuthGuard)
@Roles('ADMIN')
export class CreatePedagogueController {
  constructor(private createPedagogue: CreatePedagogueUseCase) {}

  @Post()
  @ApiOperation({
    description: 'Only pedagogues with ADMIN role can access this route',
  })
  @ApiBody({ type: CreatePedagogueDto })
  @UsePipes(new ZodValidationPipe(createPedagogueBodySchema))
  async handle(@Body() body: CreatePedagogueBody) {
    const { name, email, role, status } = body

    const result = await this.createPedagogue.execute({
      name,
      email,
      role,
      status,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    return { result: PedagoguePresenter.toHTTP(result.value.pedagogue) }
  }
}

import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common'
import { EditPedagogueUseCase } from '@/domain/occurrences/application/use-cases/edit-pedagogue'
import { z } from 'zod'
import { PedagogueRoleEnum } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { Roles } from '@/infra/auth/roles.decorator'
import { RolesGuard } from '@/infra/auth/roles-guard'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth-guard'
import { PedagoguePresenter } from '../presenters/pedagogue-presenter'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'

const editPedagogueBodySchema = z.object({
  name: z.string(),
  status: z.preprocess(
    (val) => (typeof val === 'string' ? val.toUpperCase() : val),
    z.nativeEnum(UserStatusEnum)
  ),
  role: z.preprocess(
    (val) => (typeof val === 'string' ? val.toUpperCase() : val),
    z.nativeEnum(PedagogueRoleEnum)
  ),
})

type EditPedagogueBody = z.infer<typeof editPedagogueBodySchema>

const bodyValidationPipe = new ZodValidationPipe(editPedagogueBodySchema)

@ApiTags('Pedagogues')
@Controller('/pedagogues/:id')
@UseGuards(RolesGuard, JwtAuthGuard)
@Roles('ADMIN')
export class EditPedagogueController {
  constructor(private editPedagogue: EditPedagogueUseCase) {}

  @Put()
  @ApiOperation({
    summary: 'Edit a pedagogue',
    description: 'Only pedagogues with ADMIN role can access this route',
  })
  async handle(
    @Param('id') pedagogueId: string,
    @Body(bodyValidationPipe) body: EditPedagogueBody
  ) {
    const { name, role, status } = body

    const result = await this.editPedagogue.execute({
      name,
      role,
      status,
      pedagogueId,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    return { result: PedagoguePresenter.toHTTP(result.value.pedagogue) }
  }
}

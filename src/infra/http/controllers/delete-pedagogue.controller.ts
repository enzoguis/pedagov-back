import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  NotFoundException,
  Param,
  UseGuards,
} from '@nestjs/common'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { DeletePedagogueUseCase } from '@/domain/occurrences/application/use-cases/delete-pedagogue'
import { Roles } from '@/infra/auth/roles.decorator'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth-guard'
import { RolesGuard } from '@/infra/auth/roles-guard'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('Pedagogues')
@Controller('/pedagogues/:id')
export class DeletePedagogueController {
  constructor(private deletePedagogue: DeletePedagogueUseCase) {}

  @Delete()
  @HttpCode(204)
  @Roles('ADMIN')
  @ApiOperation({
    description: 'Only pedagogues with ADMIN role can access this route.',
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  async handle(@Param('id') pedagogueId: string) {
    const result = await this.deletePedagogue.execute({
      pedagogueId,
    })

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case ResourceNotFoundError:
          throw new NotFoundException(error.message)
        default:
          throw new BadRequestException(error.message)
      }
    }
  }
}

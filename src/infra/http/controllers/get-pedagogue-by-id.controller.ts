import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { GetPedagogueByIdUseCase } from '@/domain/occurrences/application/use-cases/get-pedagogue-by-id'
import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { PedagoguePresenter } from '../presenters/pedagogue-presenter'

@Controller('pedagogues/:id')
@ApiTags('Pedagogues')
export class GetPedagogueByIdController {
  constructor(private getPedagogueById: GetPedagogueByIdUseCase) {}

  @Get()
  async handle(@Param('id') pedagogueId: string) {
    const result = await this.getPedagogueById.execute({
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

    return {
      result: PedagoguePresenter.toHTTP(result.value.pedagogue),
    }
  }
}

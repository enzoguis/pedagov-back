import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  NotFoundException,
  Param,
} from '@nestjs/common'
import { DeleteGroupUseCase } from '@/domain/occurrences/application/use-cases/delete-group'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'

@Controller('/groups/:id')
export class DeleteGroupController {
  constructor(private deleteGroup: DeleteGroupUseCase) {}

  @Delete()
  @HttpCode(204)
  async handle(@Param('id') groupId: string) {
    const result = await this.deleteGroup.execute({
      groupId,
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

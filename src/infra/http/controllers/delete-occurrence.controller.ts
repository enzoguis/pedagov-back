import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  NotFoundException,
  Param,
} from '@nestjs/common'
import { DeleteOccurrenceUseCase } from '@/domain/occurrences/application/use-cases/delete-occurrence'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Occurrences')
@Controller('/occurrences/:id')
export class DeleteOccurrenceController {
  constructor(private deleteOccurrence: DeleteOccurrenceUseCase) {}

  @Delete()
  @HttpCode(204)
  async handle(@Param('id') occurrenceId: string) {
    const result = await this.deleteOccurrence.execute({
      occurrenceId,
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

import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { GetOccurrenceDetailsUseCase } from '@/domain/occurrences/application/use-cases/get-occurrence-details'
import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { OccurrenceDetailsPresenter } from '../presenters/occurrence-details-presenter'

@Controller('/occurrences/:id')
@ApiTags('Occurrences')
export class GetOccurrenceDetailsController {
  constructor(private getOccurrenceDetails: GetOccurrenceDetailsUseCase) {}

  @Get()
  async handle(@Param('id') occurrenceId: string) {
    const result = await this.getOccurrenceDetails.execute({
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

    const { occurrence } = result.value

    return { result: OccurrenceDetailsPresenter.toHTTP(occurrence) }
  }
}

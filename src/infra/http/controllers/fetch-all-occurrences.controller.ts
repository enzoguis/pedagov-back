import { FetchAllOccurrencesUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-occurrences'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'
import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { OccurrencePresenter } from '../presenters/occurrence-presenter'
import { FetchAllOccurrencesQueryDto } from '../dtos/fetch-occurrences-query-dto'
import { FetchOccurrencesResponseDto } from '../dtos/fetch-occurrences-response-dto'
import { OccurrencesWithPaginationPresenter } from '../presenters/occurrences-with-pagination-presenter'

const queryParamsSchema = z.object({
  page: z
    .string()
    .optional()
    .default('1')
    .transform(Number)
    .pipe(z.number().min(1)),
  limit: z.coerce.number().optional(),
  searchTerm: z.string().optional(),
})

type QueryParams = z.infer<typeof queryParamsSchema>

const queryValidationPipe = new ZodValidationPipe(queryParamsSchema)

@Controller('/occurrences')
@ApiTags('Occurrences')
export class FetchAllOccurrencesController {
  constructor(private fetchAllOccurrences: FetchAllOccurrencesUseCase) {}

  @Get()
  @ApiQuery({ type: FetchAllOccurrencesQueryDto })
  @ApiResponse({ type: FetchOccurrencesResponseDto })
  async handle(@Query(queryValidationPipe) query: QueryParams) {
    const { page, limit, searchTerm } = query

    const result = await this.fetchAllOccurrences.execute({
      page,
      limit,
      searchTerm,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const { occurrencesWithPaginaton } = result.value

    return {
      result: OccurrencesWithPaginationPresenter.toHTTP(
        occurrencesWithPaginaton
      ),
    }
  }
}

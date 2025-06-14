import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { OccurrenceWithStudentNamePresenter } from '../presenters/occurrence-with-student-name-presenter'
import { QueryPaginationParamsDto } from '../dtos/query-pagination-params-dto'
import { FetchOccurrencesPerStudentUseCase } from '@/domain/occurrences/application/use-cases/fetch-occurrences-per-student'
import { FetchOccurrencesPerStudentDto } from '../dtos/fetch-occurrences-per-student-response-dto'

const queryParamsSchema = z.object({
  page: z.coerce.number(),
  limit: z.coerce.number().optional(),
})

type QueryParams = z.infer<typeof queryParamsSchema>

const queryValidationPipe = new ZodValidationPipe(queryParamsSchema)

@Controller('/occurrences-student')
@ApiTags('Occurrences')
@ApiQuery({ type: QueryPaginationParamsDto })
@ApiResponse({ type: [FetchOccurrencesPerStudentDto] })
export class FetchOccurrencesPerStudentController {
  constructor(
    private fetchOccurrencesPerStudent: FetchOccurrencesPerStudentUseCase
  ) {}

  @Get()
  async handle(@Query(queryValidationPipe) query: QueryParams) {
    const { page, limit } = query

    const result = await this.fetchOccurrencesPerStudent.execute({
      page,
      limit,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const { occurrences } = result.value

    return {
      result: occurrences.map(OccurrenceWithStudentNamePresenter.toHTTP),
    }
  }
}

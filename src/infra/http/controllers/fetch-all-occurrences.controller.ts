import { FetchAllOccurrencesUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-occurrences'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'
import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { OccurrencePresenter } from '../presenters/occurrence-presenter'
import { FetchAllOccurrencesQueryDto } from '../dtos/fetch-occurrences-query-dto'
import { FetchOccurrencesResponseDto } from '../dtos/fetch-occurrences-response-dto'

const queryParamsSchema = z.object({
  page: z.coerce.number(),
  limit: z.coerce.number().optional(),
  type: z.preprocess(
    (val) => (typeof val === 'string' ? val.toUpperCase() : val),
    z.nativeEnum(OccurrenceTypeEnum).optional()
  ),
  studentId: z.string().uuid().optional(),
  groupId: z.string().uuid().optional(),
  createdAt: z
    .string()
    .datetime({ offset: true })
    .transform((str) => new Date(str))
    .optional(),
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
    const { page, limit, studentId, type, createdAt, groupId } = query

    const result = await this.fetchAllOccurrences.execute({
      page,
      limit,
      studentId,
      type,
      createdAt,
      groupId,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const { occurrences } = result.value

    return {
      result: occurrences.map(OccurrencePresenter.toHTTP),
    }
  }
}

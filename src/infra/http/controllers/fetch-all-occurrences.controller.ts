import { FetchAllOccurrencesUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-occurrences'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'
import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { OccurrencePresenter } from '../presenters/occurrence-presenter'

const queryParamsSchema = z.object({
  page: z.coerce.number(),
  limit: z.number().optional(),
  type: z.preprocess(
    (val) => (typeof val === 'string' ? val.toUpperCase() : val),
    z.nativeEnum(OccurrenceTypeEnum).optional()
  ),
  studentId: z.string().uuid().optional(),
})

type QueryParams = z.infer<typeof queryParamsSchema>

const queryValidationPipe = new ZodValidationPipe(queryParamsSchema)

@Controller('/occurrences')
@ApiTags('Occurrences')
export class FetchAllOccurrencesController {
  constructor(private fetchAllOccurrences: FetchAllOccurrencesUseCase) {}

  @Get()
  async handle(@Query(queryValidationPipe) query: QueryParams) {
    const { page, limit, studentId, type } = query

    const result = await this.fetchAllOccurrences.execute({
      page,
      limit,
      studentId,
      type,
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

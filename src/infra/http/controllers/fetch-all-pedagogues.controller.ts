import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { FetchAllPedagoguesUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-pedagogues'
import { PedagogueDto } from '../dtos/get-pedagogue-by-id-response-dto'
import { QueryPaginationParamsDto } from '../dtos/query-pagination-params-dto'
import { PedagogueWithEmailPresenter } from '../presenters/pedagogue-with-email-presenter'

const queryParamsSchema = z.object({
  page: z.coerce.number(),
  limit: z.coerce.number().optional(),
})

type QueryParams = z.infer<typeof queryParamsSchema>

const queryValidationPipe = new ZodValidationPipe(queryParamsSchema)

@Controller('/pedagogues')
@ApiTags('Pedagogues')
@ApiQuery({ type: QueryPaginationParamsDto })
export class FetchAllPedagoguesController {
  constructor(private fetchAllPedagogues: FetchAllPedagoguesUseCase) {}

  @Get()
  @ApiResponse({ type: [PedagogueDto] })
  async handle(@Query(queryValidationPipe) query: QueryParams) {
    const { page, limit } = query

    const result = await this.fetchAllPedagogues.execute({
      page,
      limit,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const { pedagogues } = result.value

    return {
      result: pedagogues.map(PedagogueWithEmailPresenter.toHTTP),
    }
  }
}

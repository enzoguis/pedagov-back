import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { PedagoguePresenter } from '../presenters/pedagogue-presenter'
import { FetchAllPedagoguesUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-pedagogues'

const queryParamsSchema = z.object({
  page: z.coerce.number(),
  limit: z.coerce.number().optional(),
})

type QueryParams = z.infer<typeof queryParamsSchema>

const queryValidationPipe = new ZodValidationPipe(queryParamsSchema)

@Controller('/pedagogues')
@ApiTags('Pedagogues')
export class FetchAllPedagoguesController {
  constructor(private fetchAllPedagogues: FetchAllPedagoguesUseCase) {}

  @Get()
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
      result: pedagogues.map(PedagoguePresenter.toHTTP),
    }
  }
}

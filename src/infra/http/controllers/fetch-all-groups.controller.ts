import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { GroupPresenter } from '../presenters/group-presenter'
import { FetchAllGroupsUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-groups'
import { GroupShiftsEnum } from '@/domain/occurrences/enterprise/entities/group'

const queryParamsSchema = z.object({
  page: z.coerce.number(),
  limit: z.coerce.number().optional(),
  shift: z.preprocess(
    (val) => (typeof val === 'string' ? val.toUpperCase() : val),
    z.nativeEnum(GroupShiftsEnum).optional()
  ),
})

type QueryParams = z.infer<typeof queryParamsSchema>

const queryValidationPipe = new ZodValidationPipe(queryParamsSchema)

@Controller('/groups')
@ApiTags('Groups')
export class FetchAllGroupsController {
  constructor(private fetchAllGroups: FetchAllGroupsUseCase) {}

  @Get()
  async handle(@Query(queryValidationPipe) query: QueryParams) {
    const { page, limit, shift } = query

    const result = await this.fetchAllGroups.execute({
      page,
      limit,
      shift,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const { groups } = result.value

    return {
      result: groups.map(GroupPresenter.toHTTP),
    }
  }
}

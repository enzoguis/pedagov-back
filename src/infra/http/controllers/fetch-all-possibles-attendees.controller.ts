import { FetchAllPossiblesAttendeesUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-possibles-attendees'
import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { AttendeePresenter } from '../presenters/attendee-presenter'

const queryParamsSchema = z.object({
  page: z.coerce.number(),
  limit: z.coerce.number().optional(),
})

type QueryParams = z.infer<typeof queryParamsSchema>

const queryValidationPipe = new ZodValidationPipe(queryParamsSchema)

@Controller('/attendees')
export class FetchAllPossiblesAttendeesController {
  constructor(
    private fetchAllPossiblesAttendees: FetchAllPossiblesAttendeesUseCase
  ) {}

  @Get()
  async handle(@Query(queryValidationPipe) query: QueryParams) {
    const { page, limit } = query

    const result = await this.fetchAllPossiblesAttendees.execute({
      page,
      limit,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const { attendees } = result.value

    return { result: attendees.map(AttendeePresenter.toHTTP) }
  }
}

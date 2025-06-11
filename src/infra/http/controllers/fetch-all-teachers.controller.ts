import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { TeacherPresenter } from '../presenters/teacher-presenter'
import { FetchAllTeachersUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-teachers'

const queryParamsSchema = z.object({
  page: z.coerce.number(),
  limit: z.coerce.number().optional(),
})

type QueryParams = z.infer<typeof queryParamsSchema>

const queryValidationPipe = new ZodValidationPipe(queryParamsSchema)

@Controller('/teachers')
@ApiTags('Teachers')
export class FetchAllTeachersController {
  constructor(private fetchAllTeachers: FetchAllTeachersUseCase) {}

  @Get()
  async handle(@Query(queryValidationPipe) query: QueryParams) {
    const { page, limit } = query

    const result = await this.fetchAllTeachers.execute({
      page,
      limit,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const { teachers } = result.value

    return {
      result: teachers.map(TeacherPresenter.toHTTP),
    }
  }
}

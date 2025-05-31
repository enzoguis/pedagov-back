import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UsePipes,
} from '@nestjs/common'
import { CreateTeacherUseCase } from '@/domain/occurrences/application/use-cases/create-teacher'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { TeacherStatusEnum } from '@/domain/occurrences/enterprise/entities/teacher'
import { TeacherPresenter } from '../presenters/teacher-presenter'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { CreateTeacherDto } from '../dtos/create-teacher-dto'

const createTeacherBodySchema = z.object({
  name: z.string(),
  status: z.preprocess(
    (val) => (typeof val === 'string' ? val.toUpperCase() : val),
    z.nativeEnum(TeacherStatusEnum)
  ),
})

type CreateTeacherBody = z.infer<typeof createTeacherBodySchema>

@ApiTags('Teachers')
@Controller('/accounts/teacher')
export class CreateTeacherController {
  constructor(private createTeacher: CreateTeacherUseCase) {}

  @Post()
  @ApiBody({ type: CreateTeacherDto })
  @UsePipes(new ZodValidationPipe(createTeacherBodySchema))
  async handle(@Body() body: CreateTeacherBody) {
    const { name, status } = body

    const result = await this.createTeacher.execute({
      name,
      status,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const { teacher } = result.value

    return { result: TeacherPresenter.toHTTP(teacher) }
  }
}

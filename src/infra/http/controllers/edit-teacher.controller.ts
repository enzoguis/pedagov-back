import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common'
import { EditTeacherUseCase } from '@/domain/occurrences/application/use-cases/edit-teacher'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { TeacherPresenter } from '../presenters/teacher-presenter'
import { ApiTags } from '@nestjs/swagger'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'

const editTeacherBodySchema = z.object({
  name: z.string(),
  status: z.preprocess(
    (val) => (typeof val === 'string' ? val.toUpperCase() : val),
    z.nativeEnum(UserStatusEnum)
  ),
})

type EditTeacherBody = z.infer<typeof editTeacherBodySchema>

const bodyValidationPipe = new ZodValidationPipe(editTeacherBodySchema)

@ApiTags('Teachers')
@Controller('/teachers/:id')
export class EditTeacherController {
  constructor(private editTeacher: EditTeacherUseCase) {}

  @Put()
  async handle(
    @Param('id') teacherId: string,
    @Body(bodyValidationPipe) body: EditTeacherBody
  ) {
    const { name, status } = body

    const result = await this.editTeacher.execute({
      name,
      status,
      teacherId,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    return { result: TeacherPresenter.toHTTP(result.value.teacher) }
  }
}

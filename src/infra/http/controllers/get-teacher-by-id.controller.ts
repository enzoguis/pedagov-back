import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { GetTeacherByIdUseCase } from '@/domain/occurrences/application/use-cases/get-teacher-by-id'
import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { TeacherPresenter } from '../presenters/teacher-presenter'

@Controller('teachers/:id')
@ApiTags('Teachers')
export class GetTeacherByIdController {
  constructor(private getTeacherById: GetTeacherByIdUseCase) {}

  @Get()
  async handle(@Param('id') teacherId: string) {
    const result = await this.getTeacherById.execute({
      teacherId,
    })

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case ResourceNotFoundError:
          throw new NotFoundException(error.message)
        default:
          throw new BadRequestException(error.message)
      }
    }

    return {
      result: TeacherPresenter.toHTTP(result.value.teacher),
    }
  }
}

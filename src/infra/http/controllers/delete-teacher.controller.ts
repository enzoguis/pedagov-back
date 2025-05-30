import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  NotFoundException,
  Param,
} from '@nestjs/common'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { DeleteTeacherUseCase } from '@/domain/occurrences/application/use-cases/delete-teacher'

@Controller('/teachers/:id')
export class DeleteTeacherController {
  constructor(private deleteTeacher: DeleteTeacherUseCase) {}

  @Delete()
  @HttpCode(204)
  async handle(@Param('id') teacherId: string) {
    const result = await this.deleteTeacher.execute({
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
  }
}

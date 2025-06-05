import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { GetStudentWithOccurrencesUseCase } from '@/domain/occurrences/application/use-cases/get-student-with-occurrences'
import { StudentWithOccurrencePresenter } from '../presenters/student-with-occurrences-presenter'
import { GetStudentWithOccurrencesWrapperDto } from '../dtos/get-student-with-occurrences-response-dto'

@Controller('students/:id')
@ApiTags('Students')
export class GetStudentWithOccurrencesController {
  constructor(
    private getStudentWithOccurrences: GetStudentWithOccurrencesUseCase
  ) {}

  @Get()
  @ApiResponse({ type: GetStudentWithOccurrencesWrapperDto })
  async handle(@Param('id') studentId: string) {
    const result = await this.getStudentWithOccurrences.execute({
      studentId,
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
      result: StudentWithOccurrencePresenter.toHTTP(result.value.student),
    }
  }
}

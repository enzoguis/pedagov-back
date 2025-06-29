import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { StudentPresenter } from '../presenters/student-presenter'
import { StudentDto } from '../dtos/fetch-students-dto'
import { FetchAllStudentsUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-students'

@Controller('/students')
@ApiTags('Students')
export class FetchAllStudentsController {
  constructor(private fetchAllStudents: FetchAllStudentsUseCase) {}

  @Get()
  @ApiResponse({ type: [StudentDto] })
  async handle() {
    const result = await this.fetchAllStudents.execute({})

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const { students } = result.value

    return {
      result: students.map(StudentPresenter.toHTTP),
    }
  }
}

import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { StudentWithGroupDto } from '../dtos/fetch-students-dto'
import { FetchAllStudentsUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-students'
import { StudentWithGroupPresenter } from '../presenters/student-with-group-presenter'

@Controller('/students')
@ApiTags('Students')
export class FetchAllStudentsController {
  constructor(private fetchAllStudents: FetchAllStudentsUseCase) {}

  @Get()
  @ApiResponse({ type: [StudentWithGroupDto] })
  async handle() {
    const result = await this.fetchAllStudents.execute({})

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const { students } = result.value

    return {
      result: students.map(StudentWithGroupPresenter.toHTTP),
    }
  }
}

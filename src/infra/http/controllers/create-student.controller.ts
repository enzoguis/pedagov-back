import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Post,
  UsePipes,
} from '@nestjs/common'
import { CreateStudentUseCase } from '@/domain/occurrences/application/use-cases/create-student'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { StudentPresenter } from '../presenters/student-presenter'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { CreateStudentDto } from '../dtos/create-student-dto'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'
import { StudentAlreadyExistsError } from '@/domain/occurrences/application/use-cases/errors/student-already-exists-error'

const createStudentBodySchema = z.object({
  name: z.string(),
  status: z.preprocess(
    (val) => (typeof val === 'string' ? val.toUpperCase() : val),
    z.nativeEnum(UserStatusEnum)
  ),
  groupId: z.string().uuid(),
  cpf: z.string(),
  responsibleEmail: z.string().email(),
  responsiblePhone: z.string(),
})

type CreateStudentBody = z.infer<typeof createStudentBodySchema>

@ApiTags('Students')
@Controller('/accounts/student')
export class CreateStudentController {
  constructor(private createStudent: CreateStudentUseCase) {}

  @Post()
  @ApiBody({ type: CreateStudentDto })
  @UsePipes(new ZodValidationPipe(createStudentBodySchema))
  async handle(@Body() body: CreateStudentBody) {
    const { name, cpf, groupId, responsibleEmail, responsiblePhone, status } =
      body

    const result = await this.createStudent.execute({
      name,
      cpf,
      groupId,
      responsibleEmail,
      responsiblePhone,
      status,
    })

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case StudentAlreadyExistsError:
          throw new ConflictException(error.message)
        default:
          throw new BadRequestException(error.message)
      }
    }

    const { student } = result.value

    return { result: StudentPresenter.toHTTP(student) }
  }
}

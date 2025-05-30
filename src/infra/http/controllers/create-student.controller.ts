import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UsePipes,
} from '@nestjs/common'
import { CreateStudentUseCase } from '@/domain/occurrences/application/use-cases/create-student'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { StudentAlreadyExistsError } from '@/domain/occurrences/application/use-cases/errors/student-already-exists-error'

const createStudentBodySchema = z.object({
  name: z.string(),
  groupId: z.string().uuid(),
  cpf: z.string(),
  responsibleEmail: z.string().email(),
  responsiblePhone: z.string(),
})

type CreateStudentBody = z.infer<typeof createStudentBodySchema>

@Controller('/accounts/student')
export class CreateStudentController {
  constructor(private createStudent: CreateStudentUseCase) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createStudentBodySchema))
  async handle(@Body() body: CreateStudentBody) {
    const { name, cpf, groupId, responsibleEmail, responsiblePhone } = body

    const result = await this.createStudent.execute({
      name,
      cpf,
      groupId,
      responsibleEmail,
      responsiblePhone,
    })

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case StudentAlreadyExistsError:
          throw new Error('Estudante ja existe irmão')
        default:
          throw new BadRequestException('Sei la oq deu')
      }
    }

    const { student } = result.value

    return { result: student }
  }
}

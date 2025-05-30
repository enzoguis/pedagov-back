import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UsePipes,
} from '@nestjs/common'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { z } from 'zod'
import { Public } from '@/infra/auth/public'
import { WrongCredentialsError } from '@/domain/authentication/application/use-cases/errors/wrong-credentials-error'
import { CreateGroupUseCase } from '@/domain/occurrences/application/use-cases/create-group'
import { GroupShiftsEnum } from '@/domain/occurrences/enterprise/entities/group'

const createGroupBodySchema = z.object({
  name: z.string(),
  teacherId: z.string().uuid(),
  studentsIds: z.array(z.string().uuid()),
  shift: z.preprocess(
    (val) => (typeof val === 'string' ? val.toUpperCase() : val),
    z.nativeEnum(GroupShiftsEnum)
  ),
})

type CreateGroupBody = z.infer<typeof createGroupBodySchema>

@Controller('/groups')
@Public()
export class CreateGroupController {
  constructor(private createGroup: CreateGroupUseCase) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createGroupBodySchema))
  async handle(@Body() body: CreateGroupBody) {
    const { name, shift, studentsIds, teacherId } = body

    const result = await this.createGroup.execute({
      name,
      shift,
      studentsIds,
      teacherId,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const { group } = result.value

    return {
      result: group,
    }
  }
}

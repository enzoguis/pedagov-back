import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UsePipes,
} from '@nestjs/common'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { z } from 'zod'
import { CreateGroupUseCase } from '@/domain/occurrences/application/use-cases/create-group'
import { GroupShiftsEnum } from '@/domain/occurrences/enterprise/entities/group'
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateGroupDto } from '../dtos/create-group-dto'
import { GroupPresenter } from '../presenters/group-presenter'

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

@ApiTags('Groups')
@Controller('/groups')
export class CreateGroupController {
  constructor(private createGroup: CreateGroupUseCase) {}

  @Post()
  @ApiBody({ type: CreateGroupDto })
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
      result: GroupPresenter.toHTTP(group),
    }
  }
}

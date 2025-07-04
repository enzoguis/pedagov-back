import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { z } from 'zod'
import { EditGroupUseCase } from '@/domain/occurrences/application/use-cases/edit-group'
import { GroupShiftsEnum } from '@/domain/occurrences/enterprise/entities/group'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { EditGroupDto } from '../dtos/edit-group-dto'

const editGroupBodySchema = z.object({
  name: z.string(),
  teacherId: z.string().uuid(),
  shift: z.preprocess(
    (val) => (typeof val === 'string' ? val.toUpperCase() : val),
    z.nativeEnum(GroupShiftsEnum)
  ),
})

type EditGroupBody = z.infer<typeof editGroupBodySchema>

const bodyValidationPipe = new ZodValidationPipe(editGroupBodySchema)

@ApiTags('Groups')
@Controller('/groups/:id')
export class EditGroupController {
  constructor(private editGroup: EditGroupUseCase) {}

  @Put()
  @HttpCode(201)
  @ApiBody({ type: EditGroupDto })
  async handle(
    @Body(bodyValidationPipe) body: EditGroupBody,
    @Param('id') groupId: string
  ) {
    const { name, shift, teacherId } = body

    const result = await this.editGroup.execute({
      groupId,
      name,
      shift,
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

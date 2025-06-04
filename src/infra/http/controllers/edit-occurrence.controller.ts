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
import { EditOccurrenceUseCase } from '@/domain/occurrences/application/use-cases/edit-occurrence'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { EditOccurrenceDto } from '../dtos/edit-occurrence-dto'
import { UserPayload } from '@/infra/auth/jwt-strategy'

const editOccurrenceBodySchema = z.object({
  title: z.string().min(1, 'The title must have at least 1 character'),
  description: z.string(),
  studentsIds: z.array(z.string().uuid()),
  attendeesIds: z.array(z.string().uuid()),
  attachmentsIds: z.array(z.string().uuid()),
  teacherId: z.string().uuid(),
  type: z.preprocess(
    (val) => (typeof val === 'string' ? val.toUpperCase() : val),
    z.nativeEnum(OccurrenceTypeEnum)
  ),
})

type EditOccurrenceBody = z.infer<typeof editOccurrenceBodySchema>

const bodyValidationPipe = new ZodValidationPipe(editOccurrenceBodySchema)

@Controller('/occurrences/:id')
@ApiTags('Occurrences')
export class EditOccurrenceController {
  constructor(private editOccurrence: EditOccurrenceUseCase) {}

  @Put()
  @HttpCode(201)
  @ApiBody({ type: EditOccurrenceDto })
  async handle(
    @Body(bodyValidationPipe) body: EditOccurrenceBody,
    @CurrentUser() editor: UserPayload,
    @Param('id') occurrenceId: string
  ) {
    const {
      attachmentsIds,
      attendeesIds,
      description,
      studentsIds,
      title,
      type,
      teacherId,
    } = body

    const result = await this.editOccurrence.execute({
      occurrenceId,
      attachmentsIds,
      attendeesIds,
      description,
      editorId: editor.sub,
      studentsIds,
      title,
      type,
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

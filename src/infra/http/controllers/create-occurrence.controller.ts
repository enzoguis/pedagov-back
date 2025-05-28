import { CreateOccurrenceUseCase } from '@/domain/occurrences/application/use-cases/create-occurrence'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth-guard'
import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { UserPayload } from '@/infra/auth/jwt-strategy'

const createOccurrenceBodySchema = z.object({
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
  shouldSendEmail: z.boolean(),
})

type CreateOccurrenceBody = z.infer<typeof createOccurrenceBodySchema>

const bodyValidationPipe = new ZodValidationPipe(createOccurrenceBodySchema)

@Controller('/occurrences')
export class CreateOccurrenceController {
  constructor(private createOccurrence: CreateOccurrenceUseCase) {}

  @Post()
  async handle(
    @CurrentUser() user: UserPayload,
    @Body(bodyValidationPipe) body: CreateOccurrenceBody
  ) {
    const {
      attachmentsIds,
      attendeesIds,
      description,
      shouldSendEmail,
      studentsIds,
      teacherId,
      title,
      type,
    } = body

    const result = await this.createOccurrence.execute({
      attachmentsIds,
      attendeesIds,
      authorId: user.sub,
      description,
      shouldSendEmail,
      studentsIds,
      teacherId,
      title,
      type,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    return { result: result.value }
  }
}

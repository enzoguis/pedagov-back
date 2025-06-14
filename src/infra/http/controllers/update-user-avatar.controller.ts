import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Post,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { ApiTags } from '@nestjs/swagger'
import { UploadAvatarUseCase } from '@/domain/authentication/application/use-cases/upload-avatar'

const updateUserAvatarBodySchema = z.object({
  attachmentUrl: z.string(),
})

type UpdateUserAvatarBody = z.infer<typeof updateUserAvatarBodySchema>

const bodyValidationPipe = new ZodValidationPipe(updateUserAvatarBodySchema)

@ApiTags('Attachments')
@Controller('/user/:id/avatar')
export class UpdateUserAvatarController {
  constructor(private updateUserAvatar: UploadAvatarUseCase) {}

  @Post()
  async handle(
    @Param('id') userId: string,
    @Body(bodyValidationPipe) body: UpdateUserAvatarBody
  ) {
    const { attachmentUrl } = body

    const result = await this.updateUserAvatar.execute({
      avatar: attachmentUrl,
      userId,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    return {}
  }
}

import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  Param,
} from '@nestjs/common'
import { DeleteGroupUseCase } from '@/domain/occurrences/application/use-cases/delete-group'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Groups')
@Controller('/groups/:id')
export class DeleteGroupController {
  constructor(private deleteGroup: DeleteGroupUseCase) {}

  @Delete()
  @HttpCode(204)
  async handle(@Param('id') groupId: string) {
    const result = await this.deleteGroup.execute({
      groupId,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }
  }
}

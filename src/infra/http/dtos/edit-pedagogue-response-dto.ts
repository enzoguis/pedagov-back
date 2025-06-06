import { ApiProperty } from '@nestjs/swagger'
import { PedagogueRoleEnum } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'

export class EditPedagogueResponseDto {
  @ApiProperty({ example: 'b21432af-20f7-48a9-9f32-6b90a9ccf041' })
  id!: string

  @ApiProperty({ example: 'Maria Silva' })
  name!: string

  @ApiProperty({ enum: UserStatusEnum, example: UserStatusEnum.ACTIVE })
  status!: UserStatusEnum

  @ApiProperty({ enum: PedagogueRoleEnum, example: PedagogueRoleEnum.COMMON })
  role!: PedagogueRoleEnum
}

export class EditPedagogueResponseWrapperDto {
  @ApiProperty({ type: EditPedagogueResponseDto })
  result!: EditPedagogueResponseDto
}

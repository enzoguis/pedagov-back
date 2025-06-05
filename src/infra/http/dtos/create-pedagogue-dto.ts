import { ApiProperty } from '@nestjs/swagger'
import { PedagogueRoleEnum } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'

export class CreatePedagogueDto {
  @ApiProperty({ example: 'Maria Silva' })
  name!: string

  @ApiProperty({ example: 'pedagogue@example.com' })
  email!: string

  @ApiProperty({
    enum: UserStatusEnum,
    example: UserStatusEnum.ACTIVE,
    description: 'Status do pedagogo (ACTIVE, INACTIVE, etc.)',
  })
  status!: UserStatusEnum

  @ApiProperty({
    enum: PedagogueRoleEnum,
    example: PedagogueRoleEnum.ADMIN,
    description: 'Role of the pedagogue',
  })
  role!: PedagogueRoleEnum
}

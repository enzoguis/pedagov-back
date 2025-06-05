import { ApiProperty } from '@nestjs/swagger'
import { PedagogueRoleEnum } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'

export class EditPedagogueDto {
  @ApiProperty({ example: 'Maria Silva', description: 'Nome do pedagogo' })
  name!: string

  @ApiProperty({
    enum: UserStatusEnum,
    example: UserStatusEnum.ACTIVE,
    description: 'Status do usuário',
  })
  status!: UserStatusEnum

  @ApiProperty({
    enum: PedagogueRoleEnum,
    example: PedagogueRoleEnum.COMMON,
    description: 'Papel do pedagogo',
  })
  role!: PedagogueRoleEnum
}

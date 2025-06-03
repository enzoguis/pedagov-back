import { ApiProperty } from '@nestjs/swagger'
import { PedagogueRoleEnum } from '@/domain/occurrences/enterprise/entities/pedagogue'

export class CreatePedagogueDto {
  @ApiProperty({ example: 'Maria Silva' })
  name!: string

  @ApiProperty({ example: 'pedagogue@example.com' })
  email!: string

  @ApiProperty({
    enum: PedagogueRoleEnum,
    example: PedagogueRoleEnum.ADMIN,
    description: 'Role of the pedagogue',
  })
  role!: PedagogueRoleEnum
}

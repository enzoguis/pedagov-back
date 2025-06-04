import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'
import { ApiProperty } from '@nestjs/swagger'

export class CreateTeacherDto {
  @ApiProperty({ example: 'Maria Silva' })
  name!: string

  @ApiProperty({
    enum: UserStatusEnum,
    example: UserStatusEnum.ACTIVE,
    description: 'Status do professor (ACTIVE, INACTIVE, etc.)',
  })
  status!: UserStatusEnum
}

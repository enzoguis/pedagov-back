import { ApiProperty } from '@nestjs/swagger'
import { TeacherStatusEnum } from '@/domain/occurrences/enterprise/entities/teacher'

export class CreateTeacherDto {
  @ApiProperty({ example: 'Maria Silva' })
  name!: string

  @ApiProperty({
    enum: TeacherStatusEnum,
    example: TeacherStatusEnum.ACTIVE,
    description: 'Status do professor (ACTIVE, INACTIVE, etc.)',
  })
  status!: TeacherStatusEnum
}

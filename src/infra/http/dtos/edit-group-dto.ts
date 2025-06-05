import { ApiProperty } from '@nestjs/swagger'
import { GroupShiftsEnum } from '@/domain/occurrences/enterprise/entities/group'

export class EditGroupDto {
  @ApiProperty({
    example: 'Turma A - Matemática',
    description: 'Nome da turma',
  })
  name!: string

  @ApiProperty({
    format: 'uuid',
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'UUID do professor responsável',
  })
  teacherId!: string

  @ApiProperty({
    enum: GroupShiftsEnum,
    example: GroupShiftsEnum.MORNING,
    description: 'Turno da turma',
  })
  shift!: GroupShiftsEnum
}

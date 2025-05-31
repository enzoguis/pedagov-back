import { ApiProperty } from '@nestjs/swagger'
import { GroupShiftsEnum } from '@/domain/occurrences/enterprise/entities/group'

export class CreateGroupDto {
  @ApiProperty({ example: 'Group A' })
  name!: string

  @ApiProperty({
    format: 'uuid',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  teacherId!: string

  @ApiProperty({
    type: [String],
    example: [
      '123e4567-e89b-12d3-a456-426614174001',
      '123e4567-e89b-12d3-a456-426614174002',
    ],
    description: 'Array of student UUIDs',
  })
  studentsIds!: string[]

  @ApiProperty({
    enum: GroupShiftsEnum,
    example: GroupShiftsEnum.MORNING,
    description: 'Shift of the group',
  })
  shift!: GroupShiftsEnum
}

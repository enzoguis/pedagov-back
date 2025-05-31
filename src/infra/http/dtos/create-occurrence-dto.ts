import { ApiProperty } from '@nestjs/swagger'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'

export class CreateOccurrenceDto {
  @ApiProperty({ example: 'Late submission' })
  title!: string

  @ApiProperty({ example: 'Student submitted assignment late due to...' })
  description!: string

  @ApiProperty({
    type: [String],
    example: [
      '123e4567-e89b-12d3-a456-426614174001',
      '123e4567-e89b-12d3-a456-426614174002',
    ],
    description: 'Array of UUIDs for students',
  })
  studentsIds!: string[]

  @ApiProperty({
    type: [String],
    example: [
      '223e4567-e89b-12d3-a456-426614174003',
      '223e4567-e89b-12d3-a456-426614174004',
    ],
    description: 'Array of UUIDs for attendees',
  })
  attendeesIds!: string[]

  @ApiProperty({
    type: [String],
    example: ['323e4567-e89b-12d3-a456-426614174005'],
    description: 'Array of UUIDs for attachments',
  })
  attachmentsIds!: string[]

  @ApiProperty({
    format: 'uuid',
    example: '423e4567-e89b-12d3-a456-426614174006',
  })
  teacherId!: string

  @ApiProperty({
    enum: OccurrenceTypeEnum,
    example: OccurrenceTypeEnum.ABSENCES,
    description: 'Type of the occurrence',
  })
  type!: OccurrenceTypeEnum

  @ApiProperty({
    example: true,
    description: 'Indicates whether an email should be sent',
  })
  shouldSendEmail!: boolean
}

import { ApiPropertyOptional } from '@nestjs/swagger'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'

export class FetchAllOccurrencesQueryDto {
  @ApiPropertyOptional({
    example: 1,
    description: 'Page number',
  })
  page!: number

  @ApiPropertyOptional({
    example: 10,
    description: 'Number of occurrences per page',
  })
  limit?: number

  @ApiPropertyOptional({
    enum: OccurrenceTypeEnum,
    example: OccurrenceTypeEnum.ABSENCES,
    description: 'Filter by occurrence type',
  })
  type?: OccurrenceTypeEnum

  @ApiPropertyOptional({
    example: '7e8b1234-5678-4d9c-a123-b456c78d90ef',
    description: 'Filter by student ID (UUID)',
  })
  studentId?: string

  @ApiPropertyOptional({
    example: '5a6f7890-1234-4d56-a789-0b1c2d3e4f5a',
    description: 'Filter by group ID (UUID)',
  })
  groupId?: string

  @ApiPropertyOptional({
    example: '2024-01-01T00:00:00.000Z',
    description: 'Filter by creation date in ISO 8601 format',
  })
  createdAt?: string
}

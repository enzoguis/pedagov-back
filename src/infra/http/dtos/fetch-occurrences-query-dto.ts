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
    example: 'absence',
    description: `Search term that can be:
    - A general text to search in title, description, author, teacher or student names
    - A date in "YYYY-MM-DD" format to filter occurrences created on that date
    - An occurrence type, e.g., ${Object.values(OccurrenceTypeEnum).join(
      ', '
    )}`,
  })
  searchTerm?: string
}

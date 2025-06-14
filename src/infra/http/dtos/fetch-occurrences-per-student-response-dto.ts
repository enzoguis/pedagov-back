import { ApiProperty } from '@nestjs/swagger'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'

export class FetchOccurrencesPerStudentDto {
  @ApiProperty({
    example: '3f29e8e0-9f84-4d53-9a45-5f3b4c6a1a0d',
    description: 'Occurrence ID',
  })
  occurrenceId!: string

  @ApiProperty({
    example: 'a8c88d62-1785-47db-a6bc-b7c5e58c2820',
    description: 'Student ID',
  })
  studentId!: string

  @ApiProperty({
    example: 'John Doe',
    description: 'Student name',
  })
  student!: string

  @ApiProperty({
    example: 'Meeting with parents',
    description: 'Title of the occurrence',
  })
  title!: string

  @ApiProperty({
    enum: OccurrenceTypeEnum,
    example: OccurrenceTypeEnum.ABSENCES,
    description: 'Type of the occurrence',
  })
  type!: OccurrenceTypeEnum

  @ApiProperty({
    example: '2025-06-05T10:20:30Z',
    description: 'Creation date of the occurrence in ISO format',
  })
  createdAt!: string
}

export class OccurrenceWithStudentNameResponseDto {
  @ApiProperty({
    type: [FetchOccurrencesPerStudentDto],
  })
  result!: FetchOccurrencesPerStudentDto[]
}

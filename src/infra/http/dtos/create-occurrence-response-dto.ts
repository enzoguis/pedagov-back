import { ApiProperty } from '@nestjs/swagger'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'

export class CreateOccurrenceResponseDto {
  @ApiProperty({
    example: '3f29e8e0-9f84-4d53-9a45-5f3b4c6a1a0d',
    description: 'ID da ocorrência',
  })
  id!: string

  @ApiProperty({
    example: '3f29e8e0-9f84-4d53-9a45-5f3b4c6a1a0d',
    description: 'ID do autor da ocorrência',
  })
  authorId!: string

  @ApiProperty({
    example: 'Meeting with parents',
    description: 'Título da ocorrência',
  })
  title!: string

  @ApiProperty({
    example: 'Discuss student progress',
    description: 'Descrição da ocorrência',
  })
  description!: string

  @ApiProperty({
    enum: OccurrenceTypeEnum,
    example: OccurrenceTypeEnum.ABSENCES,
    description: 'Tipo da ocorrência',
  })
  type!: OccurrenceTypeEnum

  @ApiProperty({
    example: '2025-06-05T10:20:30Z',
    description: 'Data de criação da ocorrência',
  })
  createdAt!: string
}

export class CreateOccurrenceResponseWrapperDto {
  @ApiProperty({ type: CreateOccurrenceResponseDto })
  result!: CreateOccurrenceResponseDto
}

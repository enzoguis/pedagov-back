import { ApiPropertyOptional } from '@nestjs/swagger'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'

export class FetchAllOccurrencesQueryDto {
  @ApiPropertyOptional({
    example: 1,
    description: 'Número da página',
  })
  page!: number

  @ApiPropertyOptional({
    example: 10,
    description: 'Quantidade de ocorrências por página',
  })
  limit?: number

  @ApiPropertyOptional({
    enum: OccurrenceTypeEnum,
    example: OccurrenceTypeEnum.ABSENCES,
    description: 'Filtrar por tipo de ocorrência',
  })
  type?: OccurrenceTypeEnum

  @ApiPropertyOptional({
    example: '7e8b1234-5678-4d9c-a123-b456c78d90ef',
    description: 'Filtrar por ID do aluno (UUID)',
  })
  studentId?: string
}

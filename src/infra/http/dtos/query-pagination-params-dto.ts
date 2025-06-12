import { ApiProperty } from '@nestjs/swagger'

export class QueryPaginationParamsDto {
  @ApiProperty({ example: 1, description: 'Page number' })
  page!: number

  @ApiProperty({
    example: 10,
    description: 'Number of items per page',
    required: false,
  })
  limit?: number
}

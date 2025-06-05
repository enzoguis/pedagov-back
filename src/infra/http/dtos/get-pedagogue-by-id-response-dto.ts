import { ApiProperty } from '@nestjs/swagger'

export class PedagogueDto {
  @ApiProperty({ example: 'abc123', description: 'ID do pedagogo' })
  id!: string

  @ApiProperty({ example: 'Maria Souza', description: 'Nome do pedagogo' })
  name!: string

  @ApiProperty({ example: 'active', description: 'Status do pedagogo' })
  status!: string

  @ApiProperty({ example: 'pedagogue', description: 'Cargo do pedagogo' })
  role!: string
}

export class GetPedagogueByIdResponseDto {
  @ApiProperty({ type: PedagogueDto })
  result!: PedagogueDto
}

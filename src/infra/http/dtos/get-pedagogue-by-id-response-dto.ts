import { ApiProperty } from '@nestjs/swagger'

export class PedagogueDto {
  @ApiProperty({
    example: '7e8b1234-5678-4d9c-a123-b456c78d90ef',
    description: 'Pedagogue ID (UUID)',
  })
  id!: string

  @ApiProperty({ example: 'Maria Souza', description: 'Pedagogue name' })
  name!: string

  @ApiProperty({ example: 'active', description: 'Pedagogue status' })
  status!: string

  @ApiProperty({ example: 'pedagogue', description: 'Pedagogue role' })
  role!: string
}

export class GetPedagogueByIdResponseDto {
  @ApiProperty({ type: PedagogueDto })
  result!: PedagogueDto
}

import { ApiProperty } from '@nestjs/swagger'

export class CreateStudentDto {
  @ApiProperty({ example: 'João da Silva' })
  name!: string

  @ApiProperty({ format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' })
  groupId!: string

  @ApiProperty({ example: '123.456.789-00', description: 'CPF do aluno' })
  cpf!: string

  @ApiProperty({ example: 'responsavel@email.com' })
  responsibleEmail!: string

  @ApiProperty({ example: '+55 11 99999-9999' })
  responsiblePhone!: string
}

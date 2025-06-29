import { ApiProperty } from '@nestjs/swagger'

export class StudentDto {
  @ApiProperty({
    example: '7e8b1234-5678-4d9c-a123-b456c78d90ef',
    description: 'Student ID (UUID)',
  })
  id!: string

  @ApiProperty({ example: 'João Silva', description: 'Student name' })
  name!: string

  @ApiProperty({ example: '123.456.789-00', description: 'Student CPF' })
  cpf!: string

  @ApiProperty({
    example: '8f1e1234-5678-4d9c-a123-b456c78d90ef',
    description: 'Group ID (UUID) to which the student belongs',
  })
  groupId!: string

  @ApiProperty({
    example: 'responsible@email.com',
    description: 'Responsible person’s email',
  })
  responsibleEmail!: string

  @ApiProperty({
    example: '+55 11 91234-5678',
    description: 'Responsible person’s phone number',
  })
  responsiblePhone!: string

  @ApiProperty({ example: 'active', description: 'Student status' })
  status!: string
}

export class GetStudentByIdResponseDto {
  @ApiProperty({ type: StudentDto })
  result!: StudentDto
}

import { ApiProperty } from '@nestjs/swagger'

export class StudentWithGroupDto {
  @ApiProperty({
    example: '7e8b1234-5678-4d9c-a123-b456c78d90ef',
    description: 'Student ID (UUID)',
  })
  studentId!: string

  @ApiProperty({ example: 'João Silva', description: 'Student name' })
  student!: string

  @ApiProperty({
    example: '8f1e1234-5678-4d9c-a123-b456c78d90ef',
    description: 'Group ID (UUID)',
  })
  groupId!: string

  @ApiProperty({ example: 'Group A', description: 'Group name' })
  group!: string

  @ApiProperty({ example: 'active', description: 'Student status' })
  status!: string

  @ApiProperty({ example: '123.456.789-00', description: 'Student CPF' })
  cpf!: string
}

export class GetStudentWithGroupResponseDto {
  @ApiProperty({ type: StudentWithGroupDto })
  result!: StudentWithGroupDto
}

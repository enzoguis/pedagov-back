import { ApiProperty } from '@nestjs/swagger'

class StudentIdDto {
  @ApiProperty({
    example: 'e4a9c45b-c8d6-4b63-a631-7d6fc48d5abc',
    description: 'Student ID (UUID)',
  })
  value!: string
}

class OccurrenceDto {
  @ApiProperty({
    example: '16f817c4-739b-433c-ae60-283d41dac984',
    description: 'Occurrence ID (UUID)',
  })
  id!: string

  @ApiProperty({
    example: 'Adduco fuga decens.',
    description: 'Title of the occurrence',
  })
  title!: string

  @ApiProperty({
    example:
      'Texo ipsa uberrime administratio artificiose cubicularis denuo repellendus.',
    description: 'Description of the occurrence',
  })
  description!: string

  @ApiProperty({
    example: 'ABSENCES',
    description: 'Type of the occurrence',
  })
  type!: string

  @ApiProperty({
    example: '2024-11-01T10:15:30.000Z',
    description: 'Date and time when the occurrence was created (ISO 8601)',
  })
  createdAt!: string
}

export class GetStudentWithOccurrencesResponseDto {
  @ApiProperty({ type: StudentIdDto, description: 'Student ID object' })
  studentId!: StudentIdDto

  @ApiProperty({
    example: 'João da Silva',
    description: 'Student full name',
  })
  student!: string

  @ApiProperty({
    example: 'a8ef401a-7ac5-4174-a6fa-727ced6911bd',
    description: 'Group ID (UUID)',
  })
  groupId!: string

  @ApiProperty({
    example: 'Turma A - Matemática',
    description: 'Group name',
  })
  group!: string

  @ApiProperty({
    example: '11505628032',
    description: 'Student CPF number (Brazilian ID)',
  })
  cpf!: string

  @ApiProperty({
    example: 'responsavel@email.com',
    description: 'Responsible person email address',
  })
  responsibleEmail!: string

  @ApiProperty({
    example: '+55 11 91234-5678',
    description: 'Responsible person phone number',
  })
  responsiblePhone!: string

  @ApiProperty({
    example: 'ACTIVE',
    description: 'Student status',
  })
  status!: string

  @ApiProperty({
    type: [OccurrenceDto],
    description: 'List of occurrences related to the student',
  })
  occurrences!: OccurrenceDto[]
}

export class GetStudentWithOccurrencesWrapperDto {
  @ApiProperty({
    type: GetStudentWithOccurrencesResponseDto,
    description: 'Response containing student and their occurrences',
  })
  result!: GetStudentWithOccurrencesResponseDto
}

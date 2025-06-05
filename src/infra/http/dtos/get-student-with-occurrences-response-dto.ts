import { ApiProperty } from '@nestjs/swagger'

class StudentIdDto {
  @ApiProperty({ example: 'e4a9c45b-c8d6-4b63-a631-7d6fc48d5abc' })
  value!: string
}

class OccurrenceDto {
  @ApiProperty({ example: '16f817c4-739b-433c-ae60-283d41dac984' })
  id!: string

  @ApiProperty({ example: 'Adduco fuga decens.' })
  title!: string

  @ApiProperty({
    example:
      'Texo ipsa uberrime administratio artificiose cubicularis denuo repellendus.',
  })
  description!: string

  @ApiProperty({ example: 'ABSENCES' })
  type!: string

  @ApiProperty({ example: '2024-11-01T10:15:30.000Z' })
  createdAt!: string
}

export class GetStudentWithOccurrencesResponseDto {
  @ApiProperty({ type: StudentIdDto })
  studentId!: StudentIdDto

  @ApiProperty({ example: 'João da Silva' })
  student!: string

  @ApiProperty({ example: 'a8ef401a-7ac5-4174-a6fa-727ced6911bd' })
  groupId!: string

  @ApiProperty({ example: 'Turma A - Matemática' })
  group!: string

  @ApiProperty({ example: '11505628032' })
  cpf!: string

  @ApiProperty({ example: 'responsavel@email.com' })
  responsibleEmail!: string

  @ApiProperty({ example: '+55 11 91234-5678' })
  responsiblePhone!: string

  @ApiProperty({ example: 'ACTIVE' })
  status!: string

  @ApiProperty({ type: [OccurrenceDto] })
  occurrences!: OccurrenceDto[]
}

export class GetStudentWithOccurrencesWrapperDto {
  @ApiProperty({ type: GetStudentWithOccurrencesResponseDto })
  result!: GetStudentWithOccurrencesResponseDto
}

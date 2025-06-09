import { ApiProperty } from '@nestjs/swagger'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'

class AttachmentDto {
  @ApiProperty({ example: 'attachment-id-123', description: 'ID do anexo' })
  id!: string

  @ApiProperty({ example: 'Atividade Avaliativa', description: 'Título do anexo' })
  title!: string

  @ApiProperty({ example: 'https://example.com/arquivo.pdf', description: 'URL do anexo' })
  url!: string
}

class AttendeeDto {
  @ApiProperty({ example: 'attendee-id-456', description: 'ID do participante' })
  id!: string

  @ApiProperty({ example: 'João Silva', description: 'Nome do participante' })
  name!: string
}

class StudentDto {
  @ApiProperty({ example: 'student-id-789', description: 'ID do aluno' })
  id!: string

  @ApiProperty({ example: 'Maria Oliveira', description: 'Nome do aluno' })
  name!: string

  @ApiProperty({ example: '123.456.789-00', description: 'CPF do aluno' })
  cpf!: string

  @ApiProperty({ example: 'group-id-001', description: 'ID do grupo do aluno' })
  groupId!: string

  @ApiProperty({ example: 'responsavel@email.com', description: 'Email do responsável' })
  responsibleEmail!: string

  @ApiProperty({ example: '+55 11 91234-5678', description: 'Telefone do responsável' })
  responsiblePhone!: string

  @ApiProperty({ example: 'ACTIVE', description: 'Status do aluno' })
  status!: string
}

export class OccurrenceDetailsResponseDto {
  @ApiProperty({ example: 'occurrence-id-001', description: 'ID da ocorrência' })
  occurrenceId!: string

  @ApiProperty({ example: 'author-id-001', description: 'ID do autor da ocorrência' })
  authorId!: string

  @ApiProperty({ example: 'Ana Souza', description: 'Nome do autor da ocorrência' })
  author!: string

  @ApiProperty({ example: 'teacher-id-002', description: 'ID do professor responsável' })
  teacherId!: string

  @ApiProperty({ example: 'Carlos Mendes', description: 'Nome do professor responsável' })
  teacher!: string

  @ApiProperty({ example: 'Reunião com responsáveis', description: 'Título da ocorrência' })
  title!: string

  @ApiProperty({ example: 'Discussão sobre desempenho escolar', description: 'Descrição da ocorrência' })
  description!: string

  @ApiProperty({
    enum: OccurrenceTypeEnum,
    example: OccurrenceTypeEnum.ABSENCES,
    description: 'Tipo da ocorrência',
  })
  type!: OccurrenceTypeEnum

  @ApiProperty({ type: [StudentDto], description: 'Alunos envolvidos na ocorrência' })
  students!: StudentDto[]

  @ApiProperty({ type: [AttendeeDto], description: 'Participantes da ocorrência' })
  attendees!: AttendeeDto[]

  @ApiProperty({ type: [AttachmentDto], description: 'Anexos da ocorrência' })
  attachments!: AttachmentDto[]

  @ApiProperty({ example: '2025-06-06T12:30:00Z', description: 'Data de criação da ocorrência' })
  createdAt!: string
}

import { ApiProperty } from '@nestjs/swagger'
import { OccurrenceTypeEnum } from '@/domain/occurrences/enterprise/entities/occurrence'

class AttachmentDto {
  @ApiProperty({
    example: '3f29e8e0-9f84-4d53-9a45-5f3b4c6a1a0d',
    description: 'Attachment ID (UUID)',
  })
  id!: string

  @ApiProperty({
    example: 'Assessment Activity',
    description: 'Attachment title',
  })
  title!: string

  @ApiProperty({
    example: 'https://example.com/file.pdf',
    description: 'Attachment URL',
  })
  url!: string
}

class AttendeeDto {
  @ApiProperty({
    example: '4a7f6c2e-0f9b-41e7-89d1-e6d5f8e9a123',
    description: 'Attendee ID (UUID)',
  })
  id!: string

  @ApiProperty({ example: 'John Silva', description: 'Attendee name' })
  name!: string
}

class StudentDto {
  @ApiProperty({
    example: '5b9c0fda-3d26-4f1c-9128-72a3e8d1f456',
    description: 'Student ID (UUID)',
  })
  id!: string

  @ApiProperty({ example: 'Maria Oliveira', description: 'Student name' })
  name!: string

  @ApiProperty({
    example: '123.456.789-00',
    description: 'Student CPF (Brazilian ID)',
  })
  cpf!: string

  @ApiProperty({
    example: '7c4d8e10-9f74-4bfa-afe4-9df9d6f8a2cd',
    description: 'Student group ID (UUID)',
  })
  groupId!: string

  @ApiProperty({
    example: 'guardian@email.com',
    description: "Guardian's email address",
  })
  responsibleEmail!: string

  @ApiProperty({
    example: '+55 11 91234-5678',
    description: "Guardian's phone number",
  })
  responsiblePhone!: string

  @ApiProperty({ example: 'ACTIVE', description: 'Student status' })
  status!: string
}

export class OccurrenceDetailsResponseDto {
  @ApiProperty({
    example: '6d91a7e4-08cb-4b85-9f9b-f2d2b1c5e6f7',
    description: 'Occurrence ID (UUID)',
  })
  occurrenceId!: string

  @ApiProperty({
    example: '7e29f4a2-1c3b-4f7a-9b7d-4a6e7f3d9a1b',
    description: 'Occurrence author ID (UUID)',
  })
  authorId!: string

  @ApiProperty({ example: 'Ana Souza', description: 'Occurrence author name' })
  author!: string

  @ApiProperty({
    example: '8f9c7d3e-6a1b-4c2d-9e3f-5b4a7d8c9e0f',
    description: 'Responsible teacher ID (UUID)',
  })
  teacherId!: string

  @ApiProperty({
    example: 'Carlos Mendes',
    description: 'Responsible teacher name',
  })
  teacher!: string

  @ApiProperty({
    example: 'Meeting with guardians',
    description: 'Occurrence title',
  })
  title!: string

  @ApiProperty({
    example: 'Discussion about student performance',
    description: 'Occurrence description',
  })
  description!: string

  @ApiProperty({
    enum: OccurrenceTypeEnum,
    example: OccurrenceTypeEnum.ABSENCES,
    description: 'Occurrence type',
  })
  type!: OccurrenceTypeEnum

  @ApiProperty({
    type: [StudentDto],
    description: 'Students involved in the occurrence',
  })
  students!: StudentDto[]

  @ApiProperty({
    type: [AttendeeDto],
    description: 'Attendees of the occurrence',
  })
  attendees!: AttendeeDto[]

  @ApiProperty({
    type: [AttachmentDto],
    description: 'Attachments related to the occurrence',
  })
  attachments!: AttachmentDto[]

  @ApiProperty({
    example: '2025-06-06T12:30:00Z',
    description: 'Occurrence creation date',
  })
  createdAt!: string
}

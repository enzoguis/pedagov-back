import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  OccurrenceStudent,
  OccurrenceStudentProps,
} from '@/domain/occurrences/enterprise/entities/occurrence-student'

export function makeOccurrenceStudent(
  override: Partial<OccurrenceStudentProps> = {},
  id?: UniqueEntityID
) {
  const occurrenceStudent = OccurrenceStudent.create(
    {
      occurrenceId: new UniqueEntityID(),
      studentId: new UniqueEntityID(),
      ...override,
    },
    id
  )

  return occurrenceStudent
}

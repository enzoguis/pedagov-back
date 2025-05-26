import { OccurrenceAttachment } from '@/domain/occurrences/enterprise/entities/occurrence-attachment'

export abstract class OccurrenceAttachmentsRepository {
  abstract createMany(students: OccurrenceAttachment[]): Promise<void>
  abstract deleteMany(students: OccurrenceAttachment[]): Promise<void>
  abstract findManyByOccurrenceId(
    occurrenceId: string
  ): Promise<OccurrenceAttachment[]>
}

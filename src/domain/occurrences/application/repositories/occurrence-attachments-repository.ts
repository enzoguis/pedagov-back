import { OccurrenceAttachment } from '@/domain/occurrences/enterprise/entities/occurrence-attachment'

export abstract class OccurrenceAttachmentsRepository {
  abstract createMany(attachments: OccurrenceAttachment[]): Promise<void>
  abstract deleteMany(attachments: OccurrenceAttachment[]): Promise<void>
  abstract findManyByOccurrenceId(
    occurrenceId: string
  ): Promise<OccurrenceAttachment[]>
}

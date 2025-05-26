import { OccurrenceAttachmentsRepository } from '@/domain/occurrences/application/repositories/occurrence-attachments-repository'
import { OccurrenceAttachment } from '@/domain/occurrences/enterprise/entities/occurrence-attachment'

export class InMemoryOccurrenceAttachmentsRepository
  implements OccurrenceAttachmentsRepository
{
  public items: OccurrenceAttachment[] = []

  async createMany(attachments: OccurrenceAttachment[]): Promise<void> {
    this.items.push(...attachments)
  }

  async findManyByOccurrenceId(
    occurrenceId: string
  ): Promise<OccurrenceAttachment[]> {
    const occurrenceAttachments = this.items.filter(
      (item) => item.occurrenceId.toString() === occurrenceId
    )

    return occurrenceAttachments
  }

  async deleteMany(attachments: OccurrenceAttachment[]): Promise<void> {
    const occurrenceAttachments = this.items.filter((item) => {
      return !attachments.some((attachment) => attachment.equals(item))
    })

    this.items = occurrenceAttachments
  }
}

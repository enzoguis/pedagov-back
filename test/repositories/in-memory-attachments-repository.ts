import { AttachmentsRepository } from '@/domain/occurrences/application/repositories/attachments-repository'
import { Attachment } from '@/domain/occurrences/enterprise/entities/attachment'

export class InMemoryAttachmentsRepository implements AttachmentsRepository {
  public items: Attachment[] = []

  async create(attachment: Attachment): Promise<void> {
    this.items.push(attachment)
  }
}

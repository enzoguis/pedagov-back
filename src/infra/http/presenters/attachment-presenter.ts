import { Attachment } from '@/domain/occurrences/enterprise/entities/attachment'

export class AttachmentPresenter {
  static toHTTP(attachment: Attachment) {
    return {
      id: attachment.id.value,
      title: attachment.title,
      url: attachment.url,
    }
  }
}

import { WatchedList } from '@/core/entities/watched-list'
import { OccurrenceAttachment } from './occurrence-attachment'

export class OccurrenceAttachmentsList extends WatchedList<OccurrenceAttachment> {
  compareItems(a: OccurrenceAttachment, b: OccurrenceAttachment): boolean {
    return a.id.equals(b.id)
  }
}

import { WatchedList } from '@/core/entities/watched-list'
import { OccurrenceAttachment } from './occurrence-attachment'

export class OccurrenceAttachmentsList extends WatchedList<OccurrenceAttachment> {
  compareItems(a: OccurrenceAttachment, b: OccurrenceAttachment): boolean {
    return a.id.equals(b.id)
  }

  public equals(other: WatchedList<OccurrenceAttachment>): boolean {
    if (this.currentItems.length !== other.currentItems.length) {
      return false
    }

    return this.currentItems.every((item, index) =>
      this.compareItems(item, other.currentItems[index])
    )
  }
}

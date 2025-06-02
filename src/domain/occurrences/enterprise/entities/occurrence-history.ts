import { Entity } from '@/core/entities/entitity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Change } from './value-objects/change'

export interface OccurrenceHistoryProps {
  editorId: UniqueEntityID
  occurrenceId: UniqueEntityID
  createdAt: Date
  changes: Change[]
}

export class OccurrenceHistory extends Entity<OccurrenceHistoryProps> {
  get editorId() {
    return this.props.editorId
  }

  get occurrenceId() {
    return this.props.occurrenceId
  }

  get createdAt() {
    return this.props.createdAt
  }

  get changes() {
    return this.props.changes
  }

  static create(props: OccurrenceHistoryProps, id?: UniqueEntityID) {
    const history = new OccurrenceHistory(props, id)

    return history
  }
}

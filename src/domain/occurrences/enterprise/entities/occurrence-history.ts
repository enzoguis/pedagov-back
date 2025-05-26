import { Entity } from '@/core/entities/entitity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface OccurrenceHistoryProps {
  editorId: UniqueEntityID
  occurrenceId: UniqueEntityID
  createdAt: Date
  changedFields: string[]
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

  get changedFields() {
    return this.props.changedFields
  }

  static create(props: OccurrenceHistoryProps, id?: UniqueEntityID) {
    const history = new OccurrenceHistory(props, id)

    return history
  }
}

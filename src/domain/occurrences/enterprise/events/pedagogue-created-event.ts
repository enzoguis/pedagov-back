import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { DomainEvent } from '@/core/events/domain-event'
import { Pedagogue } from '../entities/pedagogue'

export class PedagogueCreatedEvent implements DomainEvent {
  public ocurredAt: Date
  public pedagogue: Pedagogue

  constructor(pedagogue: Pedagogue) {
    this.pedagogue = pedagogue
    this.ocurredAt = new Date()
  }

  getAggregateId(): UniqueEntityID {
    return this.pedagogue.id
  }
}

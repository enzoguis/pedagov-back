import { DomainEvents } from '@/core/events/domain-events'
import { PedagoguesRepository } from '@/domain/occurrences/application/repositories/pedagogues-repository'
import { Pedagogue } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { InMemoryUsersRepository } from './in-memory-users-repository'

export class InMemoryPedagoguesRepository implements PedagoguesRepository {
  constructor(private usersRepository: InMemoryUsersRepository) {}

  public items: Pedagogue[] = []

  async findAll(): Promise<Pedagogue[]> {
    return this.items
  }
  async create(pedagogue: Pedagogue): Promise<void> {
    this.items.push(pedagogue)

    DomainEvents.dispatchEventsForAggregate(pedagogue.id)
  }

  async findByEmail(email: string): Promise<Pedagogue | null> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      return null
    }

    const pedagogue = this.items.find((item) => item.id.equals(user.id))

    if (!pedagogue) {
      return null
    }

    return pedagogue
  }

  async save(pedagogue: Pedagogue): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.id === pedagogue.id)
    this.items[itemIndex] = pedagogue
  }
  async findById(id: string): Promise<Pedagogue | null> {
    const pedagogue = this.items.find((item) => item.id.toString() === id)

    if (!pedagogue) {
      return null
    }

    return pedagogue
  }
  async delete(pedagogue: Pedagogue): Promise<void> {
    this.items = this.items.filter(
      (item) => item.id.toString() !== pedagogue.id.toString()
    )
  }
}

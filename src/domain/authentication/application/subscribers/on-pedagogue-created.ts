import { DomainEvents } from '@/core/events/domain-events'
import { EventHandler } from '@/core/events/event-handler'
import { PedagogueCreatedEvent } from '@/domain/occurrences/enterprise/events/pedagogue-created-event'
import { CreateTemporaryCredentialsUseCase } from '../use-cases/create-temporary-credentials'
import { UsersRepository } from '../repositories/users-repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class OnPedagogueCreated implements EventHandler {
  constructor(
    private createTemporaryCredentials: CreateTemporaryCredentialsUseCase,
    private usersRepository: UsersRepository
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(this.execute.bind(this), PedagogueCreatedEvent.name)
  }

  private async execute({ pedagogue }: PedagogueCreatedEvent) {
    const user = await this.usersRepository.findById(pedagogue.id.toString())
    if (user && user.email) {
      await this.createTemporaryCredentials.execute({
        userId: pedagogue.id.toString(),
        email: user.email,
      })
    }
  }
}

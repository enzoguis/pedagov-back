import { Pedagogue } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { PedagoguesRepository } from '../repositories/pedagogues-repository'
import { Either, right } from '@/core/either'

interface CreatePedagogueUseCaseRequest {
  name: string
}

type CreatePedagogueUseCaseResponse = Either<
  null,
  {
    pedagogue: Pedagogue
  }
>

export class CreatePedagogueUseCase {
  constructor(private pedagoguesRepository: PedagoguesRepository) {}
  async execute({
    name,
  }: CreatePedagogueUseCaseRequest): Promise<CreatePedagogueUseCaseResponse> {
    const pedagogue = Pedagogue.create({ name })

    await this.pedagoguesRepository.create(pedagogue)
    return right({ pedagogue })
  }
}

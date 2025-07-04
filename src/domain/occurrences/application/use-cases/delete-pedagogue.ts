import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { PedagoguesRepository } from '../repositories/pedagogues-repository'
import { Injectable } from '@nestjs/common'

interface DeletePedagogueUseCaseRequest {
  pedagogueId: string
}

type DeletePedagogueUseCaseResponse = Either<ResourceNotFoundError, {}>

@Injectable()
export class DeletePedagogueUseCase {
  constructor(private pedagoguesRepository: PedagoguesRepository) {}
  async execute({
    pedagogueId,
  }: DeletePedagogueUseCaseRequest): Promise<DeletePedagogueUseCaseResponse> {
    const pedagogue = await this.pedagoguesRepository.findById(pedagogueId)

    if (!pedagogue) {
      return left(new ResourceNotFoundError())
    }

    await this.pedagoguesRepository.delete(pedagogue)

    return right({})
  }
}

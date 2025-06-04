import { Either, left, right } from '@/core/either'
import { PedagoguesRepository } from '../repositories/pedagogues-repository'
import { Pedagogue } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { Injectable } from '@nestjs/common'

interface GetPedagogueByIdUseCaseRequest {
  pedagogueId: string
}

type GetPedagogueByIdUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    pedagogue: Pedagogue
  }
>

@Injectable()
export class GetPedagogueByIdUseCase {
  constructor(private pedagoguesRepository: PedagoguesRepository) {}
  async execute({
    pedagogueId,
  }: GetPedagogueByIdUseCaseRequest): Promise<GetPedagogueByIdUseCaseResponse> {
    const pedagogue = await this.pedagoguesRepository.findById(pedagogueId)

    if (!pedagogue) {
      return left(new ResourceNotFoundError())
    }

    return right({ pedagogue })
  }
}

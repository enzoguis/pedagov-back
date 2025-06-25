import { Either, right } from '@/core/either'
import { PedagoguesRepository } from '../repositories/pedagogues-repository'
import { Injectable } from '@nestjs/common'
import { PedagogueWithEmail } from '../../enterprise/entities/value-objects/pedagogue-with-email'

interface FetchAllPedagoguesUseCaseRequest {
  page: number
  limit?: number
}

type FetchAllPedagoguesUseCaseResponse = Either<
  null,
  {
    pedagogues: PedagogueWithEmail[]
  }
>

@Injectable()
export class FetchAllPedagoguesUseCase {
  constructor(private pedagoguesRepository: PedagoguesRepository) {}
  async execute({
    page,
    limit,
  }: FetchAllPedagoguesUseCaseRequest): Promise<FetchAllPedagoguesUseCaseResponse> {
    const pedagogues = await this.pedagoguesRepository.findAll({
      page,
      limit,
    })

    return right({ pedagogues })
  }
}

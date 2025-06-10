import { Either, right } from '@/core/either'
import { PedagoguesRepository } from '../repositories/pedagogues-repository'
import { Pedagogue } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { Injectable } from '@nestjs/common'

interface FetchAllPedagoguesUseCaseRequest {
  page: number
  limit?: number
}

type FetchAllPedagoguesUseCaseResponse = Either<
  null,
  {
    pedagogues: Pedagogue[]
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

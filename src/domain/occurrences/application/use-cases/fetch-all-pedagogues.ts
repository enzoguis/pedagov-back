import { Either, right } from '@/core/either'
import { PedagoguesRepository } from '../repositories/pedagogues-repository'
import { Pedagogue } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { Injectable } from '@nestjs/common'

interface FetchAllPedagoguesUseCaseRequest {}

type FetchAllPedagoguesUseCaseResponse = Either<
  null,
  {
    pedagogues: Pedagogue[]
  }
>

@Injectable()
export class FetchAllPedagoguesUseCase {
  constructor(private pedagoguesRepository: PedagoguesRepository) {}
  async execute({}: FetchAllPedagoguesUseCaseRequest): Promise<FetchAllPedagoguesUseCaseResponse> {
    const pedagogues = await this.pedagoguesRepository.findAll()

    return right({ pedagogues })
  }
}

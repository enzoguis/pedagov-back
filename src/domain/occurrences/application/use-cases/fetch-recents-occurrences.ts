import { Either, right } from '@/core/either'
import { Occurrence } from '@/domain/occurrences/enterprise/entities/occurrence'
import { OccurrencesRepository } from '../repositories/occurrences-repository'
import { Injectable } from '@nestjs/common'

interface FetchRecentsOccurrencesUseCaseRequest {
  page: number
  limit?: number
}

type FetchRecentsOccurrencesUseCaseResponse = Either<
  null,
  {
    occurrences: Occurrence[]
  }
>

@Injectable()
export class FetchRecentsOccurrencesUseCase {
  constructor(private occurrencesRepository: OccurrencesRepository) {}
  async execute({
    page,
    limit,
  }: FetchRecentsOccurrencesUseCaseRequest): Promise<FetchRecentsOccurrencesUseCaseResponse> {
    const occurrences = await this.occurrencesRepository.findManyRecents({
      page,
      limit,
    })

    return right({ occurrences })
  }
}

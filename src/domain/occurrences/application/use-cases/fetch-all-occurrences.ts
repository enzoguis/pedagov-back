import { Either, right } from '@/core/either'
import {
  Occurrence,
  OccurrenceTypes,
} from '@/domain/occurrences/enterprise/entities/occurrence'
import { OccurrencesRepository } from '../repositories/occurrences-repository'
import { Injectable } from '@nestjs/common'
import { OccurrencesWithPagination } from '../../enterprise/entities/value-objects/occurrences-with-pagination'

interface FetchAllOccurrencesUseCaseRequest {
  page: number
  limit?: number
  searchTerm?: string
}

type FetchAllOccurrencesUseCaseResponse = Either<
  null,
  {
    occurrencesWithPaginaton: OccurrencesWithPagination
  }
>

@Injectable()
export class FetchAllOccurrencesUseCase {
  constructor(private occurrencesRepository: OccurrencesRepository) {}
  async execute({
    page,
    limit,
    searchTerm,
  }: FetchAllOccurrencesUseCaseRequest): Promise<FetchAllOccurrencesUseCaseResponse> {
    const occurrences = await this.occurrencesRepository.findAll({
      page,
      limit,
      search: searchTerm,
    })

    return right({ occurrencesWithPaginaton: occurrences })
  }
}

import { Either, right } from '@/core/either'
import {
  Occurrence,
  OccurrenceTypes,
} from '@/domain/occurrences/enterprise/entities/occurrence'
import { OccurrencesRepository } from '../repositories/occurrences-repository'
import { Injectable } from '@nestjs/common'

interface FetchAllOccurrencesUseCaseRequest {
  page: number
  limit?: number
  type?: OccurrenceTypes
  studentId?: string
}

type FetchAllOccurrencesUseCaseResponse = Either<
  null,
  {
    occurrences: Occurrence[]
  }
>

@Injectable()
export class FetchAllOccurrencesUseCase {
  constructor(private occurrencesRepository: OccurrencesRepository) {}
  async execute({
    page,
    limit,
    studentId,
    type,
  }: FetchAllOccurrencesUseCaseRequest): Promise<FetchAllOccurrencesUseCaseResponse> {
    const occurrences = await this.occurrencesRepository.findAll({
      page,
      limit,
      studentId,
      type,
    })

    return right({ occurrences })
  }
}

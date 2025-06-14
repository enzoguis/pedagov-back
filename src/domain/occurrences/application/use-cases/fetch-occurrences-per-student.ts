import { Either, right } from '@/core/either'
import { OccurrencesRepository } from '../repositories/occurrences-repository'
import { Injectable } from '@nestjs/common'
import { OccurrenceWithStudentName } from '../../enterprise/entities/value-objects/occurrence-with-student-name'

interface FetchOccurrencesPerStudentUseCaseRequest {
  page: number
  limit?: number
}

type FetchOccurrencesPerStudentUseCaseResponse = Either<
  null,
  {
    occurrences: OccurrenceWithStudentName[]
  }
>

@Injectable()
export class FetchOccurrencesPerStudentUseCase {
  constructor(private occurrencesRepository: OccurrencesRepository) {}
  async execute({
    page,
    limit,
  }: FetchOccurrencesPerStudentUseCaseRequest): Promise<FetchOccurrencesPerStudentUseCaseResponse> {
    const occurrences = await this.occurrencesRepository.findManyForEachStudent(
      {
        page,
        limit,
      }
    )

    return right({ occurrences })
  }
}

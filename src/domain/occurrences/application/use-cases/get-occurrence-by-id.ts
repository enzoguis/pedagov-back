import { Either, left, right } from '@/core/either'
import { OccurrencesRepository } from '../repositories/occurrences-repository'
import { Occurrence } from '@/domain/occurrences/enterprise/entities/occurrence'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'

interface GetOccurrenceByIdUseCaseRequest {
  occurrenceId: string
}

type GetOccurrenceByIdUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    occurrence: Occurrence
  }
>

export class GetOccurrenceByIdUseCase {
  constructor(private occurrencesRepository: OccurrencesRepository) {}
  async execute({
    occurrenceId,
  }: GetOccurrenceByIdUseCaseRequest): Promise<GetOccurrenceByIdUseCaseResponse> {
    const occurrence = await this.occurrencesRepository.findById(occurrenceId)

    if (!occurrence) {
      return left(new ResourceNotFoundError())
    }

    return right({ occurrence })
  }
}

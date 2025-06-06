import { Either, left, right } from '@/core/either'
import { OccurrencesRepository } from '../repositories/occurrences-repository'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { Injectable } from '@nestjs/common'
import { OccurrenceDetails } from '../../enterprise/entities/value-objects/occurrence-details'

interface GetOccurrenceDetailsUseCaseRequest {
  occurrenceId: string
}

type GetOccurrenceDetailsUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    occurrence: OccurrenceDetails
  }
>

@Injectable()
export class GetOccurrenceDetailsUseCase {
  constructor(private occurrencesRepository: OccurrencesRepository) {}
  async execute({
    occurrenceId,
  }: GetOccurrenceDetailsUseCaseRequest): Promise<GetOccurrenceDetailsUseCaseResponse> {
    const occurrence = await this.occurrencesRepository.findWithDetails(
      occurrenceId
    )

    if (!occurrence) {
      return left(new ResourceNotFoundError())
    }

    return right({ occurrence })
  }
}

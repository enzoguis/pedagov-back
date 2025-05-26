import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { OccurrencesRepository } from '../repositories/occurrences-repository'

interface DeleteOccurrenceUseCaseRequest {
  occurrenceId: string
}

type DeleteOccurrenceUseCaseResponse = Either<ResourceNotFoundError, {}>

export class DeleteOccurrenceUseCase {
  constructor(private occurrencesRepository: OccurrencesRepository) {}
  async execute({
    occurrenceId,
  }: DeleteOccurrenceUseCaseRequest): Promise<DeleteOccurrenceUseCaseResponse> {
    const occurrence = await this.occurrencesRepository.findById(occurrenceId)

    if (!occurrence) {
      return left(new ResourceNotFoundError())
    }

    await this.occurrencesRepository.delete(occurrence)

    return right({})
  }
}

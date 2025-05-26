import { PedagoguesRepository } from '../repositories/pedagogues-repository'
import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import {
  PedagogueRoleEnum,
  PedagogueRoleType,
} from '../../enterprise/entities/pedagogue'

interface EditPedagogueUseCaseRequest {
  pedagogueId: string
  name: string
  role: PedagogueRoleType
}

type EditPedagogueUseCaseResponse = Either<ResourceNotFoundError, {}>

export class EditPedagogueUseCase {
  constructor(private pedagoguesRepository: PedagoguesRepository) {}
  async execute({
    pedagogueId,
    name,
    role,
  }: EditPedagogueUseCaseRequest): Promise<EditPedagogueUseCaseResponse> {
    const pedagogue = await this.pedagoguesRepository.findById(pedagogueId)

    if (!pedagogue) {
      return left(new ResourceNotFoundError())
    }

    pedagogue.name = name
    pedagogue.role = PedagogueRoleEnum[role]

    await this.pedagoguesRepository.save(pedagogue)

    return right({})
  }
}

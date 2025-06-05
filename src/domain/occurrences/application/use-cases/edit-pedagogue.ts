import { PedagoguesRepository } from '../repositories/pedagogues-repository'
import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import {
  Pedagogue,
  PedagogueRoleEnum,
  PedagogueRoleType,
} from '../../enterprise/entities/pedagogue'
import { Injectable } from '@nestjs/common'
import {
  UserStatusEnum,
  UserStatusType,
} from '@/domain/authentication/enterprise/entities/user'

interface EditPedagogueUseCaseRequest {
  pedagogueId: string
  name: string
  status: UserStatusType
  role: PedagogueRoleType
}

type EditPedagogueUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    pedagogue: Pedagogue
  }
>

@Injectable()
export class EditPedagogueUseCase {
  constructor(private pedagoguesRepository: PedagoguesRepository) {}
  async execute({
    pedagogueId,
    name,
    status,
    role,
  }: EditPedagogueUseCaseRequest): Promise<EditPedagogueUseCaseResponse> {
    const pedagogue = await this.pedagoguesRepository.findById(pedagogueId)

    if (!pedagogue) {
      return left(new ResourceNotFoundError())
    }

    pedagogue.status = UserStatusEnum[status]
    pedagogue.name = name
    pedagogue.role = PedagogueRoleEnum[role]

    await this.pedagoguesRepository.save(pedagogue)

    return right({ pedagogue })
  }
}

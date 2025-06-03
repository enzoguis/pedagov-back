import {
  Pedagogue,
  PedagogueRoleEnum,
  PedagogueRoleType,
} from '@/domain/occurrences/enterprise/entities/pedagogue'
import { PedagoguesRepository } from '../repositories/pedagogues-repository'
import { Either, right } from '@/core/either'
import { Injectable } from '@nestjs/common'
import {
  UserStatusEnum,
  UserStatusType,
} from '@/domain/authentication/enterprise/entities/user'

interface CreatePedagogueUseCaseRequest {
  name: string
  email: string
  status: UserStatusType
  role: PedagogueRoleType
}

type CreatePedagogueUseCaseResponse = Either<
  null,
  {
    pedagogue: Pedagogue
  }
>

@Injectable()
export class CreatePedagogueUseCase {
  constructor(private pedagoguesRepository: PedagoguesRepository) {}
  async execute({
    name,
    email,
    status,
    role,
  }: CreatePedagogueUseCaseRequest): Promise<CreatePedagogueUseCaseResponse> {
    const pedagogue = Pedagogue.create({
      name,
      role: PedagogueRoleEnum[role],
      status: UserStatusEnum[status],
    })

    await this.pedagoguesRepository.create(pedagogue, email)
    return right({ pedagogue })
  }
}

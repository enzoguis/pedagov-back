import {
  Pedagogue,
  PedagogueRoleEnum,
  PedagogueRoleType,
} from '@/domain/occurrences/enterprise/entities/pedagogue'
import { PedagoguesRepository } from '../repositories/pedagogues-repository'
import { Either, right } from '@/core/either'
import { Injectable } from '@nestjs/common'

interface CreatePedagogueUseCaseRequest {
  name: string
  email: string
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
    role,
  }: CreatePedagogueUseCaseRequest): Promise<CreatePedagogueUseCaseResponse> {
    const pedagogue = Pedagogue.create({ name, role: PedagogueRoleEnum[role] })

    await this.pedagoguesRepository.create(pedagogue, email)
    return right({ pedagogue })
  }
}

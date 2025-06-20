import { Either, right } from '@/core/either'
import {
  Group,
  GroupShiftsEnum,
} from '@/domain/occurrences/enterprise/entities/group'
import { GroupsRepository } from '../repositories/groups-repository'
import { Injectable } from '@nestjs/common'

interface FetchAllGroupsUseCaseRequest {
  page: number
  limit?: number
  shift?: GroupShiftsEnum
}

type FetchAllGroupsUseCaseResponse = Either<
  null,
  {
    groups: Group[]
  }
>

@Injectable()
export class FetchAllGroupsUseCase {
  constructor(private groupsRepository: GroupsRepository) {}
  async execute({
    page,
    limit,
    shift,
  }: FetchAllGroupsUseCaseRequest): Promise<FetchAllGroupsUseCaseResponse> {
    const groups = await this.groupsRepository.findAll({ page, limit, shift })

    return right({ groups })
  }
}

import { Either, right } from '@/core/either'
import { Group } from '@/domain/occurrences/enterprise/entities/group'
import { GroupsRepository } from '../repositories/groups-repository'
import { Injectable } from '@nestjs/common'

interface FetchAllGroupsUseCaseRequest {
  page: number
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
  }: FetchAllGroupsUseCaseRequest): Promise<FetchAllGroupsUseCaseResponse> {
    const groups = await this.groupsRepository.findAll({ page })

    return right({ groups })
  }
}

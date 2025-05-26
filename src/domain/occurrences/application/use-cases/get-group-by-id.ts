import { Either, left, right } from '@/core/either'
import { GroupsRepository } from '../repositories/groups-repository'
import { Group } from '@/domain/occurrences/enterprise/entities/group'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'

interface GetGroupByIdUseCaseRequest {
  groupId: string
}

type GetGroupByIdUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    group: Group
  }
>

export class GetGroupByIdUseCase {
  constructor(private groupsRepository: GroupsRepository) {}
  async execute({
    groupId,
  }: GetGroupByIdUseCaseRequest): Promise<GetGroupByIdUseCaseResponse> {
    const group = await this.groupsRepository.findById(groupId)

    if (!group) {
      return left(new ResourceNotFoundError())
    }

    return right({ group })
  }
}

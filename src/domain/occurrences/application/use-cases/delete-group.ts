import { GroupsRepository } from '../repositories/groups-repository'
import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { Injectable } from '@nestjs/common'

interface DeleteGroupUseCaseRequest {
  groupId: string
}

type DeleteGroupUseCaseResponse = Either<ResourceNotFoundError, {}>

@Injectable()
export class DeleteGroupUseCase {
  constructor(private groupsRepository: GroupsRepository) {}
  async execute({
    groupId,
  }: DeleteGroupUseCaseRequest): Promise<DeleteGroupUseCaseResponse> {
    const group = await this.groupsRepository.findById(groupId)

    if (!group) {
      return left(new ResourceNotFoundError())
    }

    await this.groupsRepository.delete(group)

    return right({})
  }
}

import { GroupsRepository } from '../repositories/groups-repository'
import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { GroupStudent } from '@/domain/occurrences/enterprise/entities/group-student'
import { GroupStudentList } from '@/domain/occurrences/enterprise/entities/group-student-list'
import { GroupStudentsRepository } from '../repositories/group-student-repository'
import {
  GroupShiftsEnum,
  GroupShiftsType,
} from '@/domain/occurrences/enterprise/entities/group'
import { Injectable } from '@nestjs/common'

interface EditGroupUseCaseRequest {
  groupId: string
  teacherId: string
  name: string
  shift: GroupShiftsType
}

type EditGroupUseCaseResponse = Either<ResourceNotFoundError, {}>

@Injectable()
export class EditGroupUseCase {
  constructor(
    private groupsRepository: GroupsRepository,
    private groupStudentsRepository: GroupStudentsRepository
  ) {}
  async execute({
    groupId,
    teacherId,
    name,
    shift,
  }: EditGroupUseCaseRequest): Promise<EditGroupUseCaseResponse> {
    const group = await this.groupsRepository.findById(groupId)

    if (!group) {
      return left(new ResourceNotFoundError())
    }

    group.name = name
    group.shift = GroupShiftsEnum[shift]
    group.teacherId = new UniqueEntityID(teacherId)

    await this.groupsRepository.save(group)

    return right({})
  }
}

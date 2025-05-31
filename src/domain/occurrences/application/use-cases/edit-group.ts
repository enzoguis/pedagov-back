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
  studentsIds: string[]
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
    studentsIds,
  }: EditGroupUseCaseRequest): Promise<EditGroupUseCaseResponse> {
    const group = await this.groupsRepository.findById(groupId)

    if (!group) {
      return left(new ResourceNotFoundError())
    }

    console.log('o que chegou', group.students)

    const currentGroupStudents =
      await this.groupStudentsRepository.findManyByGroupId(group.id.toString())

    console.log('current', currentGroupStudents)

    const groupStudentsList = new GroupStudentList(currentGroupStudents)

    const groupStudents = studentsIds.map((id) => {
      return GroupStudent.create({
        studentId: new UniqueEntityID(id),
        groupId: group.id,
      })
    })

    console.log('antes', groupStudentsList.currentItems)

    groupStudentsList.update(groupStudents)

    console.log('depois', groupStudentsList.currentItems)

    group.name = name
    group.shift = GroupShiftsEnum[shift]
    group.students = groupStudentsList
    group.teacherId = new UniqueEntityID(teacherId)

    await this.groupsRepository.save(group)

    return right({})
  }
}

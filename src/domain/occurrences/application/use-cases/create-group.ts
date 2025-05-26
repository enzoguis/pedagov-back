import {
  Group,
  GroupShiftsEnum,
  GroupShiftsType,
} from '@/domain/occurrences/enterprise/entities/group'
import { GroupsRepository } from '../repositories/groups-repository'
import { Either, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { GroupStudent } from '@/domain/occurrences/enterprise/entities/group-student'
import { GroupStudentList } from '@/domain/occurrences/enterprise/entities/group-student-list'

interface CreateGroupUseCaseRequest {
  name: string
  shift: GroupShiftsType
  teacherId: string
  studentsIds: string[]
}

type CreateGroupUseCaseResponse = Either<
  null,
  {
    group: Group
  }
>

export class CreateGroupUseCase {
  constructor(private groupsRepository: GroupsRepository) {}
  async execute({
    name,
    shift,
    studentsIds,
    teacherId,
  }: CreateGroupUseCaseRequest): Promise<CreateGroupUseCaseResponse> {
    const group = Group.create({
      name,
      shift: GroupShiftsEnum[shift],
      teacherId: new UniqueEntityID(teacherId),
    })

    const students = studentsIds.map((id) => {
      return GroupStudent.create({
        groupId: group.id,
        studentId: new UniqueEntityID(id),
      })
    })

    group.students = new GroupStudentList(students)

    await this.groupsRepository.create(group)

    return right({ group })
  }
}

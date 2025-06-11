import { TeachersRepository } from '../repositories/teachers-repository'
import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { Teacher } from '../../enterprise/entities/teacher'
import { Injectable } from '@nestjs/common'
import {
  UserStatusEnum,
  UserStatusType,
} from '@/domain/authentication/enterprise/entities/user'

interface EditTeacherUseCaseRequest {
  teacherId: string
  name: string
  status: UserStatusType
}

type EditTeacherUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    teacher: Teacher
  }
>

@Injectable()
export class EditTeacherUseCase {
  constructor(private teachersRepository: TeachersRepository) {}
  async execute({
    teacherId,
    name,
    status,
  }: EditTeacherUseCaseRequest): Promise<EditTeacherUseCaseResponse> {
    const teacher = await this.teachersRepository.findById(teacherId)

    if (!teacher) {
      return left(new ResourceNotFoundError())
    }

    teacher.status = UserStatusEnum[status]
    teacher.name = name

    await this.teachersRepository.save(teacher)

    return right({ teacher })
  }
}

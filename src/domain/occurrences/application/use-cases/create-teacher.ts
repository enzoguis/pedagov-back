import { Teacher } from '@/domain/occurrences/enterprise/entities/teacher'
import { TeachersRepository } from '../repositories/teachers-repository'
import { Either, right } from '@/core/either'
import { Injectable } from '@nestjs/common'
import {
  UserStatusEnum,
  UserStatusType,
} from '@/domain/authentication/enterprise/entities/user'

interface CreateTeacherUseCaseRequest {
  name: string
  status: UserStatusType
}

type CreateTeacherUseCaseResponse = Either<
  null,
  {
    teacher: Teacher
  }
>

@Injectable()
export class CreateTeacherUseCase {
  constructor(private teachersRepository: TeachersRepository) {}
  async execute({
    name,
    status,
  }: CreateTeacherUseCaseRequest): Promise<CreateTeacherUseCaseResponse> {
    const teacher = Teacher.create({ name, status: UserStatusEnum[status] })

    await this.teachersRepository.create(teacher)

    return right({ teacher })
  }
}

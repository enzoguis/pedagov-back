import {
  Teacher,
  TeacherStatusEnum,
  TeacherStatusType,
} from '@/domain/occurrences/enterprise/entities/teacher'
import { TeachersRepository } from '../repositories/teachers-repository'
import { Either, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Injectable } from '@nestjs/common'

interface CreateTeacherUseCaseRequest {
  name: string
  status: TeacherStatusType
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
    const teacher = Teacher.create({ name, status: TeacherStatusEnum[status] })

    await this.teachersRepository.create(teacher)

    return right({ teacher })
  }
}

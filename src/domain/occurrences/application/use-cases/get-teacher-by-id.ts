import { Either, left, right } from '@/core/either'
import { TeachersRepository } from '../repositories/teachers-repository'
import { Teacher } from '@/domain/occurrences/enterprise/entities/teacher'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'

interface GetTeacherByIdUseCaseRequest {
  teacherId: string
}

type GetTeacherByIdUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    teacher: Teacher
  }
>

export class GetTeacherByIdUseCase {
  constructor(private teachersRepository: TeachersRepository) {}
  async execute({
    teacherId,
  }: GetTeacherByIdUseCaseRequest): Promise<GetTeacherByIdUseCaseResponse> {
    const teacher = await this.teachersRepository.findById(teacherId)

    if (!teacher) {
      return left(new ResourceNotFoundError())
    }

    return right({ teacher })
  }
}

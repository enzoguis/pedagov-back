import { TeachersRepository } from '../repositories/teachers-repository'
import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { Injectable } from '@nestjs/common'

interface DeleteTeacherUseCaseRequest {
  teacherId: string
}

type DeleteTeacherUseCaseResponse = Either<ResourceNotFoundError, {}>

@Injectable()
export class DeleteTeacherUseCase {
  constructor(private teachersRepository: TeachersRepository) {}
  async execute({
    teacherId,
  }: DeleteTeacherUseCaseRequest): Promise<DeleteTeacherUseCaseResponse> {
    const teacher = await this.teachersRepository.findById(teacherId)

    if (!teacher) {
      return left(new ResourceNotFoundError())
    }

    await this.teachersRepository.delete(teacher)

    return right({})
  }
}

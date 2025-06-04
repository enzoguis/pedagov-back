import { Either, left, right } from '@/core/either'
import { StudentsRepository } from '../repositories/students-repository'
import { Student } from '@/domain/occurrences/enterprise/entities/student'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { Injectable } from '@nestjs/common'

interface GetStudentByIdUseCaseRequest {
  studentId: string
}

type GetStudentByIdUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    student: Student
  }
>

@Injectable()
export class GetStudentByIdUseCase {
  constructor(private studentsRepository: StudentsRepository) {}
  async execute({
    studentId,
  }: GetStudentByIdUseCaseRequest): Promise<GetStudentByIdUseCaseResponse> {
    const student = await this.studentsRepository.findById(studentId)

    if (!student) {
      return left(new ResourceNotFoundError())
    }

    return right({ student })
  }
}

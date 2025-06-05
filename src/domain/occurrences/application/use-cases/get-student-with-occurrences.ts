import { Either, left, right } from '@/core/either'
import { StudentsRepository } from '../repositories/students-repository'
import { Student } from '@/domain/occurrences/enterprise/entities/student'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { Injectable } from '@nestjs/common'
import { StudentWithOccurrences } from '../../enterprise/entities/value-objects/student-with-occurrences'

interface GetStudentWithOccurrencesUseCaseRequest {
  studentId: string
}

type GetStudentWithOccurrencesUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    student: StudentWithOccurrences
  }
>

@Injectable()
export class GetStudentWithOccurrencesUseCase {
  constructor(private studentsRepository: StudentsRepository) {}
  async execute({
    studentId,
  }: GetStudentWithOccurrencesUseCaseRequest): Promise<GetStudentWithOccurrencesUseCaseResponse> {
    const student = await this.studentsRepository.findWithOccurrences(studentId)

    if (!student) {
      return left(new ResourceNotFoundError())
    }

    return right({ student })
  }
}

import { StudentsRepository } from '../repositories/students-repository'
import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'

interface DeleteStudentUseCaseRequest {
  studentId: string
}

type DeleteStudentUseCaseResponse = Either<ResourceNotFoundError, {}>

export class DeleteStudentUseCase {
  constructor(private studentsRepository: StudentsRepository) {}
  async execute({
    studentId,
  }: DeleteStudentUseCaseRequest): Promise<DeleteStudentUseCaseResponse> {
    const student = await this.studentsRepository.findById(studentId)

    if (!student) {
      return left(new ResourceNotFoundError())
    }

    await this.studentsRepository.delete(student)

    return right({})
  }
}

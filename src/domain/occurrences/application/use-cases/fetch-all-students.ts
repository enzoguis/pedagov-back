import { Either, right } from '@/core/either'
import { StudentsRepository } from '../repositories/students-repository'
import { Injectable } from '@nestjs/common'
import { Student } from '../../enterprise/entities/student'
import { StudentWithGroup } from '../../enterprise/entities/value-objects/student-with-group'

interface FetchAllStudentsUseCaseRequest {}

type FetchAllStudentsUseCaseResponse = Either<
  null,
  {
    students: StudentWithGroup[]
  }
>

@Injectable()
export class FetchAllStudentsUseCase {
  constructor(private studentsRepository: StudentsRepository) {}
  async execute({}: FetchAllStudentsUseCaseRequest): Promise<FetchAllStudentsUseCaseResponse> {
    const students = await this.studentsRepository.findAll()

    return right({ students })
  }
}

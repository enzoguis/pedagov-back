import { Either, left, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Student } from '@/domain/occurrences/enterprise/entities/student'
import { CPF } from '@/domain/occurrences/enterprise/entities/value-objects/cpf'
import { StudentsRepository } from '../repositories/students-repository'
import { StudentAlreadyExistsError } from './errors/student-already-exists-error'

interface CreateStudentUseCaseRequest {
  name: string
  groupId: string
  cpf: string
  responsiblePhone: string
  responsibleEmail: string
}

type CreateStudentUseCaseResponse = Either<
  StudentAlreadyExistsError,
  {
    student: Student
  }
>

export class CreateStudentUseCase {
  constructor(private studentsRepository: StudentsRepository) {}
  async execute({
    name,
    cpf,
    groupId,
    responsibleEmail,
    responsiblePhone,
  }: CreateStudentUseCaseRequest): Promise<CreateStudentUseCaseResponse> {
    const alreadyHasStudent = await this.studentsRepository.findByCPF(cpf)

    if (alreadyHasStudent) {
      return left(new StudentAlreadyExistsError())
    }

    const student = Student.create({
      name,
      cpf: CPF.create(cpf),
      groupId: new UniqueEntityID(groupId),
      responsibleEmail,
      responsiblePhone,
    })

    await this.studentsRepository.create(student)

    return right({ student })
  }
}

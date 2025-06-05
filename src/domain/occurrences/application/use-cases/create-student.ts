import { Either, left, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Student } from '@/domain/occurrences/enterprise/entities/student'
import { CPF } from '@/domain/occurrences/enterprise/entities/value-objects/cpf'
import { StudentsRepository } from '../repositories/students-repository'
import { StudentAlreadyExistsError } from './errors/student-already-exists-error'
import { Injectable } from '@nestjs/common'
import {
  UserStatusEnum,
  UserStatusType,
} from '@/domain/authentication/enterprise/entities/user'

interface CreateStudentUseCaseRequest {
  name: string
  status: UserStatusType
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

@Injectable()
export class CreateStudentUseCase {
  constructor(private studentsRepository: StudentsRepository) {}
  async execute({
    name,
    status,
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
      status: UserStatusEnum[status],
      cpf: CPF.create(cpf),
      groupId: new UniqueEntityID(groupId),
      responsibleEmail,
      responsiblePhone,
    })

    await this.studentsRepository.create(student)

    return right({ student })
  }
}

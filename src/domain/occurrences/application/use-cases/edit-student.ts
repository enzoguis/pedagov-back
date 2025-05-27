import { StudentsRepository } from '../repositories/students-repository'
import { Either, left, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { CPF } from '@/domain/occurrences/enterprise/entities/value-objects/cpf'
import { Injectable } from '@nestjs/common'

interface EditStudentUseCaseRequest {
  studentId: string
  groupId: string
  cpf: string
  responsiblePhone: string
  responsibleEmail: string
}

type EditStudentUseCaseResponse = Either<ResourceNotFoundError, {}>

@Injectable()
export class EditStudentUseCase {
  constructor(private studentsRepository: StudentsRepository) {}
  async execute({
    studentId,
    cpf,
    groupId,
    responsibleEmail,
    responsiblePhone,
  }: EditStudentUseCaseRequest): Promise<EditStudentUseCaseResponse> {
    const student = await this.studentsRepository.findById(studentId)

    if (!student) {
      return left(new ResourceNotFoundError())
    }

    student.groupId = new UniqueEntityID(groupId)
    student.cpf = CPF.create(cpf)
    student.responsibleEmail = responsibleEmail
    student.responsiblePhone = responsiblePhone

    await this.studentsRepository.save(student)

    return right({})
  }
}

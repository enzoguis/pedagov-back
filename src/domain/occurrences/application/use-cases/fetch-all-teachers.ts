import { Either, right } from '@/core/either'
import { TeachersRepository } from '../repositories/teachers-repository'
import { Teacher } from '@/domain/occurrences/enterprise/entities/teacher'
import { Injectable } from '@nestjs/common'

interface FetchAllTeachersUseCaseRequest {
  page: number
  limit?: number
}

type FetchAllTeachersUseCaseResponse = Either<
  null,
  {
    teachers: Teacher[]
  }
>

@Injectable()
export class FetchAllTeachersUseCase {
  constructor(private teachersRepository: TeachersRepository) {}
  async execute({
    page,
    limit,
  }: FetchAllTeachersUseCaseRequest): Promise<FetchAllTeachersUseCaseResponse> {
    const teachers = await this.teachersRepository.findAll({
      page,
      limit,
    })

    return right({ teachers })
  }
}

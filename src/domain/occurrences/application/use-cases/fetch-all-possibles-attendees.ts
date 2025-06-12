import { Either, right } from '@/core/either'
import { Attendee } from '../../enterprise/entities/attendee'
import { PedagoguesRepository } from '../repositories/pedagogues-repository'
import { TeachersRepository } from '../repositories/teachers-repository'
import { Injectable } from '@nestjs/common'

interface FetchAllPossiblesAttendeesUseCaseRequest {
  page: number
  limit?: number
}

type FetchAllPossiblesAttendeesUseCaseResponse = Either<
  null,
  {
    attendees: Attendee[]
  }
>

@Injectable()
export class FetchAllPossiblesAttendeesUseCase {
  constructor(
    private pedagoguesRepository: PedagoguesRepository,
    private teachersRepository: TeachersRepository
  ) {}

  async execute({
    page,
    limit,
  }: FetchAllPossiblesAttendeesUseCaseRequest): Promise<FetchAllPossiblesAttendeesUseCaseResponse> {
    const perPage = limit ?? 10

    const halfLimit = Math.ceil(perPage / 2)

    const pedagogues = await this.pedagoguesRepository.findAll({
      page,
      limit: halfLimit,
    })

    const teachers = await this.teachersRepository.findAll({
      page,
      limit: perPage - pedagogues.length,
    })

    const pedagoguesAttendees = pedagogues.map((pedagogue) => {
      return Attendee.create(
        {
          name: pedagogue.name,
        },
        pedagogue.id
      )
    })

    const teachersAttendees = teachers.map((teacher) => {
      return Attendee.create(
        {
          name: teacher.name,
        },
        teacher.id
      )
    })

    const attendees = [...pedagoguesAttendees, ...teachersAttendees]

    return right({
      attendees,
    })
  }
}

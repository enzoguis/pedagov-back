import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Attendee } from '@/domain/occurrences/enterprise/entities/attendee'
import { User as PrismaUser } from '@prisma/client'

export class PrismaAttendeeMapper {
  static toDomain(raw: PrismaUser) {
    return Attendee.create(
      {
        name: raw.name,
      },
      new UniqueEntityID(raw.id)
    )
  }
}

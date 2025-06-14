import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { CPF } from '@/domain/occurrences/enterprise/entities/value-objects/cpf'
import { StudentWithOccurrences } from '@/domain/occurrences/enterprise/entities/value-objects/student-with-occurrences'
import {
  Occurrence as PrismaOccurrence,
  User as PrismaUser,
  Student as PrismaStudent,
  Group as PrismaGroup,
} from '@prisma/client'
import { PrismaOccurrenceMapper } from './prisma-occurrence-mapper'
import { UserStatusEnum } from '@/domain/authentication/enterprise/entities/user'

type PrismaStudentWithOccurrences = PrismaStudent & {
  occurrences: {
    occurrence: PrismaOccurrence
  }[]
  user: PrismaUser
  group: PrismaGroup
}

export class PrismaStudentWithOccurrencesMapper {
  static toDomain(raw: PrismaStudentWithOccurrences): StudentWithOccurrences {
    return StudentWithOccurrences.create({
      avatar: raw.user.avatar,
      studentId: new UniqueEntityID(raw.userId),
      student: raw.user.name,
      cpf: CPF.create(raw.cpf),
      group: raw.group.name,
      groupId: new UniqueEntityID(raw.groupId),
      occurrences: raw.occurrences.map((occurrence) =>
        PrismaOccurrenceMapper.toDomain(occurrence.occurrence)
      ),
      responsibleEmail: raw.responsibleEmail,
      responsiblePhone: raw.responsiblePhone,
      status: UserStatusEnum[raw.user.status],
    })
  }
}

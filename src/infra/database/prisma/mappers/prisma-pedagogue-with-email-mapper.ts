import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  UserRoleEnum,
  UserStatusEnum,
} from '@/domain/authentication/enterprise/entities/user'
import {
  Pedagogue,
  PedagogueRoleEnum,
} from '@/domain/occurrences/enterprise/entities/pedagogue'
import { PedagogueWithEmail } from '@/domain/occurrences/enterprise/entities/value-objects/pedagogue-with-email'
import {
  Pedagogue as PrismaPedagogue,
  User as PrismaUser,
} from '@prisma/client'

type PrismaPedagogueWithUser = PrismaPedagogue & {
  user: PrismaUser
}

export class PrismaPedagogueWithEmailMapper {
  static toDomain(raw: PrismaPedagogueWithUser): PedagogueWithEmail {
    if (raw.user.email === null) {
      throw new Error('Email cannot be null')
    }

    return PedagogueWithEmail.create({
      pedagogueId: new UniqueEntityID(raw.userId),
      email: raw.user.email,
      name: raw.user.name,
      role: PedagogueRoleEnum[raw.user.role],
      status: UserStatusEnum[raw.user.status],
    })
  }
}

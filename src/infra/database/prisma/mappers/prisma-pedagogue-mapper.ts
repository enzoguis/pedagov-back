import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  UserRoleEnum,
  UserStatusEnum,
} from '@/domain/authentication/enterprise/entities/user'
import {
  Pedagogue,
  PedagogueRoleEnum,
} from '@/domain/occurrences/enterprise/entities/pedagogue'
import {
  Prisma,
  Pedagogue as PrismaPedagogue,
  User as PrismaUser,
} from '@prisma/client'

type PrismaPedagogueWithUser = PrismaPedagogue & {
  user: PrismaUser
}

export class PrismaPedagogueMapper {
  static toDomain(raw: PrismaPedagogueWithUser): Pedagogue {
    return Pedagogue.create(
      {
        name: raw.user.name,
        role: PedagogueRoleEnum[raw.user.role],
        status: UserStatusEnum[raw.user.status],
      },
      new UniqueEntityID(raw.userId)
    )
  }

  static toPrisma(pedagogue: Pedagogue): Prisma.PedagogueUncheckedCreateInput {
    return {
      userId: pedagogue.id.toString(),
    }
  }
}

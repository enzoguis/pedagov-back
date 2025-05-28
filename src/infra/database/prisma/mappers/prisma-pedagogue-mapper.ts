import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Pedagogue,
  PedagogueRoleEnum,
} from '@/domain/occurrences/enterprise/entities/pedagogue'
import {
  Prisma,
  Pedagogue as PrismaPedagogue,
  User as PrismaUser,
} from '@prisma/client'

type PrismaPedagogueWithName = PrismaPedagogue & {
  user: PrismaUser
}

export class PrismaPedagogueMapper {
  static toDomain(raw: PrismaPedagogueWithName): Pedagogue {
    return Pedagogue.create(
      {
        name: raw.user.name,
        role: PedagogueRoleEnum[raw.role],
      },
      new UniqueEntityID(raw.userId)
    )
  }

  static toPrisma(pedagogue: Pedagogue): Prisma.PedagogueUncheckedCreateInput {
    return {
      userId: pedagogue.id.toString(),
      role: pedagogue.role,
    }
  }
}

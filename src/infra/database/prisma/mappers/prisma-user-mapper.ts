import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import {
  User,
  UserRoleEnum,
  UserStatusEnum,
} from '@/domain/authentication/enterprise/entities/user'
import { Prisma, User as PrismaUser } from '@prisma/client'

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): User {
    return User.create(
      {
        avatar: raw.avatar,
        role: UserRoleEnum[raw.role],
        status: UserStatusEnum[raw.status],
        email: raw.email,
        password: raw.password,
        temporaryPassword: raw.temporaryPassword ?? null,
      },
      new UniqueEntityID(raw.id)
    )
  }

  static toPrisma(
    user: User
  ): Optional<Prisma.UserUncheckedCreateInput, 'name'> {
    return {
      id: user.id.toString(),
      avatar: user.avatar,
      role: user.role,
      status: user.status,
      email: user.email,
      password: user.password,
      temporaryPassword: user.temporaryPassword,
    }
  }
}

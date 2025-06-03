import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  User,
  UserProps,
  UserRoleEnum,
} from '@/domain/authentication/enterprise/entities/user'
import { PrismaUserMapper } from '@/infra/database/prisma/mappers/prisma-user-mapper'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { faker } from '@faker-js/faker'
import { Injectable } from '@nestjs/common'

export function makeUser(
  override: Partial<UserProps> = {},
  id?: UniqueEntityID
) {
  const user = User.create(
    {
      role: UserRoleEnum.COMMON,
      email: faker.internet.email(),
      password: faker.internet.password(),
      ...override,
    },
    id
  )

  return user
}

@Injectable()
export class UserFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaUser(
    data: Partial<UserProps> = {},
    entity: { name: string }
  ): Promise<User> {
    const user = makeUser(data)

    await this.prisma.user.create({
      data: {
        role: user.role,
        name: entity.name,
        email: user.email,
        password: user.password,
        temporaryPassword: user.temporaryPassword,
      },
    })

    return user
  }
}

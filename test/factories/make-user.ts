import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  User,
  UserProps,
  UserRoleEnum,
  UserStatusEnum,
} from '@/domain/authentication/enterprise/entities/user'
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
      status: UserStatusEnum.ACTIVE,
      avatar: faker.image.avatarGitHub(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      temporaryPassword: faker.internet.password(),
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
        status: user.status,
        name: entity.name,
        email: user.email,
        password: user.password,
        temporaryPassword: user.temporaryPassword,
      },
    })

    return user
  }
}

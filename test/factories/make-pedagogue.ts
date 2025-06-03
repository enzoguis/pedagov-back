import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Pedagogue,
  PedagogueProps,
  PedagogueRoleEnum,
} from '@/domain/occurrences/enterprise/entities/pedagogue'
import { PrismaPedagogueMapper } from '@/infra/database/prisma/mappers/prisma-pedagogue-mapper'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { faker } from '@faker-js/faker'
import { Injectable } from '@nestjs/common'

export function makePedagogue(
  override: Partial<PedagogueProps> = {},
  id?: UniqueEntityID
) {
  const pedagogue = Pedagogue.create(
    {
      name: faker.person.fullName(),
      role: PedagogueRoleEnum.COMMON,
      ...override,
    },
    id
  )

  return pedagogue
}

@Injectable()
export class PedagogueFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaPedagogue(
    data: Partial<PedagogueProps> = {}
  ): Promise<Pedagogue> {
    const pedagogue = makePedagogue(data)

    await this.prisma.user.create({
      data: {
        id: pedagogue.id.toString(),
        role: pedagogue.role,
        name: pedagogue.name,
      },
    })

    await this.prisma.pedagogue.create({
      data: PrismaPedagogueMapper.toPrisma(pedagogue),
    })

    return pedagogue
  }
}

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Group,
  GroupProps,
  GroupShiftsEnum,
} from '@/domain/occurrences/enterprise/entities/group'
import { PrismaGroupMapper } from '@/infra/database/prisma/mappers/prisma-group-mapper'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { faker } from '@faker-js/faker'
import { Injectable } from '@nestjs/common'

export function makeGroup(
  override: Partial<GroupProps> = {},
  id?: UniqueEntityID
) {
  const group = Group.create(
    {
      name: faker.lorem.sentence(),
      shift: GroupShiftsEnum.AFTERNOON,
      teacherId: new UniqueEntityID(),
      ...override,
    },
    id
  )

  return group
}

@Injectable()
export class GroupFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaGroup(data: Partial<GroupProps> = {}): Promise<Group> {
    const group = makeGroup(data)

    await this.prisma.group.create({
      data: PrismaGroupMapper.toPrisma(group),
    })

    return group
  }
}

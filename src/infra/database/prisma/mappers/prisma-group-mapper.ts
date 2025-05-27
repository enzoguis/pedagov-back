import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Group,
  GroupShiftsEnum,
} from '@/domain/occurrences/enterprise/entities/group'
import { Prisma, Group as PrismaGroup } from '@prisma/client'

export class PrismaGroupMapper {
  static toDomain(raw: PrismaGroup): Group {
    return Group.create(
      {
        name: raw.name,
        shift: GroupShiftsEnum[raw.shift],
        teacherId: new UniqueEntityID(raw.teacherId),
      },
      new UniqueEntityID(raw.id)
    )
  }

  static toPrisma(group: Group): Prisma.GroupUncheckedCreateInput {
    return {
      id: group.id.toString(),
      name: group.name,
      shift: group.shift,
      teacherId: group.teacherId.toString(),
    }
  }
}

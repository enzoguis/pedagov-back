import { PaginationParams } from '@/core/repositories/pagination-params'
import { GroupsRepository } from '@/domain/occurrences/application/repositories/groups-repository'
import { Group } from '@/domain/occurrences/enterprise/entities/group'
import { Injectable } from '@nestjs/common'
import { PrismaGroupMapper } from '../mappers/prisma-group-mapper'
import { PrismaService } from '../prisma.service'
import { GroupStudentsRepository } from '@/domain/occurrences/application/repositories/group-student-repository'
import { GroupShift } from '@prisma/client'

@Injectable()
export class PrismaGroupsRepository implements GroupsRepository {
  constructor(
    private prisma: PrismaService,
    private groupStudentsRepository: GroupStudentsRepository
  ) {}

  async create(group: Group): Promise<void> {
    const data = PrismaGroupMapper.toPrisma(group)

    await this.prisma.group.create({ data })

    await this.groupStudentsRepository.createMany(group.students.getItems())
  }

  async save(group: Group): Promise<void> {
    const data = PrismaGroupMapper.toPrisma(group)

    await this.prisma.group.update({
      where: {
        id: data.id,
      },
      data,
    })

    await this.groupStudentsRepository.createMany(group.students.getNewItems())
    await this.groupStudentsRepository.deleteMany(
      group.students.getRemovedItems()
    )
  }

  async findById(id: string): Promise<Group | null> {
    const group = await this.prisma.group.findUnique({
      where: {
        id,
      },
    })

    if (!group) {
      return null
    }

    return PrismaGroupMapper.toDomain(group)
  }

  async findManyByShift(shift: string): Promise<Group[]> {
    const groups = await this.prisma.group.findMany({
      where: {
        shift: GroupShift[shift],
      },
    })

    return groups.map(PrismaGroupMapper.toDomain)
  }

  async findAll({ page, limit }: PaginationParams) {
    const perPage = limit ?? 10

    const groups = await this.prisma.group.findMany({
      take: perPage,
      skip: (page - 1) * perPage,
    })

    return groups.map(PrismaGroupMapper.toDomain)
  }

  async delete(group: Group): Promise<void> {
    await this.prisma.group.delete({
      where: {
        id: group.id.toString(),
      },
    })
  }
}

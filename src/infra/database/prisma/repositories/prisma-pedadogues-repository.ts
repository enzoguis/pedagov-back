import { PedagoguesRepository } from '@/domain/occurrences/application/repositories/pedagogues-repository'
import { Pedagogue } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { Injectable } from '@nestjs/common'
import { PrismaPedagogueMapper } from '../mappers/prisma-pedagogue-mapper'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaPedagoguesRepository implements PedagoguesRepository {
  constructor(private prisma: PrismaService) {}

  async create(pedagogue: Pedagogue, email: string): Promise<void> {
    const userData = {
      id: pedagogue.id.toString(),
      email: email,
      name: pedagogue.name,
      role: pedagogue.role,
    }

    const pedagogueData = PrismaPedagogueMapper.toPrisma(pedagogue)

    await this.prisma.$transaction([
      this.prisma.user.create({ data: userData }),
      this.prisma.pedagogue.create({ data: pedagogueData }),
    ])
  }

  async save(pedagogue: Pedagogue): Promise<void> {
    const userUpdate = this.prisma.user.update({
      where: {
        id: pedagogue.id.toString(),
      },
      data: {
        name: pedagogue.name,
      },
    })

    const pedagogueUpdate = this.prisma.pedagogue.update({
      where: {
        userId: pedagogue.id.toString(),
      },
      data: PrismaPedagogueMapper.toPrisma(pedagogue),
    })

    await this.prisma.$transaction([userUpdate, pedagogueUpdate])
  }

  async findAll(): Promise<Pedagogue[]> {
    const pedagogues = await this.prisma.pedagogue.findMany({
      include: {
        user: true,
      },
    })

    return pedagogues.map(PrismaPedagogueMapper.toDomain)
  }

  async findById(id: string): Promise<Pedagogue | null> {
    const pedagogue = await this.prisma.pedagogue.findUnique({
      where: {
        userId: id,
      },
      include: {
        user: true,
      },
    })

    if (!pedagogue) {
      return null
    }

    return PrismaPedagogueMapper.toDomain(pedagogue)
  }

  async delete(pedagogue: Pedagogue): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id: pedagogue.id.toString(),
      },
    })
  }
}

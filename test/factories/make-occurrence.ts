import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Occurrence,
  OccurrenceProps,
  OccurrenceTypeEnum,
} from '@/domain/occurrences/enterprise/entities/occurrence'
import { PrismaOccurrenceMapper } from '@/infra/database/prisma/mappers/prisma-occurrence-mapper'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { faker } from '@faker-js/faker'
import { Injectable } from '@nestjs/common'

export function makeOccurrence(
  override: Partial<OccurrenceProps> = {},
  id?: UniqueEntityID
) {
  const occurrence = Occurrence.create(
    {
      authorId: new UniqueEntityID(),
      description: faker.lorem.sentence(),
      teacherId: new UniqueEntityID(),
      type: OccurrenceTypeEnum.ABSENCES,
      title: faker.lorem.sentence(),
      ...override,
    },
    id
  )

  return occurrence
}

@Injectable()
export class OccurrenceFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaOccurrence(
    data: Partial<OccurrenceProps> = {}
  ): Promise<Occurrence> {
    const occurrence = makeOccurrence(data)

    await this.prisma.occurrence.create({
      data: PrismaOccurrenceMapper.toPrisma(occurrence),
    })

    return occurrence
  }
}

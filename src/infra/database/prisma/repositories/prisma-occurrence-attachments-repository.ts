import { OccurrenceAttachmentsRepository } from '@/domain/occurrences/application/repositories/occurrence-attachments-repository'
import { OccurrenceAttachment } from '@/domain/occurrences/enterprise/entities/occurrence-attachment'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaOccurrenceAttachmentsMapper } from '../mappers/prisma-occurrence-attachments-mapper'

@Injectable()
export class PrismaOccurrenceAttachmentsRepository
  implements OccurrenceAttachmentsRepository
{
  constructor(private prisma: PrismaService) {}

  async createMany(attachments: OccurrenceAttachment[]): Promise<void> {
    if (attachments.length === 0) {
      return
    }

    const data = PrismaOccurrenceAttachmentsMapper.toPrisma(attachments)

    await this.prisma.attachment.updateMany(data)
  }
  async deleteMany(attachments: OccurrenceAttachment[]): Promise<void> {
    if (attachments.length === 0) {
      return
    }

    const attachmentsIds = attachments.map((attachment) =>
      attachment.id.toString()
    )

    await this.prisma.attachment.deleteMany({
      where: {
        id: {
          in: attachmentsIds,
        },
      },
    })
  }

  async findManyByOccurrenceId(occurrenceId: string) {
    const attachments = await this.prisma.attachment.findMany({
      where: {
        occurrenceId,
      },
    })

    return attachments.map(PrismaOccurrenceAttachmentsMapper.toDomain)
  }
}

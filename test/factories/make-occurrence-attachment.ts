import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  OccurrenceAttachment,
  OccurrenceAttachmentProps,
} from '@/domain/occurrences/enterprise/entities/occurrence-attachment'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

export function makeOccurrenceAttachment(
  override: Partial<OccurrenceAttachmentProps> = {},
  id?: UniqueEntityID
) {
  const occurrenceAttachment = OccurrenceAttachment.create(
    {
      attachmentId: new UniqueEntityID(),
      occurrenceId: new UniqueEntityID(),
      ...override,
    },
    id
  )

  return occurrenceAttachment
}

@Injectable()
export class OccurrenceAttachmentFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaOccurrenceAttachment(
    data: Partial<OccurrenceAttachmentProps> = {}
  ): Promise<OccurrenceAttachment> {
    const occurrenceAttachment = makeOccurrenceAttachment(data)

    await this.prisma.attachment.update({
      where: {
        id: occurrenceAttachment.attachmentId.toString(),
      },
      data: {
        occurrenceId: occurrenceAttachment.occurrenceId.toString(),
      },
    })

    return occurrenceAttachment
  }
}

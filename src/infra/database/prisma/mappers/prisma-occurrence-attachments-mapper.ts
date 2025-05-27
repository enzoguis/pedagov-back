import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OccurrenceAttachment } from '@/domain/occurrences/enterprise/entities/occurrence-attachment'
import { Prisma, Attachment as PrismaAttachment } from '@prisma/client'

export class PrismaOccurrenceAttachmentsMapper {
  static toDomain(raw: PrismaAttachment): OccurrenceAttachment {
    return OccurrenceAttachment.create({
      attachmentId: new UniqueEntityID(raw.id),
      occurrenceId: new UniqueEntityID(raw.occurrenceId),
    })
  }

  static toPrisma(
    occurrenceAttachments: OccurrenceAttachment[]
  ): Prisma.AttachmentUpdateManyArgs {
    const attachmentIds = occurrenceAttachments.map((attachment) =>
      attachment.attachmentId.toString()
    )
    return {
      where: {
        id: {
          in: attachmentIds,
        },
      },
      data: {
        occurrenceId: occurrenceAttachments[0].occurrenceId.toString(),
      },
    }
  }
}

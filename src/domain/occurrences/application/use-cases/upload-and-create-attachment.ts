import { Either, left, right } from '@/core/either'
import { InvalidAttachmentTypeError } from './errors/invalid-attachment-type'
import { Uploader } from '../storage/uploader'
import { Attachment } from '@/domain/occurrences/enterprise/entities/attachment'
import { AttachmentsRepository } from '../repositories/attachments-repository'
import { Injectable } from '@nestjs/common'

interface UploadAndCreateAttachmentUseCaseRequest {
  fileName: string
  fileType: string
  body: Buffer
}

type UploadAndCreateAttachmentUseCaseResponse = Either<
  InvalidAttachmentTypeError,
  {
    attachment: Attachment
  }
>

@Injectable()
export class UploadAndCreateAttachmentUseCase {
  constructor(
    private uploader: Uploader,
    private attachmentsRepository: AttachmentsRepository
  ) {}
  async execute({
    body,
    fileName,
    fileType,
  }: UploadAndCreateAttachmentUseCaseRequest): Promise<UploadAndCreateAttachmentUseCaseResponse> {
    if (!/^(image\/(jpeg|png))$|^application\/pdf$/.test(fileType)) {
      return left(new InvalidAttachmentTypeError(fileType))
    }

    const { url } = await this.uploader.upload({ fileName, fileType, body })

    const attachment = Attachment.create({
      title: fileName,
      url,
    })

    await this.attachmentsRepository.create(attachment)

    return right({ attachment })
  }
}

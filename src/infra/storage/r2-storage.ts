import {
  Uploader,
  UploadParams,
} from '@/domain/occurrences/application/storage/uploader'
import { S3Client } from '@aws-sdk/client-s3'

export class R2Storage implements Uploader {
  private client: S3Client

  constructor() {
    this.client = new S3Client({
      
    })
  }

  async upload({
    body,
    fileName,
    fileType,
  }: UploadParams): Promise<{ url: string }> {}
}

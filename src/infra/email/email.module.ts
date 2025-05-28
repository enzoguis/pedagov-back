import { EmailSender } from '@/domain/occurrences/application/email/email-sender'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { NodeMailerSender } from './nodemailer-sender'

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: EmailSender,
      useClass: NodeMailerSender,
    },
  ],
  exports: [EmailSender],
})
export class EmailModule {}

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { NodeMailerSender } from './nodemailer-sender'
import { EmailSender } from '@/core/email/email-sender'

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

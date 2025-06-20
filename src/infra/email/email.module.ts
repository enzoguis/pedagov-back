import { Module } from '@nestjs/common'
import { MailerModule } from '@nestjs-modules/mailer'
import { EmailSender } from '@/core/email/email-sender'
import { MailerSender } from './mailersender-sender'
import { EnvModule } from '../env/env.module'
import { EnvService } from '../env/env.service'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule,
    MailerModule.forRootAsync({
      imports: [EnvModule],
      inject: [EnvService],
      useFactory: async (env: EnvService) => ({
        transport: {
          service: 'gmail',
          auth: {
            user: env.get('GMAIL_AUTH_USER'),
            pass: env.get('GMAIL_AUTH_PASSWORD'),
          },
        },
        defaults: {
          from: `"Escola ${env.get('GMAIL_AUTH_USER')}" <${env.get(
            'GMAIL_AUTH_USER'
          )}>`,
        },
      }),
    }),
  ],
  providers: [
    {
      provide: EmailSender,
      useClass: MailerSender,
    },
  ],
  exports: [EmailSender],
})
export class EmailModule {}

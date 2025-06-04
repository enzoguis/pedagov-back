import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MailerModule } from '@nestjs-modules/mailer'
import { EmailSender } from '@/core/email/email-sender'
import { MailerSender } from './mailersender-sender'

@Module({
  imports: [
    ConfigModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        transport: {
          service: 'gmail',
          auth: {
            user: config.get('GMAIL_AUTH_USER'),
            pass: config.get('GMAIL_AUTH_PASSWORD'),
          },
        },
        defaults: {
          from: `"Escola" <${config.get('GMAIL_AUTH_USER')}>`,
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

import { EmailSender, EmailSenderSendParams } from '@/core/email/email-sender'
import { Injectable } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class MailerSender implements EmailSender {
  constructor(private mailerService: MailerService) {}

  async send(message: EmailSenderSendParams): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: 'enzog0315@gmail.com',
        subject: 'Nova ocorrência registrada',
        text: `Seu filho teve uma nova ocorrência escolar registrada`,
      })
      console.log('E-mail enviado com sucesso!')
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error)
      throw error
    }
  }
}

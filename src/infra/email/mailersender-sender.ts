import { EmailSender, EmailSenderSendParams } from '@/core/email/email-sender'
import { Injectable } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class MailerSender implements EmailSender {
  constructor(private mailerService: MailerService) {}

  async send(message: EmailSenderSendParams): Promise<void> {
    const templates = {
      OCCURRENCE_CREATED: {
        subject: 'Nova ocorrência registrada',
        text: `Seu filho ${message.data.studentName} teve uma nova ocorrência escolar registrada.`,
      },
      TEMPORARY_PASSWORD_CREATED: {
        subject: 'Sua senha temporária de acesso',
        text: `Sua senha temporária de acesso é: ${message.data.temporaryPassword}`,
      },
    }

    const selectedTemplate = templates[message.templateId]

    if (!selectedTemplate) {
      throw new Error(`Template "${message.templateId}" não encontrado`)
    }

    try {
      await this.mailerService.sendMail({
        to: message.recipientEmail,
        subject: selectedTemplate.subject,
        text: selectedTemplate.text,
      })
      console.log('E-mail enviado com sucesso!')
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error)
    }
  }
}

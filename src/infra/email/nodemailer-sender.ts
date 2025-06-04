import { EmailSender, EmailSenderSendParams } from '@/core/email/email-sender'
import { ConfigService } from '@nestjs/config'
import nodemailer from 'nodemailer'
import { Env } from '../env'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NodeMailerSender implements EmailSender {
  private GMAIL_USER: string
  private GMAIL_AUTH_PASSWORD: string

  constructor(configService: ConfigService<Env, true>) {
    this.GMAIL_USER = configService.get('GMAIL_AUTH_USER')
    this.GMAIL_AUTH_PASSWORD = configService.get('GMAIL_AUTH_PASSWORD')
  }

  async send(message: EmailSenderSendParams): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.GMAIL_USER,
        pass: this.GMAIL_AUTH_PASSWORD,
      },
    })

    await transporter
      .sendMail({
        from: this.GMAIL_USER,
        to: 'enzog0315@gmail.com',
        subject: 'Nova ocorrência registrada',
        text: `Seu filho ${message.data.studentName} teve uma nova ocorrência escolar registrada`,
      })
      .then(() => {
        console.log('E-mail enviado com sucesso!')
      })
      .catch((err) => {
        console.error('Erro ao enviar e-mail:', err)
      })
  }
}

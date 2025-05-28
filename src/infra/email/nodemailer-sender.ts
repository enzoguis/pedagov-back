import { EmailSender, EmailSenderSendParams } from '@/core/email/email-sender'
import { ConfigService } from '@nestjs/config'
import nodemailer from 'nodemailer'
import { Env } from '../env'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NodeMailerSender implements EmailSender {
  private GMAIL_USER: string
  private OAUTH_CLIENT_ID: string
  private OAUTH_ACCESS_TOKEN: string
  private OAUTH_REFRESH_TOKEN: string

  constructor(configService: ConfigService<Env, true>) {
    this.GMAIL_USER = configService.get('GMAIL_AUTH_USER')
    this.OAUTH_CLIENT_ID = configService.get('GOOGLE_OAUTH_CLIENT_ID')
    this.OAUTH_ACCESS_TOKEN = configService.get('GOOGLE_OAUTH_ACCESS_TOKEN')
    this.OAUTH_REFRESH_TOKEN = configService.get('GOOGLE_OAUTH_REFRESH_TOKEN')
  }

  async send(message: EmailSenderSendParams): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAUTH2',
        user: this.GMAIL_USER,
        clientId: this.OAUTH_CLIENT_ID,
        accessToken: this.OAUTH_ACCESS_TOKEN,
        refreshToken: this.OAUTH_REFRESH_TOKEN,
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

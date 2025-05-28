import {
  EmailSender,
  EmailSenderSendParams,
} from '@/domain/occurrences/application/email/email-sender'
import { ConfigService } from '@nestjs/config'
import nodemailer from 'nodemailer'
import { Env } from '../env'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NodeMailerSender implements EmailSender {
  private gmailUser: string
  private gmailPassword: string

  constructor(configService: ConfigService<Env, true>) {
    this.gmailUser = configService.get('GMAIL_AUTH_USER')
    this.gmailPassword = configService.get('GMAIL_AUTH_PASSWORD')
  }

  async send(message: EmailSenderSendParams): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.gmailUser,
        pass: this.gmailPassword,
      },
    })

    await transporter
      .sendMail({
        from: this.gmailUser,
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

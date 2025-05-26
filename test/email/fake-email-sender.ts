import {
  EmailMessage,
  EmailSender,
} from '@/domain/occurrences/application/email/email-sender'

export class FakeEmailSender implements EmailSender {
  public sentMessages: EmailMessage[] = []

  async send(message: EmailMessage): Promise<void> {
    this.sentMessages.push(message)
  }
}

// export class FakeEmailSender implements EmailSender {
//   async send(message: EmailMessage): Promise<void> {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'pedagov.test@gmail.com',
//         pass: '',
//       },
//     })

//     await transporter
//       .sendMail({
//         from: message.from,
//         to: 'enzog0315@gmail.com',
//         subject: message.subject,
//         text: message.body,
//         html: message.html,
//       })
//       .then(() => {
//         console.log('E-mail enviado com sucesso!')
//       })
//       .catch((err) => {
//         console.error('Erro ao enviar e-mail:', err)
//       })
//   }
// }

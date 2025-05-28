import { EmailSender, EmailSenderSendParams } from '@/core/email/email-sender'

export class FakeEmailSender implements EmailSender {
  public sentMessages: EmailSenderSendParams[] = []

  async send(message: EmailSenderSendParams): Promise<void> {
    this.sentMessages.push(message)
  }
}

export interface EmailMessage {
  recipientEmail: string
  templateId: string
  data: Record<string, unknown>
}

export abstract class EmailSender {
  abstract send(message: EmailMessage): Promise<void>
}

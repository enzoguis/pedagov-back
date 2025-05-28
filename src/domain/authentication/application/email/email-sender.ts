export enum EmailSenderTemplateIdEnum {
  TEMPORARY_PASSWORD_CREATED = 'TEMPORARY_PASSWORD_CREATED',
}

export interface EmailSenderSendParams {
  recipientEmail: string
  templateId: EmailSenderTemplateIdEnum
  data: Record<string, unknown>
}

export abstract class EmailSender {
  abstract send(message: EmailSenderSendParams): Promise<void>
}

import { OnPedagogueCreated } from '@/domain/authentication/application/subscribers/on-pedagogue-created'
import { CreateTemporaryCredentialsUseCase } from '@/domain/authentication/application/use-cases/create-temporary-credentials'
import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { EmailModule } from '../email/email.module'

@Module({
  imports: [DatabaseModule, CryptographyModule, EmailModule],
  providers: [OnPedagogueCreated, CreateTemporaryCredentialsUseCase],
})
export class EventsModule {}

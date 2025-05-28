import { Module } from '@nestjs/common'
import { AuthenticateController } from './controllers/authenticate.controller'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateOccurrenceController } from './controllers/create-occurrence.controller'
import { CreateOccurrenceUseCase } from '@/domain/occurrences/application/use-cases/create-occurrence'
import { DatabaseModule } from '../database/database.module'
import { EmailModule } from '../email/email.module'

@Module({
  imports: [DatabaseModule, EmailModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateOccurrenceController,
  ],
  providers: [CreateOccurrenceUseCase],
})
export class HttpModule {}

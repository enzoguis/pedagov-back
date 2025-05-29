import { Module } from '@nestjs/common'
import { AuthenticateController } from './controllers/authenticate.controller'
import { CreateOccurrenceController } from './controllers/create-occurrence.controller'
import { CreateOccurrenceUseCase } from '@/domain/occurrences/application/use-cases/create-occurrence'
import { DatabaseModule } from '../database/database.module'
import { EmailModule } from '../email/email.module'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { AuthenticateUseCase } from '@/domain/authentication/application/use-cases/authenticate'
import { CreatePedagogueController } from './controllers/create-pedagogue.controller'
import { CreatePedagogueUseCase } from '@/domain/occurrences/application/use-cases/create-pedagogue'

@Module({
  imports: [DatabaseModule, EmailModule, CryptographyModule],
  controllers: [
    CreatePedagogueController,
    AuthenticateController,
    CreateOccurrenceController,
  ],
  providers: [
    CreateOccurrenceUseCase,
    AuthenticateUseCase,
    CreatePedagogueUseCase,
  ],
})
export class HttpModule {}

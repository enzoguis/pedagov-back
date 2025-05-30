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
import { CreateGroupController } from './controllers/create-group.controller'
import { CreateGroupUseCase } from '@/domain/occurrences/application/use-cases/create-group'
import { CreateStudentController } from './controllers/create-student.controller'
import { CreateStudentUseCase } from '@/domain/occurrences/application/use-cases/create-student'
import { CreateTeacherController } from './controllers/create-teacher.controller'
import { CreateTeacherUseCase } from '@/domain/occurrences/application/use-cases/create-teacher'

@Module({
  imports: [DatabaseModule, EmailModule, CryptographyModule],
  controllers: [
    CreatePedagogueController,
    AuthenticateController,
    CreateOccurrenceController,
    CreateGroupController,
    CreateStudentController,
    CreateTeacherController,
  ],
  providers: [
    CreateOccurrenceUseCase,
    AuthenticateUseCase,
    CreatePedagogueUseCase,
    CreateGroupUseCase,
    CreateStudentUseCase,
    CreateTeacherUseCase,
  ],
})
export class HttpModule {}

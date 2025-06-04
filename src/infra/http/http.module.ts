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
import { DeleteGroupController } from './controllers/delete-group.controller'
import { DeleteGroupUseCase } from '@/domain/occurrences/application/use-cases/delete-group'
import { DeleteOccurrenceController } from './controllers/delete-occurrence.controller'
import { DeleteOccurrenceUseCase } from '@/domain/occurrences/application/use-cases/delete-occurrence'
import { DeletePedagogueController } from './controllers/delete-pedagogue.controller'
import { DeletePedagogueUseCase } from '@/domain/occurrences/application/use-cases/delete-pedagogue'
import { DeleteStudentController } from './controllers/delete-student.controller'
import { DeleteStudentUseCase } from '@/domain/occurrences/application/use-cases/delete-student'
import { DeleteTeacherController } from './controllers/delete-teacher.controller'
import { DeleteTeacherUseCase } from '@/domain/occurrences/application/use-cases/delete-teacher'
import { EditGroupController } from './controllers/edit-group.controller'
import { EditGroupUseCase } from '@/domain/occurrences/application/use-cases/edit-group'
import { EditOccurrenceController } from './controllers/edit-occurrence.controller'
import { EditOccurrenceUseCase } from '@/domain/occurrences/application/use-cases/edit-occurrence'
import { ChangePasswordController } from './controllers/change-password.controller'
import { ChangePasswordUseCase } from '@/domain/authentication/application/use-cases/change-password'
import { FetchAllOccurrencesController } from './controllers/fetch-all-occurrences.controller'
import { FetchAllOccurrencesUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-occurrences'

@Module({
  imports: [DatabaseModule, EmailModule, CryptographyModule],
  controllers: [
    CreatePedagogueController,
    AuthenticateController,
    CreateOccurrenceController,
    CreateGroupController,
    CreateStudentController,
    CreateTeacherController,
    DeleteGroupController,
    DeleteOccurrenceController,
    DeletePedagogueController,
    DeleteStudentController,
    DeleteTeacherController,
    EditGroupController,
    EditOccurrenceController,
    ChangePasswordController,
    FetchAllOccurrencesController,
  ],
  providers: [
    CreateOccurrenceUseCase,
    AuthenticateUseCase,
    CreatePedagogueUseCase,
    CreateGroupUseCase,
    CreateStudentUseCase,
    CreateTeacherUseCase,
    DeleteGroupUseCase,
    DeleteOccurrenceUseCase,
    DeletePedagogueUseCase,
    DeleteStudentUseCase,
    DeleteTeacherUseCase,
    EditGroupUseCase,
    EditOccurrenceUseCase,
    ChangePasswordUseCase,
    FetchAllOccurrencesUseCase,
  ],
})
export class HttpModule {}

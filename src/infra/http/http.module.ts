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
import { GetPedagogueByIdController } from './controllers/get-pedagogue-by-id.controller'
import { GetPedagogueByIdUseCase } from '@/domain/occurrences/application/use-cases/get-pedagogue-by-id'
import { GetStudentWithOccurrencesController } from './controllers/get-student-with-occurrences.controller'
import { GetStudentWithOccurrencesUseCase } from '@/domain/occurrences/application/use-cases/get-student-with-occurrences'
import { EditPedagogueController } from './controllers/edit-pedagogue.controller'
import { EditPedagogueUseCase } from '@/domain/occurrences/application/use-cases/edit-pedagogue'
import { FetchAllOccurrencesController } from './controllers/fetch-all-occurrences.controller'
import { FetchAllOccurrencesUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-occurrences'
import { GetOccurrenceDetailsController } from './controllers/get-occurrence-details.controller'
import { GetOccurrenceDetailsUseCase } from '@/domain/occurrences/application/use-cases/get-occurrence-details'
import { FetchAllPedagoguesController } from './controllers/fetch-all-pedagogues.controller'
import { FetchAllPedagoguesUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-pedagogues'
import { UploadAttachmentController } from './controllers/upload-attachment.controller'
import { UploadAndCreateAttachmentUseCase } from '@/domain/occurrences/application/use-cases/upload-and-create-attachment'
import { StorageModule } from '../storage/storage.module'
import { FetchAllTeachersController } from './controllers/fetch-all-teachers.controller'
import { FetchAllTeachersUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-teachers'
import { GetTeacherByIdController } from './controllers/get-teacher-by-id.controller'
import { GetTeacherByIdUseCase } from '@/domain/occurrences/application/use-cases/get-teacher-by-id'
import { EditTeacherController } from './controllers/edit-teacher.controller'
import { EditTeacherUseCase } from '@/domain/occurrences/application/use-cases/edit-teacher'
import { FetchAllPossiblesAttendeesController } from './controllers/fetch-all-possibles-attendees.controller'
import { FetchAllPossiblesAttendeesUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-possibles-attendees'
import { FetchOccurrencesPerStudentController } from './controllers/fetch-occurrences-per-student.controller'
import { FetchOccurrencesPerStudentUseCase } from '@/domain/occurrences/application/use-cases/fetch-occurrences-per-student'
import { FetchAllGroupsController } from './controllers/fetch-all-groups.controller'
import { FetchAllGroupsUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-groups'
import { FetchAllStudentsController } from './controllers/fetch-all-students.controller'
import { FetchAllStudentsUseCase } from '@/domain/occurrences/application/use-cases/fetch-all-students'

@Module({
  imports: [DatabaseModule, EmailModule, CryptographyModule, StorageModule],
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
    GetPedagogueByIdController,
    GetStudentWithOccurrencesController,
    EditPedagogueController,
    FetchAllOccurrencesController,
    GetOccurrenceDetailsController,
    FetchAllPedagoguesController,
    UploadAttachmentController,
    FetchAllTeachersController,
    GetTeacherByIdController,
    EditTeacherController,
    FetchAllPossiblesAttendeesController,
    FetchOccurrencesPerStudentController,
    FetchAllGroupsController,
    FetchAllStudentsController,
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
    GetPedagogueByIdUseCase,
    GetStudentWithOccurrencesUseCase,
    EditPedagogueUseCase,
    FetchAllOccurrencesUseCase,
    GetOccurrenceDetailsUseCase,
    FetchAllPedagoguesUseCase,
    UploadAndCreateAttachmentUseCase,
    FetchAllTeachersUseCase,
    GetTeacherByIdUseCase,
    EditTeacherUseCase,
    FetchAllPossiblesAttendeesUseCase,
    FetchOccurrencesPerStudentUseCase,
    FetchAllGroupsUseCase,
    FetchAllStudentsUseCase,
  ],
})
export class HttpModule {}

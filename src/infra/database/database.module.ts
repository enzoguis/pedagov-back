import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { AttachmentsRepository } from '@/domain/occurrences/application/repositories/attachments-repository'
import { PrismaAttachmentsRepository } from './prisma/repositories/prisma-attachments-repository'
import { GroupStudentsRepository } from '@/domain/occurrences/application/repositories/group-student-repository'
import { PrismaGroupStudentsRepository } from './prisma/repositories/prisma-group-students-repository'
import { GroupsRepository } from '@/domain/occurrences/application/repositories/groups-repository'
import { PrismaGroupsRepository } from './prisma/repositories/prisma-groups-repository'
import { OccurrenceAttachmentsRepository } from '@/domain/occurrences/application/repositories/occurrence-attachments-repository'
import { PrismaOccurrenceAttachmentsRepository } from './prisma/repositories/prisma-occurrence-attachments-repository'
import { OccurrenceAttendeesRepository } from '@/domain/occurrences/application/repositories/occurrence-attendees-repository'
import { PrismaOccurrenceAttendeesRepository } from './prisma/repositories/prisma-occurrence-attendees-repository'
import { OccurrenceStudentsRepository } from '@/domain/occurrences/application/repositories/occurrence-student-repository'
import { PrismaOccurrenceStudentsRepository } from './prisma/repositories/prisma-occurrence-students-repository'
import { OccurrencesRepository } from '@/domain/occurrences/application/repositories/occurrences-repository'
import { PrismaOccurrencesRepository } from './prisma/repositories/prisma-occurrences-repository'
import { PedagoguesRepository } from '@/domain/occurrences/application/repositories/pedagogues-repository'
import { PrismaPedagoguesRepository } from './prisma/repositories/prisma-pedadogues-repository'
import { StudentsRepository } from '@/domain/occurrences/application/repositories/students-repository'
import { PrismaStudentsRepository } from './prisma/repositories/prisma-students-repository'
import { UsersRepository } from '@/domain/authentication/application/repositories/users-repository'
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository'
import { PrismaTeachersRepository } from './prisma/repositories/prisma-teachers-repository'
import { TeachersRepository } from '@/domain/occurrences/application/repositories/teachers-repository'
import { OccurrenceHistoriesRepository } from '@/domain/occurrences/application/repositories/occurrence-histories-repository'
import { PrismaOccurrenceHistoriesRepository } from './prisma/repositories/prisma-occurrence-histories-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: AttachmentsRepository,
      useClass: PrismaAttachmentsRepository,
    },
    {
      provide: GroupStudentsRepository,
      useClass: PrismaGroupStudentsRepository,
    },
    {
      provide: GroupsRepository,
      useClass: PrismaGroupsRepository,
    },
    {
      provide: OccurrenceAttachmentsRepository,
      useClass: PrismaOccurrenceAttachmentsRepository,
    },
    {
      provide: OccurrenceAttendeesRepository,
      useClass: PrismaOccurrenceAttendeesRepository,
    },
    {
      provide: OccurrenceStudentsRepository,
      useClass: PrismaOccurrenceStudentsRepository,
    },
    {
      provide: OccurrencesRepository,
      useClass: PrismaOccurrencesRepository,
    },
    {
      provide: PedagoguesRepository,
      useClass: PrismaPedagoguesRepository,
    },
    {
      provide: StudentsRepository,
      useClass: PrismaStudentsRepository,
    },
    {
      provide: TeachersRepository,
      useClass: PrismaTeachersRepository,
    },
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: OccurrenceHistoriesRepository,
      useClass: PrismaOccurrenceHistoriesRepository,
    },
  ],
  exports: [
    PrismaService,
    AttachmentsRepository,
    GroupStudentsRepository,
    GroupsRepository,
    OccurrenceAttachmentsRepository,
    OccurrenceAttendeesRepository,
    OccurrenceStudentsRepository,
    OccurrencesRepository,
    PedagoguesRepository,
    StudentsRepository,
    TeachersRepository,
    UsersRepository,
    OccurrenceHistoriesRepository,
  ],
})
export class DatabaseModule {}

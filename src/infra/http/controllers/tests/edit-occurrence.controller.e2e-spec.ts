import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import { AttachmentFactory } from 'test/factories/make-attachments'
import { StudentFactory } from 'test/factories/make-student'
import request from 'supertest'
import { TeacherFactory } from 'test/factories/make-teacher'
import { DatabaseModule } from '@/infra/database/database.module'
import { GroupFactory } from 'test/factories/make-group'
import { OccurrenceFactory } from 'test/factories/make-occurrence'

describe('Edit Occurrence (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let pedagogueFactory: PedagogueFactory
  let attachmentFactory: AttachmentFactory
  let studentFactory: StudentFactory
  let teacherFactory: TeacherFactory
  let groupFactory: GroupFactory
  let occurrenceFactory: OccurrenceFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [
        PedagogueFactory,
        AttachmentFactory,
        StudentFactory,
        TeacherFactory,
        GroupFactory,
        OccurrenceFactory,
      ],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    pedagogueFactory = moduleRef.get(PedagogueFactory)
    attachmentFactory = moduleRef.get(AttachmentFactory)
    studentFactory = moduleRef.get(StudentFactory)
    teacherFactory = moduleRef.get(TeacherFactory)
    groupFactory = moduleRef.get(GroupFactory)
    occurrenceFactory = moduleRef.get(OccurrenceFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[PUT] /occurrences/:id', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue()
    const teacher = await teacherFactory.makePrismaTeacher()

    const occurrence = await occurrenceFactory.makePrismaOccurrence({
      authorId: author.id,
      teacherId: teacher.id,
    })

    const group = await groupFactory.makePrismaGroup({
      teacherId: teacher.id,
    })

    const student = await studentFactory.makePrismaStudent({
      groupId: group.id,
    })

    const attachment = await attachmentFactory.makePrismaAttachment()

    const occurrenceId = occurrence.id.toString()

    const accessToken = await jwt.sign({ sub: author.id.toString() })

    const response = await request(app.getHttpServer())
      .put(`/occurrences/${occurrenceId}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        title: 'Aluno faltou à aula',
        description: occurrence.description,
        studentsIds: [student.id.toString()],
        attendeesIds: [author.id.toString()],
        attachmentsIds: [attachment.id.toString()],
        teacherId: teacher.id.toString(),
        type: 'ABSENCES',
      })

    expect(response.statusCode).toBe(201)

    const occurrenceOnDatabase = await prisma.occurrence.findFirst({
      where: {
        title: 'Aluno faltou à aula',
      },
    })

    expect(occurrenceOnDatabase).toBeTruthy()

    const occurrenceHistoryOnDatabase =
      await prisma.occurrenceHistory.findFirst({
        where: {
          occurrenceId: occurrenceId,
        },
      })

    expect(occurrenceHistoryOnDatabase).toBeTruthy()
    expect(occurrenceHistoryOnDatabase?.changes).toHaveLength(4)

    const occurrenceAttendeesOnDatabase =
      await prisma.occurrenceAttendees.findMany({
        where: {
          occurrenceId: occurrenceId,
        },
      })

    expect(occurrenceAttendeesOnDatabase[0].userId).toBe(author.id.toString())

    const occurrenceStudentsOnDatabase =
      await prisma.occurrenceStudents.findMany({
        where: {
          occurrenceId: occurrenceId,
        },
      })

    expect(occurrenceStudentsOnDatabase[0].studentId).toBe(
      student.id.toString()
    )

    const attachmentOnDatabase = await prisma.attachment.findFirst({
      where: {
        occurrenceId: occurrenceId,
      },
    })

    expect(attachmentOnDatabase?.title).toBe(attachment.title)
  })
})

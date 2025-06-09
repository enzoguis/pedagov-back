import { AppModule } from '@/infra/app.module'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { PedagogueRoleEnum } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { OccurrenceFactory } from 'test/factories/make-occurrence'
import { OccurrenceAttachmentFactory } from 'test/factories/make-occurrence-attachment'
import { AttachmentFactory } from 'test/factories/make-attachments'
import { StudentFactory } from 'test/factories/make-student'
import { OccurrenceStudentFactory } from 'test/factories/make-occurrence-student'
import { GroupFactory } from 'test/factories/make-group'
import { TeacherFactory } from 'test/factories/make-teacher'
import { OccurrenceAttendeeFactory } from 'test/factories/make-occurrence-attendee'
import { array } from 'zod'

describe('Get Occurrence Details (E2E)', () => {
  let app: INestApplication
  let pedagogueFactory: PedagogueFactory
  let occurrenceFactory: OccurrenceFactory
  let attachmentFactory: AttachmentFactory
  let occurrenceAttachmentFactory: OccurrenceAttachmentFactory
  let studentFactory: StudentFactory
  let occurrenceStudentFactory: OccurrenceStudentFactory
  let groupFactory: GroupFactory
  let teacherFactory: TeacherFactory
  let occurrenceAttendeeFactory: OccurrenceAttendeeFactory

  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [
        PedagogueFactory,
        OccurrenceFactory,
        AttachmentFactory,
        OccurrenceAttachmentFactory,
        StudentFactory,
        OccurrenceStudentFactory,
        GroupFactory,
        TeacherFactory,
        OccurrenceAttendeeFactory,
      ],
    }).compile()

    app = moduleRef.createNestApplication()

    pedagogueFactory = moduleRef.get(PedagogueFactory)
    occurrenceFactory = moduleRef.get(OccurrenceFactory)
    attachmentFactory = moduleRef.get(AttachmentFactory)
    occurrenceAttachmentFactory = moduleRef.get(OccurrenceAttachmentFactory)
    studentFactory = moduleRef.get(StudentFactory)
    occurrenceStudentFactory = moduleRef.get(OccurrenceStudentFactory)
    groupFactory = moduleRef.get(GroupFactory)
    teacherFactory = moduleRef.get(TeacherFactory)
    occurrenceAttendeeFactory = moduleRef.get(OccurrenceAttendeeFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[GET] /occurrences/:id', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue({
      role: PedagogueRoleEnum.COMMON,
    })

    const teacher = await teacherFactory.makePrismaTeacher()

    const group = await groupFactory.makePrismaGroup({
      teacherId: teacher.id,
    })

    const student = await studentFactory.makePrismaStudent({
      groupId: group.id,
    })

    const attachment = await attachmentFactory.makePrismaAttachment()

    const occurrence = await occurrenceFactory.makePrismaOccurrence({
      authorId: author.id,
      teacherId: teacher.id,
    })

    await occurrenceAttachmentFactory.makePrismaOccurrenceAttachment({
      attachmentId: attachment.id,
      occurrenceId: occurrence.id,
    })

    await occurrenceStudentFactory.makePrismaOccurrenceStudent({
      occurrenceId: occurrence.id,
      studentId: student.id,
    })

    await occurrenceAttendeeFactory.makePrismaOccurrenceAttendee({
      attendeeId: author.id,
      occurrenceId: occurrence.id,
    })

    const accessToken = jwt.sign({
      sub: author.id.toString(),
      roles: ['COMMON'],
    })

    const response = await request(app.getHttpServer())
      .get(`/occurrences/${occurrence.id.toString()}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.body.result).toEqual(
      expect.objectContaining({
        author: author.name,
        title: occurrence.title,
        students: expect.arrayContaining([
          expect.objectContaining({
            name: student.name,
          }),
        ]),
        attendees: expect.arrayContaining([
          expect.objectContaining({
            name: author.name,
          }),
        ]),
        attachments: expect.arrayContaining([
          expect.objectContaining({
            url: attachment.url,
          }),
        ]),
      })
    )
  })
})

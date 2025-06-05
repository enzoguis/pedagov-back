import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { StudentFactory } from 'test/factories/make-student'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { DomainEvents } from '@/core/events/domain-events'
import { GroupFactory } from 'test/factories/make-group'
import { TeacherFactory } from 'test/factories/make-teacher'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import { OccurrenceFactory } from 'test/factories/make-occurrence'
import { OccurrenceStudentFactory } from 'test/factories/make-occurrence-student'

describe('Get Student With Occurrences (E2E)', () => {
  let app: INestApplication
  let studentFactory: StudentFactory
  let groupFactory: GroupFactory
  let teacherFactory: TeacherFactory
  let pedagogueFactory: PedagogueFactory
  let occurrenceFactory: OccurrenceFactory
  let occurrenceStudentFactory: OccurrenceStudentFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [
        StudentFactory,
        GroupFactory,
        TeacherFactory,
        PedagogueFactory,
        OccurrenceFactory,
        OccurrenceStudentFactory,
      ],
    }).compile()

    app = moduleRef.createNestApplication()

    studentFactory = moduleRef.get(StudentFactory)
    groupFactory = moduleRef.get(GroupFactory)
    teacherFactory = moduleRef.get(TeacherFactory)
    pedagogueFactory = moduleRef.get(PedagogueFactory)
    occurrenceFactory = moduleRef.get(OccurrenceFactory)
    occurrenceStudentFactory = moduleRef.get(OccurrenceStudentFactory)

    jwt = moduleRef.get(JwtService)

    DomainEvents.shouldRun = true

    await app.init()
  })

  test('[GET] /students/:id', async () => {
    const teacher = await teacherFactory.makePrismaTeacher()

    const group = await groupFactory.makePrismaGroup({
      teacherId: teacher.id,
    })

    const student = await studentFactory.makePrismaStudent({
      groupId: group.id,
    })

    const author = await pedagogueFactory.makePrismaPedagogue()

    const occurrence = await occurrenceFactory.makePrismaOccurrence({
      authorId: author.id,
      teacherId: teacher.id,
    })

    await occurrenceStudentFactory.makePrismaOccurrenceStudent({
      occurrenceId: occurrence.id,
      studentId: student.id,
    })

    const accessToken = jwt.sign({
      sub: author.id.toString(),
      roles: ['COMMON'],
    })

    const response = await request(app.getHttpServer())
      .get(`/students/${student.id.toString()}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.body).toEqual({
      result: {
        studentId: { value: student.id.toString() },
        student: student.name,
        groupId: group.id.toString(),
        group: group.name,
        cpf: student.cpf.value,
        responsibleEmail: student.responsibleEmail,
        responsiblePhone: student.responsiblePhone,
        status: student.status,
        occurrences: [
          {
            id: occurrence.id.toString(),
            title: occurrence.title,
            description: occurrence.description,
            type: occurrence.type,
            createdAt: expect.any(String),
          },
        ],
      },
    })
  })
})

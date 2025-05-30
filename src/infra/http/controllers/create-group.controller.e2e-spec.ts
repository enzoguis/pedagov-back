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

describe('Create Group (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let pedagogueFactory: PedagogueFactory
  let attachmentFactory: AttachmentFactory
  let studentFactory: StudentFactory
  let teacherFactory: TeacherFactory
  let groupFactory: GroupFactory
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
      ],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    pedagogueFactory = moduleRef.get(PedagogueFactory)
    attachmentFactory = moduleRef.get(AttachmentFactory)
    studentFactory = moduleRef.get(StudentFactory)
    teacherFactory = moduleRef.get(TeacherFactory)
    groupFactory = moduleRef.get(GroupFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[POST] /groups', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue()

    const teacher = await teacherFactory.makePrismaTeacher()

    const accessToken = await jwt.sign({ sub: author.id.toString() })

    const response = await request(app.getHttpServer())
      .post('/groups')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        name: '9 ano A',
        shift: 'morning',
        studentsIds: [],
        teacherId: teacher.id.toString(),
      })

    expect(response.statusCode).toBe(201)

    const groupOnDatabase = await prisma.group.findFirst({
      where: {
        name: '9 ano A',
      },
    })

    expect(groupOnDatabase).toBeTruthy()
  })
})

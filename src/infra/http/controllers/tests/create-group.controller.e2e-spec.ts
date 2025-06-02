import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import request from 'supertest'
import { TeacherFactory } from 'test/factories/make-teacher'
import { DatabaseModule } from '@/infra/database/database.module'

describe('Create Group (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let pedagogueFactory: PedagogueFactory
  let teacherFactory: TeacherFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [PedagogueFactory, TeacherFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    pedagogueFactory = moduleRef.get(PedagogueFactory)
    teacherFactory = moduleRef.get(TeacherFactory)

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

import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import { TeacherFactory } from 'test/factories/make-teacher'

describe('Create Teacher (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let pedagogueFactory: PedagogueFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [TeacherFactory, PedagogueFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    pedagogueFactory = moduleRef.get(PedagogueFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[POST] /accounts/teacher', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue()

    const accessToken = jwt.sign({
      sub: author.id.toString(),
    })

    const response = await request(app.getHttpServer())
      .post('/accounts/teacher')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        name: 'teacher-1',
        status: 'active',
      })

    expect(response.statusCode).toBe(201)

    const { id } = response.body.result

    const teacherOnDatabase = await prisma.teacher.findUnique({
      where: {
        userId: id.value,
      },
    })

    expect(teacherOnDatabase).toBeTruthy()

    const teacherUserOnDatabase = await prisma.user.findUnique({
      where: {
        id: id.value,
      },
    })

    expect(teacherOnDatabase).toBeTruthy()
    expect(teacherUserOnDatabase).toEqual(
      expect.objectContaining({
        name: 'teacher-1',
      })
    )
  })
})

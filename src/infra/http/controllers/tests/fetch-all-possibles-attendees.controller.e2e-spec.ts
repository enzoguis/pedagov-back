import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { TeacherFactory } from 'test/factories/make-teacher'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { PedagogueFactory } from 'test/factories/make-pedagogue'

describe('Fetch All Possibles Attendees (E2E)', () => {
  let app: INestApplication
  let teacherFactory: TeacherFactory
  let pedagogueFactory: PedagogueFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [TeacherFactory, PedagogueFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    teacherFactory = moduleRef.get(TeacherFactory)
    pedagogueFactory = moduleRef.get(PedagogueFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[GET] /attendees', async () => {
    const teacher1 = await teacherFactory.makePrismaTeacher()
    const teacher2 = await teacherFactory.makePrismaTeacher()

    const pedagogue1 = await pedagogueFactory.makePrismaPedagogue(
      {},
      'johndoe@example.com'
    )
    const pedagogue2 = await pedagogueFactory.makePrismaPedagogue(
      {},
      'pedagogue@example.com'
    )

    const accessToken = jwt.sign({
      sub: teacher1.id.toString(),
      roles: ['COMMON'],
    })

    const response = await request(app.getHttpServer())
      .get(`/attendees`)
      .query({
        page: 1,
      })
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.body.result).toEqual(
      expect.arrayContaining([
        {
          id: teacher1.id.toString(),
          name: teacher1.name,
        },
        {
          id: teacher2.id.toString(),
          name: teacher2.name,
        },
        {
          id: pedagogue1.id.toString(),
          name: pedagogue1.name,
        },
        {
          id: pedagogue2.id.toString(),
          name: pedagogue2.name,
        },
      ])
    )
  })
})

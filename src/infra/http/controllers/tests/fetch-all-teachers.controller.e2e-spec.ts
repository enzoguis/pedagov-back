import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { TeacherFactory } from 'test/factories/make-teacher'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'

describe('Fetch All Teacher (E2E)', () => {
  let app: INestApplication
  let teacherFactory: TeacherFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [TeacherFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    teacherFactory = moduleRef.get(TeacherFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[GET] /teachers', async () => {
    const author = await teacherFactory.makePrismaTeacher({})

    const teacher1 = await teacherFactory.makePrismaTeacher()
    const teacher2 = await teacherFactory.makePrismaTeacher()

    const accessToken = jwt.sign({
      sub: author.id.toString(),
      roles: ['COMMON'],
    })

    const response = await request(app.getHttpServer())
      .get(`/teachers`)
      .query({
        page: 1,
      })
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.body.result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: author.id.toString(),
          name: author.name,
        }),
        expect.objectContaining({
          id: teacher1.id.toString(),
          name: teacher1.name,
        }),
        expect.objectContaining({
          id: teacher2.id.toString(),
          name: teacher2.name,
        }),
      ])
    )
  })
})

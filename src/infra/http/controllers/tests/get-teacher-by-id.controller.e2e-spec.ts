import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { TeacherFactory } from 'test/factories/make-teacher'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { UserFactory } from 'test/factories/make-user'
import { DomainEvents } from '@/core/events/domain-events'

describe('Get Teacher By Id (E2E)', () => {
  let app: INestApplication
  let teacherFactory: TeacherFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [TeacherFactory, UserFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    teacherFactory = moduleRef.get(TeacherFactory)

    jwt = moduleRef.get(JwtService)

    DomainEvents.shouldRun = true

    await app.init()
  })

  test('[GET] /teachers/:id', async () => {
    const teacher = await teacherFactory.makePrismaTeacher({})

    const accessToken = jwt.sign({
      sub: teacher.id.toString(),
      roles: ['COMMON'],
    })

    const response = await request(app.getHttpServer())
      .get(`/teachers/${teacher.id.toString()}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.body).toEqual({
      result: expect.objectContaining({
        id: teacher.id.toString(),
        name: teacher.name,
        status: teacher.status,
      }),
    })
  })
})

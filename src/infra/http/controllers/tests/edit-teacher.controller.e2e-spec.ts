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

describe('Edit Teacher (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let teacherFactory: TeacherFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [TeacherFactory, UserFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    teacherFactory = moduleRef.get(TeacherFactory)

    jwt = moduleRef.get(JwtService)

    DomainEvents.shouldRun = true

    await app.init()
  })

  test('[PUT] /teachers/:id', async () => {
    const teacher = await teacherFactory.makePrismaTeacher()

    const accessToken = jwt.sign({
      sub: teacher.id.toString(),
      roles: ['COMMON'],
    })

    const response = await request(app.getHttpServer())
      .put(`/teachers/${teacher.id.toString()}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        name: 'teacher-1',
        status: 'active',
      })

    expect(response.statusCode).toBe(200)

    const { id } = response.body.result

    const teacherOnDatabase = await prisma.teacher.findUnique({
      where: {
        userId: id,
      },
    })

    expect(teacherOnDatabase).toBeTruthy()

    const teacherUserOnDatabase = await prisma.user.findFirst({
      where: {
        name: 'teacher-1',
      },
    })

    expect(teacherUserOnDatabase).toBeTruthy()
  })
})

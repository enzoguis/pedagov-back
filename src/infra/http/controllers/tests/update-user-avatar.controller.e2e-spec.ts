import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { TeacherFactory } from 'test/factories/make-teacher'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { AttachmentFactory } from 'test/factories/make-attachments'

describe('Upload User Avatar (E2E)', () => {
  let app: INestApplication
  let teacherFactory: TeacherFactory
  let attachmentFactory: AttachmentFactory
  let jwt: JwtService
  let prisma: PrismaService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [TeacherFactory, AttachmentFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    teacherFactory = moduleRef.get(TeacherFactory)
    attachmentFactory = moduleRef.get(AttachmentFactory)
    prisma = moduleRef.get(PrismaService)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[GET] /user/:id/avatar', async () => {
    const teacher = await teacherFactory.makePrismaTeacher()

    const attachment = await attachmentFactory.makePrismaAttachment()

    const accessToken = jwt.sign({
      sub: teacher.id.toString(),
      roles: ['COMMON'],
    })

    const response = await request(app.getHttpServer())
      .post(`/user/${teacher.id.toString()}/avatar`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        attachmentUrl: attachment.url,
      })

    expect(response.statusCode).toBe(201)

    const userOnDatabase = await prisma.user.findUnique({
      where: {
        id: teacher.id.toString(),
      },
    })

    expect(userOnDatabase?.avatar).toBe(attachment.url)
  })
})

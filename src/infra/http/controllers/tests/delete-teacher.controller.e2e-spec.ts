import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { TeacherFactory } from 'test/factories/make-teacher'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import { GroupFactory } from 'test/factories/make-group'

describe('Delete Teacher (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let pedagogueFactory: PedagogueFactory
  let teacherFactory: TeacherFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [TeacherFactory, PedagogueFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    pedagogueFactory = moduleRef.get(PedagogueFactory)
    teacherFactory = moduleRef.get(TeacherFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[DELETE] /teachers/:id', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue()

    const teacher = await teacherFactory.makePrismaTeacher()

    const accessToken = jwt.sign({
      sub: author.id.toString(),
    })

    const response = await request(app.getHttpServer())
      .delete(`/teachers/${teacher.id.toString()}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.statusCode).toBe(204)

    const teacherOnDatabase = await prisma.teacher.findUnique({
      where: {
        userId: teacher.id.toString(),
      },
    })

    expect(teacherOnDatabase).toBeNull()
  })
})

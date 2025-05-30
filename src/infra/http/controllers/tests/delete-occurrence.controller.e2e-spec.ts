import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import { OccurrenceFactory } from 'test/factories/make-occurrence'
import { TeacherFactory } from 'test/factories/make-teacher'

describe('Delete Occurrence (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let teacherFactory: TeacherFactory
  let pedagogueFactory: PedagogueFactory
  let occurrenceFactory: OccurrenceFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [TeacherFactory, PedagogueFactory, OccurrenceFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    teacherFactory = moduleRef.get(TeacherFactory)
    pedagogueFactory = moduleRef.get(PedagogueFactory)
    occurrenceFactory = moduleRef.get(OccurrenceFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[DELETE] /occurrences/:id', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue()

    const teacher = await teacherFactory.makePrismaTeacher()

    const occurrence = await occurrenceFactory.makePrismaOccurrence({
      teacherId: teacher.id,
      authorId: author.id,
    })

    const accessToken = jwt.sign({
      sub: author.id.toString(),
    })

    const response = await request(app.getHttpServer())
      .delete(`/occurrences/${occurrence.id.toString()}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.statusCode).toBe(204)

    const occurrenceOnDatabase = await prisma.occurrence.findUnique({
      where: {
        id: occurrence.id.toString(),
      },
    })

    expect(occurrenceOnDatabase).toBeNull()
  })
})

import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import { GroupFactory } from 'test/factories/make-group'
import { TeacherFactory } from 'test/factories/make-teacher'

describe('Delete Group (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let teacherFactory: TeacherFactory
  let pedagogueFactory: PedagogueFactory
  let groupFactory: GroupFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [TeacherFactory, PedagogueFactory, GroupFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    teacherFactory = moduleRef.get(TeacherFactory)
    pedagogueFactory = moduleRef.get(PedagogueFactory)
    groupFactory = moduleRef.get(GroupFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[DELETE] /groups/:id', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue()

    const teacher = await teacherFactory.makePrismaTeacher()

    const group = await groupFactory.makePrismaGroup({
      teacherId: teacher.id,
      name: '9 ano B',
    })

    const accessToken = jwt.sign({
      sub: author.id.toString(),
    })

    const response = await request(app.getHttpServer())
      .delete(`/groups/${group.id.toString()}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.statusCode).toBe(204)

    const groupOnDatabase = await prisma.group.findUnique({
      where: {
        id: group.id.toString(),
      },
    })

    expect(groupOnDatabase).toBeNull()
  })
})

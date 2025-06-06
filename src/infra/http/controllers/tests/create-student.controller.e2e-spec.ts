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
import { E } from '@faker-js/faker/dist/airline-BUL6NtOJ'

describe('Create Student (E2E)', () => {
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

  test('[POST] /accounts/student', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue()

    const teacher = await teacherFactory.makePrismaTeacher()

    const group = await groupFactory.makePrismaGroup({
      teacherId: teacher.id,
    })

    const accessToken = jwt.sign({
      sub: author.id.toString(),
    })

    const response = await request(app.getHttpServer())
      .post('/accounts/student')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        name: 'student-1',
        status: 'active',
        cpf: '43366417064',
        groupId: group.id.toString(),
        responsibleEmail: 'responsible@example.com',
        responsiblePhone: '45982565566',
      })

    expect(response.statusCode).toBe(201)

    const { id } = response.body.result

    const studentOnDatabase = await prisma.student.findUnique({
      where: {
        userId: id.value,
      },
    })

    expect(studentOnDatabase).toBeTruthy()

    const studentUserOnDatabase = await prisma.user.findUnique({
      where: {
        id: id.value,
      },
    })

    expect(studentOnDatabase).toBeTruthy()
    expect(studentUserOnDatabase).toEqual(
      expect.objectContaining({
        name: 'student-1',
      })
    )

    const groupOnDatabase = await prisma.group.findUnique({
      where: {
        id: studentOnDatabase?.groupId,
      },
      include: {
        students: true,
      },
    })

    expect(groupOnDatabase).toEqual(
      expect.objectContaining({
        students: expect.arrayContaining([
          expect.objectContaining({
            userId: id.value,
          }),
        ]),
      })
    )
  })
})

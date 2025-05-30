import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { StudentFactory } from 'test/factories/make-student'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import { GroupFactory } from 'test/factories/make-group'
import { TeacherFactory } from 'test/factories/make-teacher'

describe('Delete Student (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let studentFactory: StudentFactory
  let pedagogueFactory: PedagogueFactory
  let groupFactory: GroupFactory
  let teacherFactory: TeacherFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [
        StudentFactory,
        PedagogueFactory,
        GroupFactory,
        TeacherFactory,
      ],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    studentFactory = moduleRef.get(StudentFactory)
    pedagogueFactory = moduleRef.get(PedagogueFactory)
    groupFactory = moduleRef.get(GroupFactory)
    teacherFactory = moduleRef.get(TeacherFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[DELETE] /students/:id', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue()

    const teacher = await teacherFactory.makePrismaTeacher()

    const group = await groupFactory.makePrismaGroup({
      teacherId: teacher.id,
    })

    const student = await studentFactory.makePrismaStudent({
      groupId: group.id,
    })

    const accessToken = jwt.sign({
      sub: author.id.toString(),
    })

    const response = await request(app.getHttpServer())
      .delete(`/students/${student.id.toString()}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.statusCode).toBe(204)

    const studentOnDatabase = await prisma.student.findUnique({
      where: {
        userId: student.id.toString(),
      },
    })

    expect(studentOnDatabase).toBeNull()
  })
})

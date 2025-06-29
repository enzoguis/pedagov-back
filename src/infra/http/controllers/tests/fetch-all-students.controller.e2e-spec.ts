import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { StudentFactory } from 'test/factories/make-student'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { TeacherFactory } from 'test/factories/make-teacher'
import { GroupFactory } from 'test/factories/make-group'

describe('Fetch All Student (E2E)', () => {
  let app: INestApplication
  let studentFactory: StudentFactory
  let teacherFactory: TeacherFactory
  let groupFactory: GroupFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [StudentFactory, TeacherFactory, GroupFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    studentFactory = moduleRef.get(StudentFactory)
    teacherFactory = moduleRef.get(TeacherFactory)
    groupFactory = moduleRef.get(GroupFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[GET] /students', async () => {
    const teacher = await teacherFactory.makePrismaTeacher()

    const group = await groupFactory.makePrismaGroup({
      teacherId: teacher.id,
    })

    const author = await studentFactory.makePrismaStudent({
      groupId: group.id,
    })
    const student1 = await studentFactory.makePrismaStudent({
      groupId: group.id,
    })
    const student2 = await studentFactory.makePrismaStudent({
      groupId: group.id,
    })

    const accessToken = jwt.sign({
      sub: author.id.toString(),
      roles: ['COMMON'],
    })

    const response = await request(app.getHttpServer())
      .get('/students')
      .query({
        page: 1,
      })
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    console.log(response.body.result)

    expect(response.body.result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          studentId: author.id.toString(),
          student: author.name,
          group: group.name,
          cpf: author.cpf.value,
        }),
        expect.objectContaining({
          studentId: student1.id.toString(),
          student: student1.name,
          group: group.name,
          cpf: student1.cpf.value,
        }),
        expect.objectContaining({
          studentId: student2.id.toString(),
          student: student2.name,
          group: group.name,
          cpf: student2.cpf.value,
        }),
      ])
    )
  })
})

import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { PedagogueRoleEnum } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { OccurrenceFactory } from 'test/factories/make-occurrence'
import { TeacherFactory } from 'test/factories/make-teacher'
import { StudentFactory } from 'test/factories/make-student'
import { OccurrenceStudentFactory } from 'test/factories/make-occurrence-student'
import { GroupFactory } from 'test/factories/make-group'

describe('Fetch All Occurrences(E2E)', () => {
  let app: INestApplication
  let pedagogueFactory: PedagogueFactory
  let occurrenceFactory: OccurrenceFactory
  let teacherFactory: TeacherFactory
  let studentFactory: StudentFactory
  let occurrenceStudentFactory: OccurrenceStudentFactory
  let groupFactory: GroupFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [
        PedagogueFactory,
        OccurrenceFactory,
        TeacherFactory,
        StudentFactory,
        OccurrenceStudentFactory,
        GroupFactory,
      ],
    }).compile()

    app = moduleRef.createNestApplication()

    pedagogueFactory = moduleRef.get(PedagogueFactory)
    occurrenceFactory = moduleRef.get(OccurrenceFactory)
    teacherFactory = moduleRef.get(TeacherFactory)
    studentFactory = moduleRef.get(StudentFactory)
    occurrenceStudentFactory = moduleRef.get(OccurrenceStudentFactory)
    groupFactory = moduleRef.get(GroupFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[GET] /occurrences', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue({
      role: PedagogueRoleEnum.COMMON,
    })

    const teacher = await teacherFactory.makePrismaTeacher()

    const group = await groupFactory.makePrismaGroup({
      teacherId: teacher.id,
    })

    const student = await studentFactory.makePrismaStudent({
      groupId: group.id,
    })

    for (let i = 0; i < 22; i++) {
      await occurrenceFactory.makePrismaOccurrence({
        teacherId: teacher.id,
        authorId: author.id,
        createdAt: new Date(2024, 0, 2),
      })
    }

    const occurrence = await occurrenceFactory.makePrismaOccurrence({
      teacherId: teacher.id,
      authorId: author.id,
      createdAt: new Date(2024, 0, 1),
    })

    await occurrenceStudentFactory.makePrismaOccurrenceStudent({
      occurrenceId: occurrence.id,
      studentId: student.id,
    })

    const accessToken = jwt.sign({
      sub: author.id.toString(),
      roles: ['COMMON'],
    })

    const response = await request(app.getHttpServer())
      .get(`/occurrences`)
      .query({
        page: 3,
      })
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.body.result).toEqual({
      occurrences: expect.arrayContaining([
        expect.objectContaining({
          authorId: author.id.value,
        }),
        expect.objectContaining({
          authorId: author.id.value,
        }),
        expect.objectContaining({
          authorId: author.id.value,
        }),
      ]),
      page: expect.objectContaining({
        total: 23,
        lastPage: 3,
        currentPage: 3,
        prev: 2,
        next: null,
      }),
    })
  })
})

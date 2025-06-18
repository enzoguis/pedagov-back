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
import { GroupShiftsEnum } from '@/domain/occurrences/enterprise/entities/group'

describe('Fetch All Groups (E2E)', () => {
  let app: INestApplication
  let pedagogueFactory: PedagogueFactory
  let teacherFactory: TeacherFactory
  let groupFactory: GroupFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [PedagogueFactory, TeacherFactory, GroupFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    pedagogueFactory = moduleRef.get(PedagogueFactory)
    teacherFactory = moduleRef.get(TeacherFactory)
    groupFactory = moduleRef.get(GroupFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[GET] /groups', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue({
      role: PedagogueRoleEnum.COMMON,
    })

    const teacher = await teacherFactory.makePrismaTeacher()

    const group = await groupFactory.makePrismaGroup({
      teacherId: teacher.id,
    })

    const group2 = await groupFactory.makePrismaGroup({
      teacherId: teacher.id,
    })

    await groupFactory.makePrismaGroup({
      teacherId: teacher.id,
      shift: GroupShiftsEnum.AFTERNOON,
    })

    const accessToken = jwt.sign({
      sub: author.id.toString(),
      roles: ['COMMON'],
    })

    const response = await request(app.getHttpServer())
      .get(`/groups`)
      .query({
        page: 1,
      })
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.body.result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: group.id.toString(),
        }),
        expect.objectContaining({
          id: group2.id.toString(),
        }),
      ])
    )
  })
})

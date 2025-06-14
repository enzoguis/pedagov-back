import { AppModule } from '@/infra/app.module'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import { OccurrenceFactory } from 'test/factories/make-occurrence'
import { StudentFactory } from 'test/factories/make-student'
import { OccurrenceStudentFactory } from 'test/factories/make-occurrence-student'
import { GroupFactory } from 'test/factories/make-group'
import { TeacherFactory } from 'test/factories/make-teacher'
import { PedagogueRoleEnum } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { CPF } from '@/domain/occurrences/enterprise/entities/value-objects/cpf'

describe('Get Occurrences Per Student (E2E)', () => {
  let app: INestApplication
  let pedagogueFactory: PedagogueFactory
  let occurrenceFactory: OccurrenceFactory
  let studentFactory: StudentFactory
  let occurrenceStudentFactory: OccurrenceStudentFactory
  let groupFactory: GroupFactory
  let teacherFactory: TeacherFactory

  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [
        PedagogueFactory,
        OccurrenceFactory,
        StudentFactory,
        OccurrenceStudentFactory,
        GroupFactory,
        TeacherFactory,
      ],
    }).compile()

    app = moduleRef.createNestApplication()

    pedagogueFactory = moduleRef.get(PedagogueFactory)
    occurrenceFactory = moduleRef.get(OccurrenceFactory)
    studentFactory = moduleRef.get(StudentFactory)
    occurrenceStudentFactory = moduleRef.get(OccurrenceStudentFactory)
    groupFactory = moduleRef.get(GroupFactory)
    teacherFactory = moduleRef.get(TeacherFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[GET] /occurrences/student', async () => {
    const teacher = await teacherFactory.makePrismaTeacher()

    const pedagogue = await pedagogueFactory.makePrismaPedagogue()

    const group = await groupFactory.makePrismaGroup({ teacherId: teacher.id })

    const student = await studentFactory.makePrismaStudent({
      groupId: group.id,
    })

    const student2 = await studentFactory.makePrismaStudent({
      groupId: group.id,
      cpf: CPF.create('287.896.010-68'),
    })

    const occurrence = await occurrenceFactory.makePrismaOccurrence({
      teacherId: teacher.id,
      authorId: pedagogue.id,
    })

    await occurrenceStudentFactory.makePrismaOccurrenceStudent({
      occurrenceId: occurrence.id,
      studentId: student.id,
    })

    await occurrenceStudentFactory.makePrismaOccurrenceStudent({
      occurrenceId: occurrence.id,
      studentId: student2.id,
    })

    const accessToken = jwt.sign({
      sub: pedagogue.id.toString(),
      roles: ['COMMON'],
    })

    const response = await request(app.getHttpServer())
      .get('/occurrences-student')
      .query({
        page: 1,
      })
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.statusCode).toBe(200)
    expect(response.body.result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: occurrence.title,
          student: student.name,
        }),
        expect.objectContaining({
          title: occurrence.title,
          student: student2.name,
        }),
      ])
    )
  })
})

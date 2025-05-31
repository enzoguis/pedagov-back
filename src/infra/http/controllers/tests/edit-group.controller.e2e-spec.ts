import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import { AttachmentFactory } from 'test/factories/make-attachments'
import { StudentFactory } from 'test/factories/make-student'
import request from 'supertest'
import { TeacherFactory } from 'test/factories/make-teacher'
import { DatabaseModule } from '@/infra/database/database.module'
import { GroupFactory } from 'test/factories/make-group'
import { GroupStudentFactory } from 'test/factories/make-group-student'
import { CPF } from '@/domain/occurrences/enterprise/entities/value-objects/cpf'

describe('Create Group (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let pedagogueFactory: PedagogueFactory
  let studentFactory: StudentFactory
  let teacherFactory: TeacherFactory
  let groupFactory: GroupFactory
  let groupStudentFactory: GroupStudentFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [
        PedagogueFactory,
        StudentFactory,
        TeacherFactory,
        GroupFactory,
        GroupStudentFactory,
      ],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    pedagogueFactory = moduleRef.get(PedagogueFactory)
    studentFactory = moduleRef.get(StudentFactory)
    teacherFactory = moduleRef.get(TeacherFactory)
    groupFactory = moduleRef.get(GroupFactory)
    groupStudentFactory = moduleRef.get(GroupStudentFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[PUT] /groups/:id', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue()

    const teacher = await teacherFactory.makePrismaTeacher()

    const group = await groupFactory.makePrismaGroup({
      teacherId: teacher.id,
    })

    console.log('students no test', group.students.currentItems)

    const student = await studentFactory.makePrismaStudent({
      groupId: group.id,
    })

    await groupStudentFactory.makePrismaGroupStudent({
      groupId: group.id,
      studentId: student.id,
    })

    const newStudent = await studentFactory.makePrismaStudent({
      groupId: group.id,
      cpf: CPF.create('042.481.090-50'),
    })

    console.log('student name', student.name)

    const accessToken = await jwt.sign({ sub: author.id.toString() })

    const response = await request(app.getHttpServer())
      .put(`/groups/${group.id.toString()}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        name: '9 ano A',
        shift: 'MORNING',
        studentsIds: [student.id.toString(), newStudent.id.toString()],
        teacherId: teacher.id.toString(),
      })

    expect(response.statusCode).toBe(201)

    const groupOnDatabase = await prisma.group.findFirst({
      where: {
        id: group.id.toString(),
      },
      include: {
        students: true,
      },
    })

    expect(groupOnDatabase).toBeTruthy()
    expect(groupOnDatabase).toEqual(
      expect.objectContaining({
        students: expect.arrayContaining([student, newStudent]),
      })
    )
  })
})

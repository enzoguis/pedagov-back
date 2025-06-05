import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { UserFactory } from 'test/factories/make-user'
import { compare, hash } from 'bcryptjs'
import {
  UserRoleEnum,
  UserStatusEnum,
} from '@/domain/authentication/enterprise/entities/user'

describe('Change Password (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let pedagogueFactory: PedagogueFactory
  let userFactory: UserFactory

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [PedagogueFactory, UserFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    pedagogueFactory = moduleRef.get(PedagogueFactory)
    userFactory = moduleRef.get(UserFactory)

    await app.init()
  })

  test('[POST] /change-password', async () => {
    const user = await prisma.user.create({
      data: {
        name: 'user',
        role: UserRoleEnum.ADMIN,
        status: UserStatusEnum.ACTIVE,
        email: 'user@example.com',
        password: await hash('12344321', 8),
        temporaryPassword: await hash('12344321', 8),
      },
    })

    await prisma.pedagogue.create({
      data: {
        userId: user.id,
      },
    })

    const response = await request(app.getHttpServer())
      .post('/change-password')
      .send({
        email: user.email,
        password: '12344321',
        newPassword: '12345678',
      })

    expect(response.statusCode).toBe(201)

    const userOnDatabase = await prisma.user.findFirst({
      where: {
        id: user.id,
      },
    })

    if (userOnDatabase?.password) {
      const isPasswordChanged = await compare(
        '12345678',
        userOnDatabase?.password
      )

      expect(isPasswordChanged).toBeTruthy()
      expect(userOnDatabase.temporaryPassword).toBeNull()
    }
  })
})

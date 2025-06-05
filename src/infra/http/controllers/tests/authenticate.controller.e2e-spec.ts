import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { UserFactory } from 'test/factories/make-user'
import { hash } from 'bcryptjs'

describe('Authenticate (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let pedagogueFactory: PedagogueFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [PedagogueFactory, UserFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    pedagogueFactory = moduleRef.get(PedagogueFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[POST] /sessions (first login)', async () => {
    const pedagogue = await pedagogueFactory.makePrismaPedagogue()

    const user = await prisma.user.findUnique({
      where: {
        id: pedagogue.id.toString(),
      },
    })

    if (!user) {
      throw new Error('Encontrei não chefia')
    }

    user.email = 'user@example.com'
    user.password = await hash('123456', 8)
    user.temporaryPassword = await hash('123456', 8)

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        email: user.email,
        password: user.password,
        temporaryPassword: user.temporaryPassword,
      },
    })

    const response = await request(app.getHttpServer()).post('/sessions').send({
      email: user.email,
      password: '123456',
    })

    expect(response.statusCode).toBe(201)
    expect(response.body.is_first_login).toBeTruthy()
    expect(response.body.is_active).toBeTruthy()
  })

  test('[POST] /sessions', async () => {
    const pedagogue = await pedagogueFactory.makePrismaPedagogue()

    const user = await prisma.user.findUnique({
      where: {
        id: pedagogue.id.toString(),
      },
    })

    if (!user) {
      throw new Error('Encontrei não chefia')
    }

    user.email = 'user2@example.com'
    user.password = await hash('123456', 8)

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        email: user.email,
        password: user.password,
      },
    })

    const response = await request(app.getHttpServer()).post('/sessions').send({
      email: user.email,
      password: '123456',
    })

    expect(response.statusCode).toBe(201)
    expect(response.body.is_first_login).not.toBeTruthy()
  })
})

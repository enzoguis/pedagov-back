import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { UserFactory } from 'test/factories/make-user'
import { PedagogueRoleEnum } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { DomainEvents } from '@/core/events/domain-events'

describe('Create Pedagogue (E2E)', () => {
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

    DomainEvents.shouldRun = true

    await app.init()
  })

  test('[POST] /accounts/pedagogue', async () => {
    const pedagogue = await pedagogueFactory.makePrismaPedagogue({
      role: PedagogueRoleEnum.ADMIN,
    })

    const accessToken = jwt.sign({
      sub: pedagogue.id.toString(),
      roles: ['ADMIN'],
    })

    const response = await request(app.getHttpServer())
      .post('/accounts/pedagogue')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        name: 'pedagogue-1',
        status: 'active',
        email: 'pedagogue@example.com',
        role: 'common',
      })

    expect(response.statusCode).toBe(201)

    const { id } = response.body.result

    const pedagogueOnDatabase = await prisma.pedagogue.findUnique({
      where: {
        userId: id,
      },
    })

    expect(pedagogueOnDatabase).toBeTruthy()

    const pedagogueUserOnDatabase = await prisma.user.findFirst({
      where: {
        name: 'pedagogue-1',
      },
    })

    expect(pedagogueUserOnDatabase).toBeTruthy()
    expect(pedagogueUserOnDatabase).toEqual(
      expect.objectContaining({
        id: id,
        email: 'pedagogue@example.com',
        role: 'COMMON',
      })
    )
  })
})

import { DomainEvents } from '@/core/events/domain-events'
import { PedagogueRoleEnum } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { AppModule } from '@/infra/app.module'
import { DatabaseModule } from '@/infra/database/database.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import { waitFor } from 'test/utils/wait-for'

describe('On Pedagogue Created (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let pedagogueFactory: PedagogueFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [PedagogueFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)
    jwt = moduleRef.get(JwtService)
    pedagogueFactory = moduleRef.get(PedagogueFactory)

    DomainEvents.shouldRun = true

    await app.init()
  })

  test('[POST] /accounts/pedagogue', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue({
      role: PedagogueRoleEnum.ADMIN,
    })

    const accessToken = await jwt.sign({
      sub: author.id.toString(),
      roles: [author.role],
    })

    const response = await request(app.getHttpServer())
      .post('/accounts/pedagogue')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        name: 'new pedagogue',
        status: 'active',
        email: 'pedagogue@example.com',
        role: 'common',
      })

    await waitFor(async () => {
      const { id } = response.body.result
      await prisma.user.findUnique({
        where: {
          id,
        },
        select: {
          temporaryPassword: true,
          password: true,
        },
      })
    })
  })
})

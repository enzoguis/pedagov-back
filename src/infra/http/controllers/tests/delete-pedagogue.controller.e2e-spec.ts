import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import { PedagogueRoleEnum } from '@/domain/occurrences/enterprise/entities/pedagogue'

describe('Delete Pedagogue (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let pedagogueFactory: PedagogueFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [PedagogueFactory, PedagogueFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    pedagogueFactory = moduleRef.get(PedagogueFactory)
    pedagogueFactory = moduleRef.get(PedagogueFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[DELETE] /pedagogues/:id', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue({
      role: PedagogueRoleEnum.ADMIN,
    })

    const pedagogue = await pedagogueFactory.makePrismaPedagogue({})

    const accessToken = jwt.sign({
      sub: author.id.toString(),
      roles: ['ADMIN'],
    })

    const response = await request(app.getHttpServer())
      .delete(`/pedagogues/${pedagogue.id.toString()}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.statusCode).toBe(204)

    const pedagogueOnDatabase = await prisma.pedagogue.findUnique({
      where: {
        userId: pedagogue.id.toString(),
      },
    })

    expect(pedagogueOnDatabase).toBeNull()
  })
})

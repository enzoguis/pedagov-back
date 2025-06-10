import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { PedagogueFactory } from 'test/factories/make-pedagogue'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { PedagogueRoleEnum } from '@/domain/occurrences/enterprise/entities/pedagogue'

describe('Fetch All Pedagogue (E2E)', () => {
  let app: INestApplication
  let pedagogueFactory: PedagogueFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [PedagogueFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    pedagogueFactory = moduleRef.get(PedagogueFactory)

    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[GET] /pedagogues', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue({
      role: PedagogueRoleEnum.COMMON,
    })

    const pedagogue1 = await pedagogueFactory.makePrismaPedagogue()
    const pedagogue2 = await pedagogueFactory.makePrismaPedagogue()

    const accessToken = jwt.sign({
      sub: author.id.toString(),
      roles: ['COMMON'],
    })

    const response = await request(app.getHttpServer())
      .get(`/pedagogues`)
      .query({
        page: 1,
      })
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.body.result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: author.id.toString(),
          name: author.name,
          role: author.role,
        }),
        expect.objectContaining({
          id: pedagogue1.id.toString(),
          name: pedagogue1.name,
          role: pedagogue1.role,
        }),
        expect.objectContaining({
          id: pedagogue2.id.toString(),
          name: pedagogue2.name,
          role: pedagogue2.role,
        }),
      ])
    )
  })
})

import { AppModule } from '@/infra/app.module'
import { DatabaseModule } from '@/infra/database/database.module'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import { PedagogueFactory } from 'test/factories/make-pedagogue'

describe('Upload attachment (E2E)', () => {
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

  test('[POST] /attachments', async () => {
    const author = await pedagogueFactory.makePrismaPedagogue()

    const accessToken = jwt.sign({ sub: author.id.toString() })

    const response = await request(app.getHttpServer())
      .post('/attachments')
      .set('Authorization', `Bearer ${accessToken}`)
      .attach('file', './test/e2e/sample-upload.png')

    expect(response.statusCode).toBe(201)
    expect(response.body).toEqual({
      attachmentId: expect.any(String),
      url: expect.any(String),
    })
  })
})

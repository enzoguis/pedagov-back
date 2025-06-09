import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { EnvService } from './env/env.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const envService = app.get(EnvService)
  const port = envService.get('PORT')

  app.enableCors({ origin: '*' })

  const config = new DocumentBuilder()
    .setTitle('PEDAGOV API')
    .setDescription('Documentação da API do sistema de ocorrências escolares')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  await app.listen(port || 3333)
}
bootstrap()

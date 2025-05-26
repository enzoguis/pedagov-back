import { Module } from '@nestjs/common'
import { PrismaService } from './database/prisma/prisma.service'
import { CreateAccountController } from './http/controllers/create-account.controller'
import { ConfigModule } from '@nestjs/config'
import { AuthenticateController } from './http/controllers/authenticate.controller'
import { AuthModule } from './auth/auth.module'
import { envSchema } from './env'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}

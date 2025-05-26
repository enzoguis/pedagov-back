import { Module } from '@nestjs/common'
import { AuthenticateController } from './controllers/authenticate.controller'
import { CreateAccountController } from './controllers/create-account.controller'
import { DatabaseModule } from '@faker-js/faker/.'

@Module({
  imports: [DatabaseModule],
  controllers: [CreateAccountController, AuthenticateController],
})
export class HttpModule {}

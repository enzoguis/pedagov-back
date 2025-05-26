import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { UserPayload } from './jwt-strategy'

export const CurrentUser = createParamDecorator(
  (_: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getResponse()

    return request.user as UserPayload
  }
)

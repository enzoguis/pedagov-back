import { Controller, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth-guard'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

@Controller('/accounts')
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}
  @Post()
  async handle() {
    this.prisma
  }
}

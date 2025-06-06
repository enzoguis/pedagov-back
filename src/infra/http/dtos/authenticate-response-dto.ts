import { ApiProperty } from '@nestjs/swagger'

export class AuthenticateResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', description: 'Token JWT de acesso' })
  access_token!: string

  @ApiProperty({ example: true, description: 'Indica se é o primeiro login do usuário' })
  is_first_login!: boolean
}

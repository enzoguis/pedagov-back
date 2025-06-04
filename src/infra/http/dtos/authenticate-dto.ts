import { ApiProperty } from '@nestjs/swagger'

export class AuthenticateDto {
  @ApiProperty({ example: 'user@example.com', description: 'Email do usuário' })
  email!: string

  @ApiProperty({
    example: 'strongpassword123',
    description: 'Senha do usuário',
  })
  password!: string
}

import { Module } from '@nestjs/common'
import { BcryptHasher } from './bcrypt-hasher'
import { JwtEncrypter } from './jwt-encrypter'
import { Encrypter } from '@/domain/authentication/application/cryptography/encrypter'
import { HashGenerator } from '@/domain/authentication/application/cryptography/hash-generator'
import { HashComparer } from '@/domain/authentication/application/cryptography/hash-comparer'

@Module({
  providers: [
    { provide: Encrypter, useClass: JwtEncrypter },
    {
      provide: HashGenerator,
      useClass: BcryptHasher,
    },
    {
      provide: HashComparer,
      useClass: BcryptHasher,
    },
  ],
  exports: [Encrypter, HashGenerator, HashComparer],
})
export class CryptographyModule {}

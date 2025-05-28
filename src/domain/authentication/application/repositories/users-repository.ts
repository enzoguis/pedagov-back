import { User } from '@/domain/authentication/enterprise/entities/user'

export abstract class UsersRepository {
  abstract save(user: User): Promise<void>
  abstract findByEmail(email: string): Promise<User | null>
  abstract findById(id: string): Promise<User | null>
}

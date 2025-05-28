import { UsersRepository } from '@/domain/authentication/application/repositories/users-repository'
import { User } from '@/domain/authentication/enterprise/entities/user'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async create(user: User): Promise<void> {
    this.items.push(user)
  }

  async save(user: User): Promise<void> {
    const index = this.items.findIndex((item) => item.id === user.id)

    this.items[index] = user
  }

  async findById(id: string): Promise<User | null> {
    const user = this.items.find((item) => item.id.toString() === id)

    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((item) => item.email?.toString() === email)

    if (!user) {
      return null
    }

    return user
  }

  async findManyByIds(ids: string[]): Promise<User[]> {
    return this.items.filter((user) => ids.includes(user.id.toString()))
  }

  async delete(user: User): Promise<void> {
    this.items = this.items.filter(
      (item) => item.id.toString() !== user.id.toString()
    )
  }
}

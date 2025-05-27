import { PedagoguesRepository } from '@/domain/occurrences/application/repositories/pedagogues-repository'
import { Pedagogue } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaPedagoguesRepository implements PedagoguesRepository {
  create(pedagogue: Pedagogue): Promise<void> {
    throw new Error('Method not implemented.')
  }
  findAll(): Promise<Pedagogue[]> {
    throw new Error('Method not implemented.')
  }
  save(pedagogue: Pedagogue): Promise<void> {
    throw new Error('Method not implemented.')
  }
  findById(id: string): Promise<Pedagogue | null> {
    throw new Error('Method not implemented.')
  }
  delete(pedagogue: Pedagogue): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

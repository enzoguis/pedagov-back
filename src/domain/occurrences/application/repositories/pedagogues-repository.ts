import { PaginationParams } from '@/core/repositories/pagination-params'
import { Pedagogue } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { PedagogueWithEmail } from '../../enterprise/entities/value-objects/pedagogue-with-email'

export abstract class PedagoguesRepository {
  abstract create(pedagogue: Pedagogue, email: string): Promise<void>
  abstract findByEmail(email: string): Promise<Pedagogue | null>
  abstract findAll(params: PaginationParams): Promise<PedagogueWithEmail[]>
  abstract save(pedagogue: Pedagogue): Promise<void>
  abstract findById(id: string): Promise<Pedagogue | null>
  abstract delete(pedagogue: Pedagogue): Promise<void>
}

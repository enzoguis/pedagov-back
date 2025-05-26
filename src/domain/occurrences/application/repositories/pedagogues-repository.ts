import { Pedagogue } from '@/domain/occurrences/enterprise/entities/pedagogue'

export abstract class PedagoguesRepository {
  abstract create(pedagogue: Pedagogue): Promise<void>
  abstract findAll(): Promise<Pedagogue[]>
  abstract save(pedagogue: Pedagogue): Promise<void>
  abstract findById(id: string): Promise<Pedagogue | null>
  abstract delete(pedagogue: Pedagogue): Promise<void>
}

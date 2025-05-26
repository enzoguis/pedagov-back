import { PaginationParams } from '@/core/repositories/pagination-params'
import {
  Occurrence,
  OccurrenceTypes,
} from '@/domain/occurrences/enterprise/entities/occurrence'

export interface FetchAllOccurrencesParams {
  page: number
  limit?: number
  studentId?: string
  type?: OccurrenceTypes
}

export abstract class OccurrencesRepository {
  abstract create(occurrence: Occurrence): Promise<void>
  abstract save(occurrence: Occurrence): Promise<void>
  abstract findById(id: string): Promise<Occurrence | null>
  abstract findManyRecents(params: PaginationParams): Promise<Occurrence[]>
  abstract findAll(params: FetchAllOccurrencesParams): Promise<Occurrence[]>
  abstract delete(occurrence: Occurrence): Promise<void>
}

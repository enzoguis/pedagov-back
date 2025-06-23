import { PaginationParams } from '@/core/repositories/pagination-params'
import {
  Occurrence,
  OccurrenceTypes,
} from '@/domain/occurrences/enterprise/entities/occurrence'
import { OccurrenceDetails } from '../../enterprise/entities/value-objects/occurrence-details'
import { OccurrenceWithStudentName } from '../../enterprise/entities/value-objects/occurrence-with-student-name'

export interface FetchAllOccurrencesParams {
  page: number
  limit?: number
  searchTerm?: string
}

export abstract class OccurrencesRepository {
  abstract create(occurrence: Occurrence): Promise<void>
  abstract save(occurrence: Occurrence): Promise<void>
  abstract findById(id: string): Promise<Occurrence | null>
  abstract findManyForEachStudent(
    params: PaginationParams
  ): Promise<OccurrenceWithStudentName[]>
  abstract findWithDetails(id: string): Promise<OccurrenceDetails | null>
  abstract findManyRecents(params: PaginationParams): Promise<Occurrence[]>
  abstract findAll(params: FetchAllOccurrencesParams): Promise<Occurrence[]>
  abstract delete(occurrence: Occurrence): Promise<void>
}

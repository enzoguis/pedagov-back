import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OccurrenceTypeEnum } from '../occurrence'
import { ValueObject } from '@/core/entities/value-object'

export interface OccurrenceProps {
  id: UniqueEntityID
  authorId: UniqueEntityID
  title: string
  description: string
  type: OccurrenceTypeEnum
  createdAt: Date
}

interface PageProps {
  total: number
  lastPage: number
  currentPage: number
  limit: number
  prev: number | null
  next: number | null
}

export interface OccurrencesWithPaginationProps {
  occurrences: OccurrenceProps[]
  page: PageProps
}

export class OccurrencesWithPagination extends ValueObject<OccurrencesWithPaginationProps> {
  get occurrences() {
    return this.props.occurrences
  }

  get page() {
    return this.props.page
  }

  static create(props: OccurrencesWithPaginationProps) {
    return new OccurrencesWithPagination(props)
  }
}

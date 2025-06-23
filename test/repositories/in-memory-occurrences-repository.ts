import {
  FetchAllOccurrencesParams,
  OccurrencesRepository,
} from '@/domain/occurrences/application/repositories/occurrences-repository'
import {
  Occurrence,
  OccurrenceTypeEnum,
} from '@/domain/occurrences/enterprise/entities/occurrence'
import { InMemoryOccurrenceStudentsRepository } from './in-memory-occurrence-students-repository'
import { InMemoryOccurrenceAttendeesRepository } from './in-memory-occurrence-attendees-repository'
import { InMemoryOccurrenceAttachmentsRepository } from './in-memory-occurrence-attachments-repository'
import { InMemoryOccurrenceHistoriesRepository } from './in-memory-occurrence-histories-repository'
import { PaginationParams } from '@/core/repositories/pagination-params'

export class InMemoryOccurrencesRepository implements OccurrencesRepository {
  constructor(
    private occurrenceStudents: InMemoryOccurrenceStudentsRepository,
    private occurrenceAttendees: InMemoryOccurrenceAttendeesRepository,
    private occurrenceAttachments: InMemoryOccurrenceAttachmentsRepository
  ) {}
  public items: Occurrence[] = []

  async findManyRecents({ page, limit }: PaginationParams) {
    const perPage = limit ?? 20

    const occurrences = this.items
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * perPage, page * perPage)

    return occurrences
  }

  async findAll({
    page,
    limit,

    searchTerm,
  }: FetchAllOccurrencesParams) {
    let occurrences = [...this.items]

    const perPage = limit ?? 20

    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase()

      occurrences = occurrences.filter((item) => {
        const fieldsToSearch = [
          item.title,
          item.description,
          item.type,
          item.createdAt?.toString(),
        ]

        return fieldsToSearch.some((field) =>
          field?.toString().toLowerCase().includes(lowerSearch)
        )
      })
    }

    const paginated = occurrences.slice((page - 1) * perPage, page * perPage)

    return paginated
  }

  async create(occurrence: Occurrence): Promise<void> {
    this.items.push(occurrence)

    await this.occurrenceAttendees.createMany(occurrence.attendees.getItems())
    await this.occurrenceStudents.createMany(occurrence.students.getItems())
    await this.occurrenceAttachments.createMany(
      occurrence.attachments.getItems()
    )
  }
  async save(occurrence: Occurrence): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.id === occurrence.id)
    this.items[itemIndex] = occurrence

    await this.occurrenceAttachments.createMany(
      occurrence.attachments.getNewItems()
    )
    await this.occurrenceAttachments.deleteMany(
      occurrence.attachments.getRemovedItems()
    )

    await this.occurrenceStudents.createMany(occurrence.students.getNewItems())
    await this.occurrenceStudents.deleteMany(
      occurrence.students.getRemovedItems()
    )

    await this.occurrenceAttendees.createMany(
      occurrence.attendees.getNewItems()
    )
    await this.occurrenceAttendees.deleteMany(
      occurrence.attendees.getRemovedItems()
    )

    await this.occurrenceStudents.createMany(occurrence.students.getNewItems())
    await this.occurrenceStudents.deleteMany(
      occurrence.students.getRemovedItems()
    )
  }
  async findById(id: string): Promise<Occurrence | null> {
    const occurrence = this.items.find((item) => item.id.toString() === id)

    if (!occurrence) {
      return null
    }

    return occurrence
  }

  async delete(occurrence: Occurrence): Promise<void> {
    this.items = this.items.filter(
      (item) => item.id.toString() !== occurrence.id.toString()
    )
  }
}

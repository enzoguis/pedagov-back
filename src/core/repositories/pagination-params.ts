export interface PaginationParams<ST = string> {
  page: number
  limit?: number
  search?: string
  userId?: string
  sort?: ST
  order?: 'desc' | 'asc'
}

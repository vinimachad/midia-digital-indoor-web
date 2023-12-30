import { News } from './news'
import { Weather } from './weather'

export type CommercialPaginationResponse = {
  totalPages: number
  currentPage: number
  previous?: number
  next?: {
    page: number
    limit: number
  }
  data: Commercial[]
}

export type Commercial = {
  news?: News
  weather?: Weather
}

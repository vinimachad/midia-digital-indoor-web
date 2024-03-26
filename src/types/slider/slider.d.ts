import { CommercialSection } from './commercial-sections'

export namespace Slider {
  export type CommercialPaginationResponse = {
    totalPages: number
    currentPage: number
    previous?: number
    next?: {
      page: number
      limit: number
    }
    data: CommercialSection.SectionItem[][]
  }

  export type News = {
    id: string
    type: string
    title: string
    image_url: string
    delay: number
    qrcode: string
  }

  export type Weather = {
    id: string
    city_name: string
    sunrise: string
    sunset: string
    temp: string
    description: string
    condition_slug: string
    forecast: Forecast[]
  }

  export type Forecast = {
    date: string
    max: string
    min: string
    condition: string
  }

  export type Banner = {
    id: string
    url: string
  }
}

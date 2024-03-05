export namespace Slider {
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
    banners?: { url: string }[]
  }

  export type News = {
    type: string
    title: string
    image_url: string
    delay: number
    qrcode: string
  }

  export type Weather = {
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
}

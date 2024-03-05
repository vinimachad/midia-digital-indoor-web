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

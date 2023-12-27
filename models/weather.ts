export type Weather = {
  city_name: string
  sunrise: string
  sunset: string
  temp: number
  description: string
  condition_slug: string
  forecast: Forecast[]
}

export type Forecast = {
  date: string
  weekday: string
  max: number
  min: number
  cloudiness: number
  rain: number
  rain_probability: number
  description: string
  condition: string
}

interface Props {
  temp: number
  city_name: string
}

export default function WeatherSlideView({ temp, city_name }: Props) {
  return (
    <div className="min-w-full bg-cyan-400">
      <h1>{city_name}</h1>
      <h1>{temp}</h1>
    </div>
  )
}

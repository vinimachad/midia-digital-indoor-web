import { Forecast, Weather } from '@/models/weather'

export default function WeatherSlideView(props: Weather) {
  const Top = () => {
    return (
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="flex h-full flex-col justify-center gap-10">
          <h1 className="text-6xl font-bold">{props.city_name}</h1>
          <div className="flex flex-col gap-3">
            <span className="text-4xl font-bold">{props.sunrise}</span>
            <span className="text-4xl font-bold">{props.sunset}</span>
          </div>
        </div>
        <img className="justify-self-center w-full" src={props.condition_slug} />
        <div className="flex flex-col h-full justify-center gap-10 items-end">
          <h1 className="text-6xl font-bold">{props.temp}</h1>
          <span className="text-4xl font-bold">{props.description}</span>
        </div>
      </div>
    )
  }

  const Bottom = () => {
    return (
      <div className="grid grid-cols-4">
        {props.forecast.map((forecast, index) => (
          <BottomItem key={index} {...forecast} />
        ))}
      </div>
    )
  }

  const BottomItem = (forecast: Forecast) => {
    return (
      <div className="flex flex-col items-center justify-center gap-8">
        <span className="text-4xl">{forecast.date}</span>
        <img src={forecast.condition} />
        <div className="flex flex-col gap-2">
          <span className="text-2xl">{forecast.max}</span>
          <span className="text-2xl">{forecast.min}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-w-full flex items-center justify-center">
      <div className="grid grid-rows-2 w-full max-w-7xl">
        <Top />
        <Bottom />
      </div>
    </div>
  )
}

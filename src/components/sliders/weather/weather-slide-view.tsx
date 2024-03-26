import { Slider } from '../../../types/slider/slider'
import { BaseSlideViewProps } from '../sliders-container'

interface Props extends BaseSlideViewProps {
  weather: Slider.Weather
}

export default function WeatherSlideView({ weather, isShowing }: Props) {
  const Top = () => {
    return (
      <div className="grid grid-cols-3 items-center gap-4">
        <div className="flex h-full flex-col justify-center gap-10">
          <h1 className="text-6xl font-bold">{weather.city_name}</h1>
          <div className="flex flex-col gap-3">
            <span className="text-4xl font-bold">{weather.sunrise}</span>
            <span className="text-4xl font-bold">{weather.sunset}</span>
          </div>
        </div>
        <img className="w-full justify-self-center" src={weather.condition_slug} />
        <div className="flex h-full flex-col items-end justify-center gap-10">
          <h1 className="text-6xl font-bold">{weather.temp}</h1>
          <span className="text-4xl font-bold">{weather.description}</span>
        </div>
      </div>
    )
  }

  const Bottom = () => {
    return (
      <div className="grid grid-cols-4">
        {weather.forecast.map((forecast, index) => (
          <BottomItem key={index} {...forecast} />
        ))}
      </div>
    )
  }

  const BottomItem = (forecast: Slider.Forecast) => {
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
    <div
      className="absolute top-0 flex min-w-full items-center justify-center data-[show=false]:hidden"
      data-show={isShowing}
    >
      <div className="grid w-full max-w-7xl grid-rows-2">
        <Top />
        <Bottom />
      </div>
    </div>
  )
}

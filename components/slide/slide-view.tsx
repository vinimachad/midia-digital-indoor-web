import { Commercial } from '@/models/commercials'
import NewsSlideView from './news/news-slide-view'
import WeatherSlideView from './weather/weather-slide-view'

export default function SlideView(props: Commercial) {
  if (props.news && props.weather) {
    return (
      <>
        <NewsSlideView {...props.news} />
        <WeatherSlideView {...props.weather} />
      </>
    )
  }

  if (props.news) {
    return <NewsSlideView {...props.news} />
  }

  if (props.weather) {
    return <WeatherSlideView {...props.weather} />
  }
}

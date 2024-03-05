import NewsSlideView from './news/news-slide-view'
import WeatherSlideView from './weather/weather-slide-view'
import BannerSlideView from './banners/banner-slide-view'
import { ReactNode } from 'react'
import { v4 as uuid } from 'uuid'
import { Slider } from '../../types/slider'

export default function SlidersContainer(props: Slider.Commercial) {
  function buildNewsSlide(): ReactNode | undefined {
    if (props.news) return <NewsSlideView key={uuid()} {...props.news} />
  }

  function buildWeatherSlide() {
    if (props.weather) return <WeatherSlideView key={uuid()} {...props.weather} />
  }

  function buildBannersSlides() {
    if (props.banners)
      return props.banners.map((banner) => {
        return <BannerSlideView key={uuid()} src={banner.url} />
      })
  }

  return [buildNewsSlide(), buildWeatherSlide(), buildBannersSlides()]
}

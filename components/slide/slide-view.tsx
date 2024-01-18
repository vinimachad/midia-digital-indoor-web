import { Commercial } from '@/models/commercials'
import NewsSlideView from './news/news-slide-view'
import WeatherSlideView from './weather/weather-slide-view'
import BannerSlideView from './banners/banner-slide-view'
import { ReactNode } from 'react'

export default function SlideView(props: Commercial) {
  function buildNewsSlide(): ReactNode | undefined {
    if (props.news) return <NewsSlideView {...props.news} />
  }

  function buildWeatherSlide() {
    if (props.weather) return <WeatherSlideView {...props.weather} />
  }

  function buildBannersSlides() {
    if (props.banners)
      return props.banners.map((banner, index) => {
        return <BannerSlideView key={index} src={banner.url} />
      })
  }

  return [buildNewsSlide(), buildWeatherSlide(), buildBannersSlides()]
}

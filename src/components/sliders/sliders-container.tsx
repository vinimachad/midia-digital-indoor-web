import NewsSlideView from './news/news-slide-view'
import WeatherSlideView from './weather/weather-slide-view'
import BannerSlideView from './banners/banner-slide-view'
import { v4 as uuid } from 'uuid'
import { CommercialSection } from '@type/slider/commercial-sections'
import { useEffect, useState } from 'react'

interface Props {
  items: CommercialSection.SectionItem[]
  onCompleteSectionSlide: () => void
}

export interface BaseSlideViewProps {
  isShowing: boolean
}

export default function SlidersContainer({ items, onCompleteSectionSlide }: Props) {
  let currentViewIndex = 0
  const [currentDisplayViewId, setCurrentDisplayViewId] = useState(items[0].data.id)

  useEffect(() => {
    didStartSectionSlide()
  }, [])

  // MARK: - Slide logic methods

  function didStartSectionSlide() {
    currentViewIndex++
    setTimeout(() => {
      if (currentViewIndex <= items.length - 1) {
        setCurrentDisplayViewId(items[currentViewIndex].data.id)
        didStartSectionSlide()
      } else {
        onCompleteSectionSlide()
      }
    }, 20 * 1000)
  }

  function isShowingView(id: string) {
    return id == currentDisplayViewId
  }

  // MARK: - Configure view

  function createViews() {
    const views = items.map((item) => {
      switch (item.kind) {
        case 'NEWS':
          return <NewsSlideView key={uuid()} isShowing={isShowingView(item.data.id)} news={item.data} />
        case 'WEATHER':
          return <WeatherSlideView key={uuid()} isShowing={isShowingView(item.data.id)} weather={item.data} />
        case 'BANNER':
          return <BannerSlideView key={uuid()} isShowing={isShowingView(item.data.id)} src={item.data.url} />
      }
    })

    return views
  }

  return <article className="relative h-full w-full">{createViews()}</article>
}

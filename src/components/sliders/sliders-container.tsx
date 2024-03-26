import NewsSlideView from './news/news-slide-view'
import WeatherSlideView from './weather/weather-slide-view'
import BannerSlideView from './banners/banner-slide-view'
import { v4 as uuid } from 'uuid'
import { CommercialSection } from '@type/slider/commercial-sections'
import { useEffect, useState } from 'react'
import { socket } from '@lib/socket-io'

interface Props {
  items: CommercialSection.SectionItem[]
  onCompleteSectionSlide: () => void
}

export interface BaseSlideViewProps {
  isShowing: boolean
}

type CommercialData = { id: string; kind: string; title?: string; description?: string }

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
        const currentItem = items[currentViewIndex]
        socket.emit('update_current_commercial', createCurrentCommercialData(currentItem))
        setCurrentDisplayViewId(currentItem.data.id)
        didStartSectionSlide()
      } else {
        onCompleteSectionSlide()
      }
    }, 20 * 1000)
  }

  function isShowingView(id: string) {
    return id == currentDisplayViewId
  }

  function createCurrentCommercialData(item: CommercialSection.SectionItem) {
    const data: CommercialData = {
      id: item.data.id,
      kind: item.kind
    }
    switch (item.kind) {
      case 'NEWS':
        data.description = item.data.url
        data.title = item.data.title
        break
      case 'BANNER':
        data.description = item.data.url
        break
      case 'WEATHER':
        data.title = item.data.city_name
        data.description = item.data.description
        break
    }
    return data
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

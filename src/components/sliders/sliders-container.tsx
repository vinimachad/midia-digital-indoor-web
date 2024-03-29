import NewsSlideView from './news/news-slide-view'
import WeatherSlideView from './weather/weather-slide-view'
import BannerSlideView from './banners/banner-slide-view'
import { v4 as uuid } from 'uuid'
import { CommercialSection } from '@type/slider/commercial-sections'
import { useEffect, useState } from 'react'
import { createSocket } from '@lib/socket-io'
import { Socket } from 'socket.io-client'

interface Props {
  items: CommercialSection.SectionItem[]
  onCompleteSectionSlide: () => void
}

export interface BaseSlideViewProps {
  isShowing: boolean
}

export type CommercialData = {
  id: string
  kind: string
  title?: string
  description?: string
  preview?: string
  updatedAt: string
  durationInSeconds: number
}

export default function SlidersContainer({ items, onCompleteSectionSlide }: Props) {
  let currentViewIndex = 0
  let socket: Socket | null = null
  const delayInSeconds = 2
  const [currentDisplayViewId, setCurrentDisplayViewId] = useState(items[0].data.id)

  useEffect(() => {
    socket = createSocket()
    didStartSectionSlide()
    return () => {
      socket?.disconnect()
    }
  }, [])

  // MARK: - Slide logic methods

  async function didStartSectionSlide() {
    const currentItem = items[currentViewIndex]
    setCurrentDisplayViewId(currentItem.data.id)
    emitUpdateCurrentCommercial()
    currentViewIndex++
    if (currentViewIndex <= items.length - 1) {
      wait(delayInSeconds, didStartSectionSlide)
    } else {
      wait(delayInSeconds, onCompleteSectionSlide)
    }
  }

  async function wait(seconds: number, cb: () => void) {
    const oneSecondInMilliseconds = 1000
    setTimeout(cb, seconds * oneSecondInMilliseconds)
  }

  function emitUpdateCurrentCommercial() {
    socket?.emit('update_current_commercial', createCurrentCommercialData(items[currentViewIndex]))
  }

  function isShowingView(id: string) {
    return id == currentDisplayViewId
  }

  function createCurrentCommercialData(item: CommercialSection.SectionItem) {
    const data: CommercialData = {
      id: item.data.id,
      kind: item.kind,
      updatedAt: new Date().toLocaleString(),
      durationInSeconds: delayInSeconds
    }

    switch (item.kind) {
      case 'NEWS':
        data.title = item.data.title
        data.description = 'Acesse a noticia para mais detalhes'
        data.preview = item.data.url
        break
      case 'BANNER':
        data.preview = item.data.url
        break
      case 'WEATHER':
        data.title = `Clima da cidade: ${item.data.city_name}`
        data.description = `${item.data.temp} e ${item.data.description}`
        data.preview = item.data.condition_slug
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

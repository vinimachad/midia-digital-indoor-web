'use client'
import SwiperView from '@/components/slide/swiper-view'
import useSlider from '@/scenes/slider/slider-hook'

export default function Home() {
  const { slides, startSwipeLoop } = useSlider()

  if (slides.length <= 0) {
    return <span>Carregando</span>
  }

  startSwipeLoop()
  return <SwiperView />
}

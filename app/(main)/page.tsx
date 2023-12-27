'use client'
import SwiperView from '@/components/slide/swiper-view'
import SwiperProvider from '@/scenes/slider/hooks/slider-context'
import useSlider from '@/scenes/slider/slider-hook'

export default function Home() {
  useSlider()
  return (
    <SwiperProvider>
      <SwiperView />
    </SwiperProvider>
  )
}

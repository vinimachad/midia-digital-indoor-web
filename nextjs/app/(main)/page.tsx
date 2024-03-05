'use client'
import Loading from '@/scenes/slider/hooks/loading'
import SwiperView from '@/scenes/slider/components/swiper-view'
import useSlider from '@/scenes/slider/slider-hook'

export default function Home() {
  const { slides } = useSlider()

  if (slides.length <= 0) {
    return <Loading />
  }

  return <SwiperView />
}

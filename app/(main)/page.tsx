'use client'
import Loading from '@/components/loading'
import SwiperView from '@/components/slide/swiper-view'
import useSlider from '@/scenes/slider/slider-hook'

export default function Home() {
  const { slides } = useSlider()

  if (slides.length <= 0) {
    return <Loading />
  }

  return <SwiperView />
}

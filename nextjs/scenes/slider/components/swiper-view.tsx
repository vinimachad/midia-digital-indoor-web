'use client'
import { useSwiper } from '@/scenes/slider/hooks/slider-context'

export default function SwiperView() {
  const { slides } = useSwiper()
  return (
    <div id="swiper" className="flex overflow-hidden">
      {slides}
    </div>
  )
}

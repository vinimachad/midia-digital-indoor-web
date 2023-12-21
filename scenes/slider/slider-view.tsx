'use client'
import 'swiper/css'

import { Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import useSlider from './slider-hook'
import { Commercial } from '@/models/commercials'

interface Props {
  commercials: Commercial[]
  // onUpdateView: () => void
}

export default function SliderView({ commercials }: Props) {
  const { delay, handleOnSlideChange, buildSliders } = useSlider({
    commercials,
    onUpdateView
  })

  function onUpdateView() {
    console.log('refresh')
    // revalidatePath('/')
  }

  return (
    <main className="w-screen h-screen">
      <Swiper
        autoplay={{
          delay: delay,
          disableOnInteraction: true
        }}
        className="h-screen"
        modules={[Autoplay]}
        onSlideChange={(swiper) => handleOnSlideChange(swiper.realIndex)}
        slidesPerView={1}
        loop
      >
        {buildSliders()}
      </Swiper>
    </main>
  )
}

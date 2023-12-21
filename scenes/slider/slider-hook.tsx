import { useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { Commercial } from '@/models/commercials'
import SlideView from '@/components/slide/slide-view'

export default function useSlider(data: {
  commercials: Commercial[]
  onUpdateView: () => void
}) {
  const DEFAULT_DELAY = 9000
  const [delay, setDelay] = useState(DEFAULT_DELAY)
  const [loopTimes, setLoopTimes] = useState(0)

  function handleOnSlideChange(index: number) {
    console.log(index)
    _handleIncreaseLoopTimesIfNeeded(index)
    _handleCheckIfFinishedLoopFiveTimes()
    _handleUpdateDelayBySlide(index)
  }

  function buildSliders() {
    return data.commercials.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <SlideView src={item.image_url} {...item} />
        </SwiperSlide>
      )
    })
  }

  function _handleIncreaseLoopTimesIfNeeded(index: number) {
    if (index === 0) {
      setLoopTimes((prev) => prev + 1)
    }
  }

  function _handleCheckIfFinishedLoopFiveTimes() {
    if (loopTimes === 5) {
      data.onUpdateView()
      setLoopTimes(0)
    }
  }

  function _handleUpdateDelayBySlide(index: number) {
    setDelay(data.commercials[index].delay * 1000)
  }

  return { delay, handleOnSlideChange, buildSliders }
}

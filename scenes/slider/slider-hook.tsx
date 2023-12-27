import { useEffect, useState } from 'react'
import { Commercial } from '@/models/commercials'
import SlideView from '@/components/slide/slide-view'
import { useSwiper } from './hooks/slider-context'

export default function useSlider() {
  // MARK: - Private properties

  const DEFAULT_DELAY = 9000
  const { addSlides } = useSwiper()
  const [loopTimes, setLoopTimes] = useState(0)
  const [delay, setDelay] = useState(DEFAULT_DELAY)
  const [commercials, setCommercials] = useState<Commercial[]>([])

  // MARK: - Architecture properties

  useEffect(() => {
    _buildSliders()
  }, [])

  // MARK: - Public methods

  function handleOnSlideChange(index: number) {
    _handleIncreaseLoopTimesIfNeeded(index)
    _handleCheckIfFinishedLoopFiveTimes()
    _handleUpdateDelayBySlide(index)
  }

  // MARK: - Private methods

  function _buildSliders() {
    commercials.forEach((item) => {
      addSlides(<SlideView src={item.news.image_url} {...item.news} />)
    })
  }

  function _handleIncreaseLoopTimesIfNeeded(index: number) {
    if (index === 0) {
      setLoopTimes((prev) => prev + 1)
    }
  }

  function _handleCheckIfFinishedLoopFiveTimes() {
    if (loopTimes === 5) {
      setLoopTimes(0)
    }
  }

  function _handleUpdateDelayBySlide(index: number) {
    setDelay(commercials[index].news.delay * 1000)
  }

  return { delay, handleOnSlideChange }
}

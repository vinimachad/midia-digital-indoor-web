import { useEffect } from 'react'
import { Commercial } from '@/models/commercials'
import SlideView from '@/components/slide/slide-view'
import { useSwiper } from './hooks/slider-context'
// import CommercialWorker from '@/services/workers/commercial-worker'
import getCommercial from '@/mocks/commercials-mock'
import WeatherSlideView from '@/components/slide/weather-slide-view'

export default function useSlider() {
  // MARK: - Private properties

  let loopTimes = 0
  let commercials: Commercial[] = []
  const {
    addSlides,
    removeAllSlides,
    slides,
    startAutomaticSwipe,
    stopAutomaticSwipe
  } = useSwiper()

  // MARK: - Architecture properties

  // const worker = new CommercialWorker()

  useEffect(() => {
    _handleGetCommercials()
  }, [])

  // MARK: - Public methods

  async function startSwipeLoop() {
    await startAutomaticSwipe(
      _handleOnSlideChange,
      _handleIncreaseLoopTimesIfNeeded
    )
  }

  // MARK: - Private methods

  async function _handleGetCommercials() {
    // const data = await worker.getCommercials()
    const data = await getCommercial()
    commercials = data
    _buildSliders()
  }

  async function _handleOnSlideChange() {
    await _handleCheckIfFinishedLoopSomeTimes()
  }

  function _buildSliders() {
    removeAllSlides()
    commercials.forEach((item) => {
      addSlides(
        <>
          <SlideView {...item} />
        </>
      )
    })
  }

  async function _handleIncreaseLoopTimesIfNeeded() {
    loopTimes++
  }

  async function _handleCheckIfFinishedLoopSomeTimes() {
    if (loopTimes < 10) return

    loopTimes = 0
    removeAllSlides()
    stopAutomaticSwipe()
    await _handleGetCommercials()
  }

  return { startSwipeLoop, slides }
}

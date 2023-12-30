import { useEffect } from 'react'
import { CommercialPaginationResponse } from '@/models/commercials'
import SlideView from '@/components/slide/slide-view'
import { useSwiper } from './hooks/slider-context'
import CommercialWorker from '@/services/workers/commercial-worker'
// import getCommercial from '@/mocks/commercials-mock'

export default function useSlider() {
  // MARK: - Private properties

  let loopTimes = 0
  let commercialRes: CommercialPaginationResponse
  const {
    addSlides,
    removeAllSlides,
    slides,
    startAutomaticSwipe,
    stopAutomaticSwipe
  } = useSwiper()

  // MARK: - Architecture properties

  const worker = new CommercialWorker()

  useEffect(() => {
    _start()
  }, [])

  // MARK: - Private methods

  async function _start(page: number = 1, limit: number = 5) {
    await _handleGetCommercials(page, limit)
    await _startSwipeLoop()
  }

  async function _startSwipeLoop() {
    await startAutomaticSwipe(_handleOnSlideChange, _handleOnCompleteLoop)
  }

  async function _handleGetCommercials(page: number = 1, limit: number = 5) {
    const data = await worker.getCommercials(page, limit)
    // const data = await getCommercial()
    commercialRes = data
    _buildSliders()
  }

  async function _handleOnSlideChange() {
    await _handleCheckIfFinishedLoopSomeTimes()
  }

  function _buildSliders() {
    removeAllSlides()
    commercialRes?.data.forEach((item) => {
      addSlides(
        <>
          <SlideView {...item} />
        </>
      )
    })
  }

  // MARK: - On Complete loop logic methods

  async function _handleOnCompleteLoop() {
    _handleIncreaseLoopTimesIfNeeded()
    let next = { limit: 5, page: 1 }
    if (commercialRes?.next) {
      next = commercialRes.next
    }

    await _handleRestartLoop(next.page, next.limit)
  }

  async function _handleIncreaseLoopTimesIfNeeded() {
    loopTimes++
  }

  async function _handleRestartLoop(page: number = 1, limit: number = 5) {
    loopTimes = 0
    removeAllSlides()
    stopAutomaticSwipe()
    await _start(page, limit)
  }

  async function _handleCheckIfFinishedLoopSomeTimes() {
    if (loopTimes < 10) return
    // TODO: - Implement invoke of /update in background
    await _handleRestartLoop()
  }

  return { slides }
}

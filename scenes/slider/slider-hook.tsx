import { useEffect } from 'react'
import { CommercialPaginationResponse } from '@/models/commercials'
import SlideView from '@/components/slide/slide-view'
import { useSwiper } from './hooks/slider-context'
import CommercialWorker, { ICommercialWorker } from '@/services/workers/commercial-worker'
import { ResponseError } from '@/services/service-request/errors'

export default function useSlider() {
  // MARK: - Private properties

  const maxLoopTimes = 10
  let loopTimes = 0
  let commercialRes: CommercialPaginationResponse
  const { addSlides, removeAllSlides, slides, startAutomaticSwipe, stopAutomaticSwipe } = useSwiper()

  // MARK: - Architecture properties

  const worker: ICommercialWorker = new CommercialWorker()

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
    const { error, value } = await worker.getCommercials(page, limit)
    if (error) return _handleApiError(error)

    if (value) {
      commercialRes = value
      _buildSliders()
    }
  }

  async function _handleOnSlideChange() {}

  function _buildSliders() {
    removeAllSlides()
    commercialRes?.data.forEach((item, index) => {
      addSlides(<SlideView key={index} {...item} />)
    })
  }

  // MARK: - On Complete loop logic methods

  async function _handleOnCompleteLoop() {
    _handleIncreaseLoopTimes()
    let next = { page: 1, limit: 5 }
    if (commercialRes?.next) {
      next = commercialRes.next
    }

    await _handleRestartLoop(next.page, next.limit)
  }

  async function _handleIncreaseLoopTimes() {
    loopTimes++
  }

  async function _handleRestartLoop(page: number = 1, limit: number = 5) {
    removeAllSlides()
    stopAutomaticSwipe()

    if (loopTimes < maxLoopTimes) {
      await _start(page, limit)
    } else {
      await _handleUpdateCommercialsAndRestart()
    }
  }

  async function _handleUpdateCommercialsAndRestart() {
    loopTimes = 0
    removeAllSlides()
    stopAutomaticSwipe()
    await worker?.updateCommercials()
    await _start()
  }

  // MARK: - API Request handlers

  async function _handleApiError(error: ResponseError) {
    console.log(error)
  }

  return { slides }
}

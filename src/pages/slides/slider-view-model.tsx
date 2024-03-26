import { useEffect, useState } from 'react'
import commercial from '@models/commercial'
import SlidersContainer from '@components/sliders/sliders-container'
import { Slider } from '@type/slider/slider'

export default function SliderViewModel() {
  // MARK: - Private properties

  const maxLoopTimes = 2
  let loopTimes = 0
  let commercialRes: Slider.CommercialPaginationResponse
  let currentSectionIndex = 0
  const [section, setSection] = useState<React.ReactNode | undefined>(undefined)

  // MARK: - Architecture properties

  useEffect(() => {
    _start()
  }, [])

  // MARK: - Private methods

  async function _start(page: number = 1, limit: number = 5) {
    await _handleGetCommercials(page, limit)
  }

  async function _handleGetCommercials(page: number = 1, limit: number = 5) {
    const { error, value } = await commercial.getCommercials(page, limit)
    if (error) return _handleApiError(error)

    if (value) {
      commercialRes = value
      _buildSliders()
    }
  }

  function _buildSliders() {
    _removeSection()
    setSection(
      <SlidersContainer
        key={currentSectionIndex}
        items={commercialRes.data[currentSectionIndex]}
        onCompleteSectionSlide={async () => await _didCompleteSectionSlide()}
      />
    )
  }

  function _removeSection() {
    setSection(undefined)
  }

  // MARK: - Loop logic methods

  async function _didCompleteSectionSlide() {
    _increaseCurrentSectionIndex()
    if (currentSectionIndex <= commercialRes.data.length - 1) {
      _buildSliders()
    } else {
      await _handleOnCompleteLoop()
    }
  }

  async function _handleOnCompleteLoop() {
    _resetCurrentSectionIndex()
    _handleIncreaseLoopTimes()
    let next = { page: 1, limit: 5 }
    if (commercialRes?.next) {
      next = commercialRes.next
    }

    await _handleRestartLoop(next.page, next.limit)
  }

  async function _handleRestartLoop(page: number = 1, limit: number = 5) {
    _removeSection()

    if (loopTimes <= maxLoopTimes) {
      await _start(page, limit)
    } else {
      await _handleUpdateCommercialsAndRestart()
    }
  }

  async function _handleUpdateCommercialsAndRestart() {
    loopTimes = 0
    _removeSection()
    await commercial.updateCommercials()
    await _start()
  }

  function _handleIncreaseLoopTimes() {
    loopTimes++
  }

  function _resetCurrentSectionIndex() {
    currentSectionIndex = 0
  }

  function _increaseCurrentSectionIndex() {
    currentSectionIndex++
  }

  // MARK: - API Request handlers

  async function _handleApiError(error: any) {
    console.log(error)
  }

  return { section }
}

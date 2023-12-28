import { createContext, useContext, useState } from 'react'
import { ReactNode } from 'react'

export interface ISwiperContext {
  slides: ReactNode[]
  currentIndex: number
  removeAllSlides(): void
  startAutomaticSwipe(
    onChangeSlide: (index: number) => Promise<void>,
    onCompleteLoop: () => Promise<void>
  ): Promise<void>
  stopAutomaticSwipe(): void
  addSlides(slide: ReactNode): void
  removeSlideAt(index: number): void
}
interface SwiperProviderProps {
  children: ReactNode
}

const SwiperContext = createContext<ISwiperContext>({} as ISwiperContext)

export default function SwiperProvider({ children }: SwiperProviderProps) {
  let currentIndex = 0
  const [slides, setSlides] = useState<ReactNode[]>([])
  let swipeInterval: NodeJS.Timeout | null = null

  async function handleSwipe(
    onChangeSlide: (index: number) => Promise<void>,
    onCompleteLoop: () => Promise<void>
  ) {
    currentIndex++
    const swiper = document.getElementById('swiper')
    const bodyEl = document.querySelector('body')
    const slideWidth = bodyEl?.offsetWidth

    if (!swiper) return

    if (currentIndex >= slides.length) {
      currentIndex = 0
      swiper.scrollTo(0, 0)
      await onCompleteLoop()
      return
    }

    await onChangeSlide(currentIndex)
    swiper.scrollBy({ left: slideWidth, behavior: 'smooth' })
  }

  async function startAutomaticSwipe(
    onChangeSlide: (index: number) => Promise<void>,
    onCompleteLoop: () => Promise<void>
  ) {
    if (swipeInterval) {
      stopAutomaticSwipe()
    }

    swipeInterval = setInterval(
      async () => await handleSwipe(onChangeSlide, onCompleteLoop),
      2 * 1000
    )
  }

  function stopAutomaticSwipe() {
    if (swipeInterval) {
      clearInterval(swipeInterval)
      swipeInterval = null
      setTimeout(() => {}, 1000)
    }
  }

  function addSlides(slide: ReactNode) {
    setSlides((prev) => [...prev, slide])
  }

  function removeAllSlides() {
    setSlides([])
  }

  function removeSlideAt(index: number) {
    setSlides((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <SwiperContext.Provider
      value={{
        slides,
        addSlides,
        removeAllSlides,
        removeSlideAt,
        startAutomaticSwipe,
        stopAutomaticSwipe,
        currentIndex
      }}
    >
      {children}
    </SwiperContext.Provider>
  )
}

export const useSwiper = () => {
  return useContext(SwiperContext)
}

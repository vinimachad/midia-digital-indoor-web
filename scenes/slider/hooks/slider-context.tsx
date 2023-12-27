import { createContext, useContext, useState } from 'react'
import { ReactNode } from 'react'

export interface ISwiperContext {
  slides: ReactNode[]
  removeAllSlides(): void
  startAutomaticSwipe(): void
  addSlides(slide: ReactNode): void
  removeSlideAt(index: number): void
}
interface SwiperProviderProps {
  children: ReactNode
}

const SwiperContext = createContext<ISwiperContext>({} as ISwiperContext)

export default function SwiperProvider({ children }: SwiperProviderProps) {
  const [slides, setSlides] = useState<ReactNode[]>([])
  let currentIndex = 0

  function handleSwipe() {
    currentIndex++
    const swiper = document.getElementById('swiper')
    const bodyEl = document.querySelector('body')
    const slideWidth = bodyEl?.offsetWidth

    if (!swiper) return

    if (currentIndex >= slides.length) {
      currentIndex = 0
      swiper.scrollTo(0, 0)
      return
    }

    swiper.scrollBy({ left: slideWidth, behavior: 'smooth' })
  }

  function startAutomaticSwipe() {
    setInterval(handleSwipe, 10 * 1000)
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
        startAutomaticSwipe
      }}
    >
      {children}
    </SwiperContext.Provider>
  )
}

export const useSwiper = () => {
  return useContext(SwiperContext)
}

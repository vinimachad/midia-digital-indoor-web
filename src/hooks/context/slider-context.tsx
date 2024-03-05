import { createContext, useContext, useRef, useState } from 'react'
import { ReactNode } from 'react'

export interface ISliderContext {
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
interface SliderProviderProps {
  children: ReactNode
}

const SliderContext = createContext<ISliderContext>({} as ISliderContext)

export default function SliderProvider({ children }: SliderProviderProps) {
  let currentIndex = 0
  const slidesCountRef = useRef(0)
  const [slides, setSlides] = useState<ReactNode[]>([])
  let swipeInterval: NodeJS.Timeout | undefined = undefined

  async function handleSwipe(onChangeSlide: (index: number) => Promise<void>, onCompleteLoop: () => Promise<void>) {
    currentIndex++
    const swiper = document.getElementById('swiper')
    const bodyEl = document.querySelector('body')
    const slideWidth = bodyEl?.offsetWidth
    if (!swiper) return
    if (currentIndex >= slidesCountRef.current) {
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
    stopAutomaticSwipe()
    swipeInterval = setInterval(async () => await handleSwipe(onChangeSlide, onCompleteLoop), 20 * 1000)
  }

  function stopAutomaticSwipe() {
    clearInterval(swipeInterval)
    swipeInterval = undefined
  }

  function addSlides(slide: ReactNode) {
    slidesCountRef.current += 1
    setSlides((prev) => [...prev, slide])
  }

  function removeAllSlides() {
    slidesCountRef.current = 0
    setSlides([])
  }

  function removeSlideAt(index: number) {
    slidesCountRef.current -= 1
    setSlides((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <SliderContext.Provider
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
    </SliderContext.Provider>
  )
}

export const useSlider = () => {
  return useContext(SliderContext)
}
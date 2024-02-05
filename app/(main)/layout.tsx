'use client'
import SwiperProvider from '@/scenes/slider/hooks/slider-context'

export default function SwiperLayout({ children }: { children: React.ReactNode }) {
  return <SwiperProvider>{children}</SwiperProvider>
}

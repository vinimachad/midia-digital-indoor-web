'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import SwiperProvider from '@/scenes/slider/hooks/slider-context'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Mídia digital indoor',
//   description: 'Seu painel de detalhes e estatísticas sobre suas propagandas.'
// }

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SwiperProvider>{children}</SwiperProvider>
      </body>
    </html>
  )
}

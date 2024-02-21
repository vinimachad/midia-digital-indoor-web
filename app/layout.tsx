import { Inter } from 'next/font/google'
import '../styles/globals.scss'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mídia digital indoor',
  description: 'Seu painel de detalhes e estatísticas sobre suas propagandas.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

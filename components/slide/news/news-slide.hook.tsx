import { News } from '@/models/news'
import { ReactNode, useEffect, useState } from 'react'
import jpLogo from '../../../public/assets/jp-logo.png'
import Image from 'next/image'

export type Properties = {
  backgroundColor: string
  name: string
  logo: ReactNode
}

export default function useNewsSlide(news: News) {
  const [properties, setProperties] = useState<Properties>({} as Properties)

  useEffect(_checkWhatTypeIsThisNews, [])

  function _checkWhatTypeIsThisNews() {
    switch (news.type) {
      case 'G1':
        setProperties({
          backgroundColor: 'bg-red-700',
          name: 'G1',
          logo: <h1>g1</h1>
        })
        return // G1Header
      case 'JPan':
        setProperties({
          backgroundColor: 'bg-black',
          logo: (
            <Image src={jpLogo} alt="jovem pan logo" width={305} height={60} />
          ),
          name: 'Jovem Pan'
        })
    }
  }

  return { properties }
}

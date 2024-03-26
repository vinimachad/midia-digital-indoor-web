import { Slider } from '../../../types/slider/slider'
import { BaseSlideViewProps } from '../sliders-container'
import useNewsSlide from './news-slide.hook'

interface Props extends BaseSlideViewProps {
  news: Slider.News
}

export default function NewsSlideView({ news, isShowing = false }: Props) {
  const { properties } = useNewsSlide(news)

  const Header = () => {
    return (
      <div className={`flex min-h-[74px] w-screen items-center justify-center px-8 ${properties.backgroundColor}`}>
        <div className="grid max-w-7xl flex-1 grid-cols-3 items-center">
          {properties.logo}
          <span className="justify-self-center text-3xl font-extralight text-white">PRINCIPAIS NOTÍCAS</span>
        </div>
      </div>
    )
  }

  const Content = () => {
    return (
      <div className="mt-14 grid grid-cols-2 items-start gap-x-8 px-8">
        <img className="w-full" src={news.image_url} />
        <div className="flex flex-col">
          <h1 className="text-6xl font-semibold text-slate-900">{news.title}</h1>
          <span className="mt-8 text-3xl text-slate-600">
            Ficou interessado nesta notícia? Para saber mais sobre o tema escaneie o QR Code abaixo e mergulhe nesse
            assunto feito pelo {properties.name}.
          </span>
          <img className="relative bottom-0 right-0 mt-8 max-w-[300px]" src={news.qrcode} />
        </div>
      </div>
    )
  }

  return (
    <div className={`absolute top-0 h-full w-full data-[show=false]:hidden`} data-show={isShowing}>
      <Header />
      <Content />
    </div>
  )
}

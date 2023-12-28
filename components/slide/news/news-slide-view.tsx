import { News } from '@/models/news'
import useNewsSlide from './news-slide.hook'

export default function NewsSlideView(props: News) {
  const { properties } = useNewsSlide(props)

  const Header = () => {
    return (
      <div
        className={`flex w-screen min-h-[74px] px-8 items-center justify-center ${properties.backgroundColor}`}
      >
        <div className="grid grid-cols-3 flex-1 max-w-7xl items-center">
          {properties.logo}
          <span className="justify-self-center text-3xl font-extralight text-white">
            PRINCIPAIS NOTÍCAS
          </span>
        </div>
      </div>
    )
  }

  const Content = () => {
    return (
      <div className="grid grid-cols-2 items-start gap-x-8 mt-14 px-8">
        <img className="w-full" src={props.image_url} />
        <div className="flex flex-col">
          <h1 className="font-semibold text-6xl text-slate-900">
            {props.title}
          </h1>
          <span className="mt-8 text-3xl text-slate-600">
            Ficou interessado nesta notícia? Para saber mais sobre o tema
            escaneie o QR Code abaixo e mergulhe nesse assunto feito pelo{' '}
            {properties.name}.
          </span>
          <img
            className="mt-8 max-w-[300px] relative bottom-0 right-0"
            src={props.qrcode}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={`w-screen flex flex-col items-center`}>
      <Header />
      <Content />
    </div>
  )
}

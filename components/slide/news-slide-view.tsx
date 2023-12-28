interface Props {
  src: string
  type: string
  title: string
  qrcode: string
}

export default function NewsSlideView({ src, type, title, qrcode }: Props) {
  let background = 'bg-white'
  switch (type) {
    case 'G1':
      background = 'bg-red-700'
      break
  }

  return (
    <div className={`h-screen flex flex-col items-center`}>
      <div
        className={`flex w-screen min-h-[74px] px-8 items-center justify-center ${background}`}
      >
        <div className="grid grid-cols-3 flex-1 max-w-7xl items-center">
          <h1 className="justify-self-start text-4xl font-bold text-white">
            g1
          </h1>
          <span className="justify-self-center text-3xl font-extralight text-white">
            POLÍTICA
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 items-start max-w-7xl gap-x-8 mt-14">
        <img className="w-full" src={src} />
        <div className="flex flex-col">
          <h1 className="font-semibold text-4xl text-slate-900">{title}</h1>
          <span className="mt-8 text-2xl text-slate-600">
            Ficou interessado nesta notícia? Para saber mais sobre o tema
            escaneie o QR Code abaixo e mergulhe nesse assunto feito pelo G1.
          </span>
          <img
            className="mt-8 max-w-[400px] absolute bottom-8 right-8"
            src={qrcode}
          />
        </div>
      </div>
    </div>
  )
}

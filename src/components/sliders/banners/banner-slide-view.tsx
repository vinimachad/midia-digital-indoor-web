import { BaseSlideViewProps } from '../sliders-container'

interface Props extends BaseSlideViewProps {
  src: string
}

export default function BannerSlideView(props: Props) {
  return (
    <div
      className="absolute top-0 flex min-h-screen min-w-full items-center justify-center data-[show=false]:hidden"
      data-show={props.isShowing}
    >
      <img className="max-h-screen object-contain" src={props.src} />
    </div>
  )
}

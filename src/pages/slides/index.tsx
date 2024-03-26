import Loading from '@components/loadings/slider-loading'
import SliderViewModel from './slider-view-model'

export default function SliderView() {
  const { section } = SliderViewModel()

  if (!section) {
    return <Loading />
  }

  return <div className="h-screen w-screen">{section}</div>
}

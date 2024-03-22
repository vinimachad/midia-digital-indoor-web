import Loading from '@components/loadings/slider-loading'
import SliderViewModel from './slider-view-model'

export default function SliderView() {
  const { slides } = SliderViewModel()
  if (slides.length <= 0) {
    return <Loading />
  }
  return (
    <div id="swiper" className="flex overflow-hidden">
      {slides}
    </div>
  )
}

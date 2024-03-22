import SliderProvider from '../../hooks/context/slider-context'
import SliderView from './slider-view'

export default function SlidePage() {
  return (
    <SliderProvider>
      <SliderView />
    </SliderProvider>
  )
}

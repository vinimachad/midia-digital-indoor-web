import SliderProvider from '@hooks/context/slider-context'
import { Outlet } from 'react-router-dom'

export default function SliderLayout() {
  return (
    <SliderProvider>
      <Outlet />
    </SliderProvider>
  )
}

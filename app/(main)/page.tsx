import SliderView from '@/scenes/slider/slider-view'
import axios from 'axios'

async function getCommercials() {
  const { data } = await axios.get('http://localhost:8080/commercial/list')
  return data.results
}

export default async function Home() {
  const commercials = await getCommercials()
  return <SliderView commercials={commercials} />
}

import { Slider } from './slider'

export namespace CommercialSection {
  export interface NewsSectionItem {
    kind: 'NEWS'
    data: Slider.News
  }

  export interface WeatherSectionItem {
    kind: 'WEATHER'
    data: Slider.Weather
  }

  export interface BannerSectionItem {
    kind: 'BANNER'
    data: Slider.Banner
  }

  export type SectionItem = NewsSectionItem | WeatherSectionItem | BannerSectionItem
}

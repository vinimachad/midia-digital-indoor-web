import { HTTPMethods } from './http-methods'

export interface IRequestProvider {
  path: string
  method: HTTPMethods
  body?: BodyInit
  headers?: HeadersInit
  next?: NextFetchRequestConfig
}

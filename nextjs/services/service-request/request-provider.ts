import { HTTPMethods } from './http-methods'

export interface IRequestProvider extends RequestInit {
  path: string
  method: HTTPMethods
  headers?: HeadersInit
  next?: NextFetchRequestConfig
  body?: any
}

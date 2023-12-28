import { HTTPMethods } from './http-methods'

export interface IRequestProvider {
  path: string
  method: HTTPMethods
  body?: BodyInit
  headers?: HeadersInit
  next?: NextFetchRequestConfig
}

// export default abstract class AbstractRequestProvider
//   implements IRequestProvider
// {
//   path: string
//   abstract method: HTTPMethods

//   public setPath(path: string) {
//     this.path = this.basePath + path
//   }
// }

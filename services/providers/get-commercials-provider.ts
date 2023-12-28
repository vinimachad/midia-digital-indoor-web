import { HTTPMethods } from '../service-request/http-methods'
import { IRequestProvider } from '../service-request/request-provider'

export default class GetCommercialsProvider implements IRequestProvider {
  path: string = 'commercial/list'
  method: HTTPMethods = HTTPMethods.GET
}

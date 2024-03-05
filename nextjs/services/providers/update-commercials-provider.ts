import { HTTPMethods } from '../service-request/http-methods'
import { IRequestProvider } from '../service-request/request-provider'

export default class UpdateCommercialsProvider implements IRequestProvider {
  path: string = 'commercial/update'
  method: HTTPMethods = HTTPMethods.PUT
}

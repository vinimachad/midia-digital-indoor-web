import { HTTPMethods } from '../service-request/http-methods'
import { IRequestProvider } from '../service-request/request-provider'

export default class GetCommercialsProvider implements IRequestProvider {
  private params = new URLSearchParams()
  path: string

  constructor(
    private page: number,
    private limit: number
  ) {
    this.params.append('page', this.page.toString())
    this.params.append('limit', this.limit.toString())
    this.path = 'commercial/list?' + this.params
  }

  method: HTTPMethods = HTTPMethods.GET
}

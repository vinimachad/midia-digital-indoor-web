import ServiceRequest, { Result } from '../service-request'
import { ResponseError } from '../service-request/errors'
import { IRequestProvider } from '../service-request/request-provider'

export default class BaseWorker {
  constructor(private serviceRequest: ServiceRequest = ServiceRequest.shared) {}

  async fetch<Response>(provider: IRequestProvider): Promise<Result<Response, ResponseError>> {
    return await this.serviceRequest.request(provider)
  }

  async fetchVoid(provider: IRequestProvider) {
    try {
      await this.serviceRequest.requestVoid(provider)
    } catch (error) {
      console.log(error)
      throw new Error()
    }
  }
}

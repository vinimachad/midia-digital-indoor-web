import ServiceRequest from '../service-request'
import { IRequestProvider } from '../service-request/request-provider'

export default class BaseWorker {
  constructor(private serviceRequest: ServiceRequest = ServiceRequest.shared) {}

  async fetch<Response>(provider: IRequestProvider): Promise<Response> {
    try {
      return await this.serviceRequest.request(provider)
    } catch (error) {
      console.log(error)
      throw new Error()
    }
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

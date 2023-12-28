import { IRequestProvider } from './request-provider'

export default class ServiceRequest {
  static shared: ServiceRequest = new ServiceRequest()
  BASE_PATH = 'http://localhost:8080/'
  private constructor() {}

  async request<Response>(provider: IRequestProvider): Promise<Response> {
    const { path, body, headers, method } = provider
    const response = await fetch(this.BASE_PATH + path, {
      body,
      headers,
      method,
      next: { revalidate: 0 }
    })
    const data = await response.json()
    return data.results
  }
}

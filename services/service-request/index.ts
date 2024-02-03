import { AppError, ResponseError } from './errors'
import { IRequestProvider } from './request-provider'

export type Result<Success, Error> = { value?: Success; error?: Error }

export default class ServiceRequest {
  static shared: ServiceRequest = new ServiceRequest()
  BASE_PATH = process.env.NEXT_PUBLIC_BASE_URL
  private constructor() {}

  async request<Response>(
    provider: IRequestProvider
  ): Promise<Result<Response, ResponseError>> {
    try {
      const { path, body, headers, method, next } = provider
      const response = await fetch(this.BASE_PATH + path, {
        body,
        headers: { 'Content-Type': 'application/json', ...headers },
        method,
        next
      })

      if (!response.ok) throw new AppError(response)

      const data = await response.json()
      return { value: data.results }
    } catch (err) {
      const error = err as AppError
      return await error.parse()
    }
  }

  async requestVoid(provider: IRequestProvider) {
    const { path, body, headers, method } = provider
    await fetch(this.BASE_PATH + path, {
      body,
      headers: { 'Content-Type': 'application/json', ...headers },
      method,
      next: { revalidate: 0 }
    })
  }
}

import { IRequestProvider } from './request-provider'

class AppError extends Error {
  constructor(private response: globalThis.Response) {
    super()
  }

  private
}

class ErrorResponse {
  constructor(
    public status_code: number,
    public message?: string,
    public title?: string
  ) {}
}

export default class ServiceRequest {
  static shared: ServiceRequest = new ServiceRequest()
  BASE_PATH = process.env.NEXT_PUBLIC_BASE_URL
  private constructor() {}

  async request<Response>(provider: IRequestProvider): Promise<Response> {
    const { path, body, headers, method, next } = provider
    const response = await fetch(this.BASE_PATH + path, {
      body,
      headers: { 'Content-Type': 'application/json', ...headers },
      method,
      next
    })

    if (!response.ok) {
      throw new AppError(response)
    }

    const data = await response.json()
    return data.results
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

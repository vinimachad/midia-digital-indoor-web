import { AppError, ResponseError } from './errors'
import { IRequestProvider } from './request-provider'

export type Result<Success, Error> = { value?: Success; error?: Error }
export type APIResponse<T> = Result<T, ResponseError>
export type TSObject = {
  [key: string]: string
}

export default class ServiceRequest {
  // MARK: - Public properties

  static shared: ServiceRequest = new ServiceRequest()

  // MARK: - Private properties

  private BASE_PATH = process.env.NEXT_PUBLIC_BASE_URL
  private defaultHeaders: TSObject = { 'Content-Type': 'application/json' }

  private constructor() {}

  // MARK: - Setters

  setHeader(headers: TSObject) {
    Object.keys(headers).forEach((key) => {
      if (Object.hasOwn(this.defaultHeaders, key)) {
        this.defaultHeaders[key] = headers[key]
      } else {
        this.defaultHeaders[key] = headers[key]
      }
    })
  }

  // MARK: - Request methods

  async request<Response>(provider: IRequestProvider): Promise<Result<Response, ResponseError>> {
    try {
      const results = await this._fetchRequest(provider)
      return { value: results }
    } catch (err) {
      const error = err as AppError
      return await error.parse()
    }
  }

  async requestVoid(provider: IRequestProvider) {
    try {
      await this._fetchRequest(provider)
    } catch (err) {
      const error = err as AppError
      return await error.parse()
    }
  }

  private async _fetchRequest(provider: IRequestProvider) {
    const { path, body, headers, method, next } = provider
    const response = await fetch(this.BASE_PATH + path, {
      body: JSON.stringify(body),
      headers: { ...this.defaultHeaders, ...headers },
      method,
      next: next ? next : { revalidate: 0 }
    })

    if (!response.ok) throw new AppError(response)
    const { results } = await response.json()
    return results
  }
}

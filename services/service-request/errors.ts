export type APIError = {
  name: string
  status_code: number
  title?: string
  message?: string
}

export type APIZodError = {
  name: string
  issues: any[]
}

export type ResponseError = APIError | APIZodError

export class AppError extends Error {
  constructor(private response: globalThis.Response) {
    super()
  }

  public async parse(): Promise<{ error: ResponseError }> {
    const data = await this.response.json()
    return { error: { ...data } }
  }
}

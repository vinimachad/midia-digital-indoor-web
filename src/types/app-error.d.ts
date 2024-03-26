export namespace AppErrorTypes {
  export type APIError = {
    name: string
    status_code: number
    title?: string
    message?: string
  }

  export type APIZodError = {
    name: string
    issues: ZodIssue[]
  }

  export type ZodIssue = {
    validation?: string
    code?: string
    minimum?: number
    type?: string
    inclusive?: boolean
    exact?: boolean
    message?: string
    path?: string[]
  }

  export type ResponseError = APIError | APIZodError
}

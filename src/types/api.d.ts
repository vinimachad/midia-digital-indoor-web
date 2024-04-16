import { AppErrorTypes } from '@type/app-error'
export type Result<Success, Error> = { value?: Success; error?: Error }
export type APIResponse<T> = Result<T, AppErrorTypes.ResponseError>

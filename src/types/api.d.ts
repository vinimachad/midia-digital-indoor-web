export type Result<Success, Error> = { value?: Success; error?: Error }
export type APIResponse<T> = Result<T, ResponseError>

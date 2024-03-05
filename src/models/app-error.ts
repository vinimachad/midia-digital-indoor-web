import { AppErrorTypes } from '../types/app-error'

export default function AppError() {
  async function parse(data: any): Promise<{ error: AppErrorTypes.ResponseError }> {
    return { error: { ...data } }
  }

  return { parse }
}

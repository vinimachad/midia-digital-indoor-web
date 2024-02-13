'use server'
import Cookie from '@/lib/cookies'
import { User } from '@/models/user/user'
import { ResponseError } from '@/services/service-request/errors'
import UserWorker from '@/services/workers/user-worker'
type CreateAccountCb = {
  failure: (error: ResponseError) => void
  success: (response: User.CreateAccount.Response) => void
}

export async function createAccount(user: User.CreateAccount.Request, cb: CreateAccountCb) {
  const cookies = Cookie()
  const worker = new UserWorker()
  const { error, value } = await worker.createAccount(user)

  if (error) {
    cb.failure(error)
  } else if (value) {
    cookies.accessToken.set(value.access_token)
    cookies.refreshToken.set(value.refresh_token)
    cb.success(value)
  }
}

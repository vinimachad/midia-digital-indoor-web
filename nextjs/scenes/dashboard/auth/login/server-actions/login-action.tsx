'use server'
import Cookie from '@/lib/cookies'
import { User } from '@/models/user/user'
import UserWorker, { IUserWorker } from '@/services/workers/user-worker'

export async function loginAction(user: User.Login.Request) {
  const cookies = Cookie()
  const worker: IUserWorker = new UserWorker()
  const { value, error } = await worker.login(user)

  if (value) {
    cookies.accessToken.set(value.access_token)
    cookies.refreshToken.set(value.refresh_token)
  }

  return { value, error }
}

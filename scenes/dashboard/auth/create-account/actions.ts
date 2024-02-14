'use server'
import Cookie from '@/lib/cookies'
import { User } from '@/models/user/user'
import UserWorker from '@/services/workers/user-worker'

export async function createAccount(user: User.CreateAccount.Request) {
  const cookies = Cookie()
  const worker = new UserWorker()
  const { error, value } = await worker.createAccount(user)

  if (value) {
    cookies.accessToken.set(value.access_token)
    cookies.refreshToken.set(value.refresh_token)
  }

  return { error, value }
}

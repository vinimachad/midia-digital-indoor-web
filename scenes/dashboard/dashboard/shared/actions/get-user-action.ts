'use server'

import Cookie from '@/lib/cookies'
import UserWorker from '@/services/workers/user-worker'

export async function getUserAction() {
  const cookies = Cookie()
  const worker = new UserWorker()
  const access_token = cookies.accessToken.get()?.value ?? ''
  const response = await worker.getUserInfos({ access_token: access_token })
  return {
    access_token,
    ...response
  }
}

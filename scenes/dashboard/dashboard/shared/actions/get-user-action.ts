'use server'

import Cookie from '@/lib/cookies'
import UserWorker from '@/services/workers/user-worker'
import { revalidateTag } from 'next/cache'

export async function getUserAction(revalidate: boolean = false) {
  if (revalidate) revalidateTag('user-infos')

  const cookies = Cookie()
  const worker = new UserWorker()
  const access_token = cookies.accessToken.get()?.value ?? ''
  const response = await worker.getUserInfos({ access_token: access_token })
  return {
    access_token,
    ...response
  }
}

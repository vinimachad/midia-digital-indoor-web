'use server'

import { APIError, ResponseError } from '@/services/service-request/errors'
import deleteCookiesAction from './delete-cookies-action'
import UserWorker, { IUserWorker } from '@/services/workers/user-worker'
import Cookie from '@/lib/cookies'
import { redirect } from 'next/navigation'

export default async function refreshTokenAction(error: ResponseError) {
  const err = error as APIError

  if (err.status_code == 401) {
    const worker: IUserWorker = new UserWorker()
    const cookies = Cookie()
    const { value } = await worker.refreshToken({ refresh_token: cookies.refreshToken.get()?.value ?? '' })

    if (value) {
      cookies.accessToken.set(value.access_token)
      cookies.refreshToken.set(value.refresh_token)
      return
    }
  }

  await deleteCookiesAction()
  redirect('/dashboard/login')
}

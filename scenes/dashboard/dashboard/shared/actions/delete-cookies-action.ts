'use server'
import Cookie from '@/lib/cookies'

export default async function deleteCookiesAction() {
  const cookies = Cookie()
  cookies.accessToken.delete()
  cookies.refreshToken.delete()
}

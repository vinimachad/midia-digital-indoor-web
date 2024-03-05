import { cookies } from 'next/headers'

export default function Cookie() {
  const accessToken = {
    get: () => cookies().get('access_token'),
    set: (token: string) => {
      const expires = new Date()
      expires.setHours(expires.getHours() + 1)
      cookies().set('access_token', token, { httpOnly: true, expires })
    },
    delete: () => cookies().delete('access_token')
  }

  const refreshToken = {
    get: () => cookies().get('refresh_token'),
    set: (token: string) => {
      const expires = new Date()
      expires.setDate(expires.getDate() + 30)
      cookies().set('refresh_token', token, { httpOnly: true, expires })
    },
    delete: () => cookies().delete('refresh_token')
  }

  return { accessToken, refreshToken }
}

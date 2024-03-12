import Cookie from 'js-cookie'

const ACCESS_TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

export default {
  accessToken: {
    get: () => Cookie.get(ACCESS_TOKEN_KEY),
    delete: () => Cookie.remove(ACCESS_TOKEN_KEY),
    set: (value: string) =>
      Cookie.set(ACCESS_TOKEN_KEY, value, {
        expires: (() => {
          const date = new Date()
          date.setUTCHours(date.getUTCHours() + 1) // TODO: Receive the expire hour from api
          return date
        })()
      })
  },
  refreshToken: {
    get: () => Cookie.get(REFRESH_TOKEN_KEY),
    delete: () => Cookie.remove(REFRESH_TOKEN_KEY),
    set: (value: string) =>
      Cookie.set(REFRESH_TOKEN_KEY, value, {
        expires: (() => {
          const date = new Date()
          date.setDate(date.getDate() + 30) // TODO: Receive the expire date from api
          return date
        })()
      })
  }
}

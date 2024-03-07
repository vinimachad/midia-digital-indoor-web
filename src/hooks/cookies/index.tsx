import Cookie from 'js-cookie'

const ACCESS_TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

export default {
  accessToken: {
    get: () => Cookie.get(ACCESS_TOKEN_KEY),
    delete: () => Cookie.remove(ACCESS_TOKEN_KEY)
  },
  refreshToken: {
    get: () => Cookie.get(REFRESH_TOKEN_KEY),
    delete: () => Cookie.remove(REFRESH_TOKEN_KEY)
  }
}

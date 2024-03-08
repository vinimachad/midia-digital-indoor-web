import cookies from '@lib/cookies'
import ServiceRequest from '@services/api'
import { APIResponse } from '@type/api'
import { AppErrorTypes } from '@type/app-error'
import { User } from '@type/user'

const serviceRequest = ServiceRequest()

async function login(req: User.Login.Request): Promise<APIResponse<User.Login.Response>> {
  const result = await serviceRequest.post<User.Login.Response>('/user/login', req)
  setCookies(result.value)
  return result
}

async function register(req: User.CreateAccount.Request): Promise<APIResponse<User.CreateAccount.Response>> {
  const result = await serviceRequest.post<User.CreateAccount.Response>('/user/register', req)
  setCookies(result.value)
  return result
}

async function infos(req: User.Request): Promise<APIResponse<User.Infos>> {
  return await serviceRequest.get('/user/infos', { headers: { Authorization: `Bearer ${req.access_token}` } })
}

async function refreshToken(req: User.RefreshToken.Request): Promise<APIResponse<User.RefreshToken.Response>> {
  const result = await serviceRequest.get<User.RefreshToken.Response>('/user/refresh-token', {
    headers: { Authorization: `Bearer ${req.refresh_token}` }
  })
  setCookies(result.value)
  return result
}

async function validateUser() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const accessTkn = cookies.accessToken.get()
  const refreshTkn = cookies.refreshToken.get()

  if (accessTkn || refreshTkn) {
    if (accessTkn) {
      const { value, error } = await infos({ access_token: accessTkn })
      if (value) return value

      const apiError = error as AppErrorTypes.APIError
      if (apiError.status_code === 401 && refreshTkn) {
        const { value, error } = await refreshToken({ refresh_token: refreshTkn })
        if (value) {
          return await validateUser()
        } else if (error) {
          cookies.accessToken.delete()
          cookies.refreshToken.delete()
          return undefined
        }
      }
    }
  }
}

function setCookies(data?: { access_token: string; refresh_token: string }) {
  if (data) {
    cookies.accessToken.set(data.access_token)
    cookies.refreshToken.set(data.refresh_token)
  }
}

export default Object.freeze({
  infos,
  login,
  register,
  refreshToken,
  validateUser
})

import { User } from '@/models/user/user'
import { HTTPMethods } from '../service-request/http-methods'
import { IRequestProvider } from '../service-request/request-provider'

export default class GetRefreshTokenProvider implements IRequestProvider {
  path: string = 'user/refresh-token'
  method: HTTPMethods = HTTPMethods.GET
  headers?: HeadersInit | undefined

  constructor(private request: User.RefreshToken.Request) {
    this.headers = { authorization: `Bearer ${request.refresh_token}` }
  }
}

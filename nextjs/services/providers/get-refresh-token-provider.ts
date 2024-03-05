import { User } from '@/models/user/user'
import { HTTPMethods } from '../service-request/http-methods'
import { IRequestProvider } from '../service-request/request-provider'
import ServiceRequest from '../service-request'

export default class GetRefreshTokenProvider implements IRequestProvider {
  path: string = 'user/refresh-token'
  method: HTTPMethods = HTTPMethods.GET

  constructor(private request: User.RefreshToken.Request) {
    ServiceRequest.shared.setAuthorization(request.refresh_token)
  }
}

import { User } from '@/models/user/user'
import { HTTPMethods } from '../service-request/http-methods'
import { IRequestProvider } from '../service-request/request-provider'
import ServiceRequest from '../service-request'

export default class GetUserInfosProvider implements IRequestProvider {
  path: string = 'user/infos'
  method: HTTPMethods = HTTPMethods.GET

  constructor(request: User.Request) {
    ServiceRequest.shared.setAuthorization(request.access_token)
  }
}

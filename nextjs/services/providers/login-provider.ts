import { User } from '@/models/user/user'
import { HTTPMethods } from '@/services/service-request/http-methods'
import { IRequestProvider } from '@/services/service-request/request-provider'

export default class LoginProvider implements IRequestProvider {
  path: string = 'user/login'
  method: HTTPMethods = HTTPMethods.POST
  body?: any

  constructor(private request: User.Login.Request) {
    this.body = request
  }
}

import { User } from '@/models/user/user'
import { HTTPMethods } from '../service-request/http-methods'
import { IRequestProvider } from '../service-request/request-provider'

export default class CreateAccountProvider implements IRequestProvider {
  body?: BodyInit | null | undefined
  path: string = 'user/register'
  method: HTTPMethods = HTTPMethods.POST

  constructor(private request: User.CreateAccount.Request) {
    this.body = JSON.stringify(this.request)
  }
}

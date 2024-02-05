import BaseWorker from '.'
import { User } from '@/models/user/user'
import CreateAccountProvider from '../providers/create-account-provider'
import GetRefreshTokenProvider from '../providers/get-refresh-token-provider'

export default class UserWorker extends BaseWorker {
  async createAccount(request: User.CreateAccount.Request) {
    const provider = new CreateAccountProvider(request)
    return await this.fetch<User.CreateAccount.Response>(provider)
  }

  async refreshToken(request: User.RefreshToken.Request) {
    const provider = new GetRefreshTokenProvider(request)
    return await this.fetch<User.RefreshToken.Response>(provider)
  }
}

import BaseWorker from '.'
import { User } from '@/models/user/user'
import CreateAccountProvider from '../providers/create-account-provider'
import GetRefreshTokenProvider from '../providers/get-refresh-token-provider'
import LoginProvider from '../providers/login-provider'
import { APIResponse } from '../service-request'
import GetUserInfosProvider from '../providers/get-user-infos-provider'

export interface IUserWorker {
  getUserInfos(request: User.Request): Promise<APIResponse<User.Infos>>
  login(request: User.Login.Request): Promise<APIResponse<User.Login.Response>>
  refreshToken(request: User.RefreshToken.Request): Promise<APIResponse<User.RefreshToken.Response>>
  createAccount(request: User.CreateAccount.Request): Promise<APIResponse<User.CreateAccount.Response>>
}

export default class UserWorker extends BaseWorker implements IUserWorker {
  async createAccount(request: User.CreateAccount.Request) {
    const provider = new CreateAccountProvider(request)
    return await this.fetch<User.CreateAccount.Response>(provider)
  }

  async refreshToken(request: User.RefreshToken.Request) {
    const provider = new GetRefreshTokenProvider(request)
    return await this.fetch<User.RefreshToken.Response>(provider)
  }

  async login(request: User.Login.Request) {
    const provider = new LoginProvider(request)
    return await this.fetch<User.Login.Response>(provider)
  }

  async getUserInfos(request: User.Request) {
    const provider = new GetUserInfosProvider(request)
    return await this.fetch<User.Infos>(provider)
  }
}

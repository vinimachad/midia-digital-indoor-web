import BaseWorker from '.'
import CreateAccountProvider from '../providers/create-account-provider'

export default class CreateAccountWorker extends BaseWorker {
  async createAccount(request: CreateAccount.Request) {
    const provider = new CreateAccountProvider(request)
    await this.fetch<CreateAccount.Response>(provider)
  }
}

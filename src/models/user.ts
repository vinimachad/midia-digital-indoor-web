import ServiceRequest from '@services/api'
import { APIResponse } from '@type/api'
import { User } from '@type/user'

const serviceRequest = ServiceRequest()

async function login(req: User.Login.Request): Promise<APIResponse<User.Login.Response>> {
  return await serviceRequest.post('/user/login', req)
}

async function register(req: User.CreateAccount.Request): Promise<APIResponse<User.CreateAccount.Response>> {
  return await serviceRequest.post('/user/register', req)
}

export default Object.freeze({
  login,
  register
})

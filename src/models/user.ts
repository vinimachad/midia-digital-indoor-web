import ServiceRequest from '@services/api'
import { APIResponse } from '@type/api'
import { User } from '@type/user'

const serviceRequest = ServiceRequest()

async function login(req: User.Login.Request): Promise<APIResponse<User.Login.Response>> {
  return await serviceRequest.post('/user/login', req)
}

export default Object.freeze({
  login
})

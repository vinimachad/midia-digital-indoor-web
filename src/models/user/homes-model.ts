import cookies from '@lib/cookies'
import ServiceRequest from '@services/api'
import { APIResponse } from '@type/api'
import { Homes } from '@type/user/homes'

export default () => {
  const serviceRequest = ServiceRequest()

  async function getUploadMenu(): Promise<APIResponse<Homes.UploadMenu[]>> {
    const accessToken = cookies.accessToken.get()
    serviceRequest.setAuthorization(accessToken ?? '')
    return await serviceRequest.get('/user/homes/commercial/upload/menu')
  }

  return { getUploadMenu }
}

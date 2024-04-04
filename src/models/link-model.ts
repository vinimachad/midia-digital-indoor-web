import ServiceRequest from '@services/api'
import { APIResponse } from '@type/api'
import { LinkMetadata } from '@type/link-metadata'

const serviceRequest = ServiceRequest()

async function getMetadata(url: string): Promise<APIResponse<LinkMetadata>> {
  return await serviceRequest.post('/link/metadata', { url })
}

export default Object.freeze({
  getMetadata
})

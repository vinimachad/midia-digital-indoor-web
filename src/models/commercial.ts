import ServiceRequest from '../services/api'
import { APIResponse } from '../types/api'
import { Slider } from '../types/slider/slider'
import cookies from '@lib/cookies'

const serviceRequest = ServiceRequest()

export async function getCommercials(
  page: number,
  limit: number
): Promise<APIResponse<Slider.CommercialPaginationResponse>> {
  return await serviceRequest.get('/commercial/list', { params: { page, limit } })
}

export async function updateCommercials(): Promise<APIResponse<undefined>> {
  return await serviceRequest.put('/commercial/update')
}

export async function createAnalysis(data: FormData) {
  serviceRequest.setAuthorization(cookies.accessToken.get() ?? '')
  await serviceRequest.post('/commercial/create/review', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export default Object.freeze({
  getCommercials,
  createAnalysis,
  updateCommercials
})

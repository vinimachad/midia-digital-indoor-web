import { CommercialPaginationResponse } from '@/models/commercials'
import GetCommercialsProvider from '../providers/get-commercials-provider'
import BaseWorker from './'
import UpdateCommercialsProvider from '../providers/update-commercials-provider'

export interface ICommercialWorker {
  getCommercials(
    page: number,
    limit: number
  ): Promise<CommercialPaginationResponse>
  updateCommercials(): Promise<void>
}

export default class CommercialWorker
  extends BaseWorker
  implements ICommercialWorker
{
  async getCommercials(
    page: number,
    limit: number
  ): Promise<CommercialPaginationResponse> {
    const provider = new GetCommercialsProvider(page, limit)
    return await this.fetch(provider)
  }

  async updateCommercials(): Promise<void> {
    const provider = new UpdateCommercialsProvider()
    return await this.fetchVoid(provider)
  }
}

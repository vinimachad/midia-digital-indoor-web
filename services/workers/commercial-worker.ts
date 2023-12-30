import { CommercialPaginationResponse } from '@/models/commercials'
import GetCommercialsProvider from '../providers/get-commercials-provider'
import BaseWorker from './'

export interface ICommercialWorker {
  getCommercials(
    page: number,
    limit: number
  ): Promise<CommercialPaginationResponse>
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
}

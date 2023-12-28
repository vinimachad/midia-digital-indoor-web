import { Commercial } from '@/models/commercials'
import GetCommercialsProvider from '../providers/get-commercials-provider'
import BaseWorker from './'

export interface ICommercialWorker {
  getCommercials(): Promise<Commercial[]>
}

export default class CommercialWorker
  extends BaseWorker
  implements ICommercialWorker
{
  async getCommercials(): Promise<Commercial[]> {
    const provider = new GetCommercialsProvider()
    return await this.fetch(provider)
  }
}

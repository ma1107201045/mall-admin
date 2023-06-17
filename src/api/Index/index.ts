import BaseApi from '@/api/admin/base/base'
import { AxiosResponse } from 'axios'

export default class IndexApi {
  baseApi: BaseApi = BaseApi.getInstance()

  static getInstance(): IndexApi {
    return new IndexApi()
  }

  getMenu(): Promise<AxiosResponse<any, any>> {
    return this.baseApi.getMenu()
  }

  updateUser(body: object): Promise<AxiosResponse<any, any>> {
    return this.baseApi.updateUser(body)
  }
}

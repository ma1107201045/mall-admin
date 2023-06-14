import BaseApi from '@/api/admin/base/base'
import { AxiosResponse } from 'axios'

export default class HomeApi {
  baseApi: BaseApi = BaseApi.getInstance()

  static getInstance(): HomeApi {
    return new HomeApi()
  }

  getMenu(): Promise<AxiosResponse<any, any>> {
    return this.baseApi.getMenu()
  }

  updateUser(body: object): Promise<AxiosResponse<any, any>> {
    return this.baseApi.updateUser(body)
  }
}

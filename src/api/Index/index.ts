import BaseApi from '@/api/admin/base/base'
import { AxiosResponse } from 'axios'

export default class IndexApi {
  static indexApi = null
  baseApi: BaseApi = BaseApi.getInstance()

  static getInstance(): IndexApi {
    if (this.indexApi === null) {
      return new IndexApi()
    }
    return this.indexApi
  }

  getMenuTree(): Promise<AxiosResponse<any, any>> {
    return this.baseApi.getMenuTree()
  }

  getMenuPermissions(): Promise<AxiosResponse<any, any>> {
    return this.baseApi.getMenuPermissions()
  }

  updateUser(body: object): Promise<AxiosResponse<any, any>> {
    return this.baseApi.updateUser(body)
  }
}

import { AxiosResponse } from 'axios'
import HttpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/enums'

export default class BaseApi {
  static URL_PREFIX: string = '/admin/base/bases'
  static baseApi = null

  static getInstance(): BaseApi {
    if (this.baseApi === null) {
      return new BaseApi()
    }
    return this.baseApi
  }

  getMenuTree(): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: BaseApi.URL_PREFIX + '/menu-tree',
      method: HttpMethod.GET
    })
  }

  getMenuPermissions(): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: BaseApi.URL_PREFIX + '/menu-permissions',
      method: HttpMethod.GET
    })
  }

  updateUser(body: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: BaseApi.URL_PREFIX + '/user',
      method: HttpMethod.PATCH,
      data: body
    })
  }
}

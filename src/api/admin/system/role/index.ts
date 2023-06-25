import HttpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/enums'
import BaseApiInterface from '@/api'
import { AxiosResponse } from 'axios'

export default class RoleApi implements BaseApiInterface {
  static URL_PREFIX: string = '/admin/system/roles'
  static roleApi = null

  static getInstance(): RoleApi {
    if (this.roleApi === null) {
      return new RoleApi()
    }
    return this.roleApi
  }

  save(body: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: RoleApi.URL_PREFIX,
      method: HttpMethod.POST,
      data: body
    })
  }

  deleteByIds(ids: number[]): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: RoleApi.URL_PREFIX + `/${ids.join(',')}`,
      method: HttpMethod.DELETE
    })
  }

  updateById(id: number, body: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: RoleApi.URL_PREFIX + `/${id}`,
      method: HttpMethod.PUT,
      data: body
    })
  }

  getById(id: number): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: RoleApi.URL_PREFIX + `/${id}`,
      method: HttpMethod.GET
    })
  }

  getListByPageAndParam(params: any): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: RoleApi.URL_PREFIX,
      method: HttpMethod.GET,
      params: params
    })
  }

  getMenuTree(): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: RoleApi.URL_PREFIX + '/menu-tree',
      method: HttpMethod.GET
    })
  }
}

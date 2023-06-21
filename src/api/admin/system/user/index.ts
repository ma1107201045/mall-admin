import HttpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/enums/httpMethod.ts'
import { AxiosResponse } from 'axios'
import BaseApiInterface from '@/api'

export default class UserApi implements BaseApiInterface {
  static URL_PREFIX: string = '/admin/system/users'
  static userApi = null

  static getInstance(): UserApi {
    if (this.userApi === null) {
      return new UserApi()
    }
    return this.userApi
  }

  save(body: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: UserApi.URL_PREFIX,
      method: HttpMethod.POST,
      data: body
    })
  }

  deleteByIds(ids: number[]): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: UserApi.URL_PREFIX + `/${ids.join(',')}`,
      method: HttpMethod.DELETE
    })
  }

  updateById(id: number, body: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: UserApi.URL_PREFIX + +`/${id}`,
      method: HttpMethod.PUT,
      data: body
    })
  }

  getById(id: number): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: UserApi.URL_PREFIX + `/${id}`,
      method: HttpMethod.GET
    })
  }

  getListByPageAndParam(query: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: UserApi.URL_PREFIX,
      method: HttpMethod.GET,
      data: query
    })
  }

  getRoleList(): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: UserApi.URL_PREFIX + '/roles',
      method: HttpMethod.GET
    })
  }
}

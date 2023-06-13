import HttpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/utils/httpMethod.ts'
import { AxiosResponse } from 'axios'
import BaseApiInterface from '@/api'

export default class UserApi implements BaseApiInterface {
  static URL_PREFIX: string = '/admin/system/users'

  static getInstance(): UserApi {
    return new UserApi()
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

  getListByPageAndQuery(query: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: UserApi.URL_PREFIX,
      method: HttpMethod.GET,
      data: query
    })
  }
}
import HttpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/enums/httpMethod.ts'
import BaseApiInterface from '@/api'
import { AxiosResponse } from 'axios'

export class MenuApi implements BaseApiInterface {
  static URL_PREFIX: string = '/admin/system/menus'

  static getInstance(): MenuApi {
    return new MenuApi()
  }

  save(body: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: MenuApi.URL_PREFIX,
      method: HttpMethod.POST,
      data: body
    })
  }

  deleteByIds(ids: number[]): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: MenuApi.URL_PREFIX + `/${ids.join(',')}`,
      method: HttpMethod.DELETE
    })
  }

  updateById(id: number, body: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: MenuApi.URL_PREFIX + +`/${id}`,
      method: HttpMethod.PUT,
      data: body
    })
  }

  getById(id: number): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: MenuApi.URL_PREFIX + `/${id}`,
      method: HttpMethod.GET
    })
  }

  getListByPageAndQuery(query: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: MenuApi.URL_PREFIX,
      method: HttpMethod.GET,
      data: query
    })
  }
}

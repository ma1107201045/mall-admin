import HttpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/enums'
import { AxiosResponse } from 'axios'
import BaseApiInterface from '@/api'

export default class CategoryApi implements BaseApiInterface {
  static URL_PREFIX: string = '/admin/product/categories'
  static categoryApi = null

  static getInstance(): CategoryApi {
    if (this.categoryApi === null) {
      return new CategoryApi()
    }
    return this.categoryApi
  }

  save(body: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: CategoryApi.URL_PREFIX,
      method: HttpMethod.POST,
      data: body
    })
  }

  deleteByIds(ids: number[]): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: CategoryApi.URL_PREFIX + `/${ids.join(',')}`,
      method: HttpMethod.DELETE
    })
  }

  updateById(id: number, body: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: CategoryApi.URL_PREFIX + `/${id}`,
      method: HttpMethod.PUT,
      data: body
    })
  }

  getById(id: number): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: CategoryApi.URL_PREFIX + `/${id}`,
      method: HttpMethod.GET
    })
  }

  getListByPageAndParam(params: any): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: CategoryApi.URL_PREFIX,
      method: HttpMethod.GET,
      params: params
    })
  }

  getTree(): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: CategoryApi.URL_PREFIX + '/get-tree',
      method: HttpMethod.GET
    })
  }
}

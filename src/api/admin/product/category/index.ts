import HttpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/enums'
import { AxiosResponse } from 'axios'
import BaseApiInterface from '@/api'

export default class BrandApi implements BaseApiInterface {
  static URL_PREFIX: string = '/admin/product/categories'
  static brandApi = null

  static getInstance(): BrandApi {
    if (this.brandApi === null) {
      return new BrandApi()
    }
    return this.brandApi
  }

  save(body: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: BrandApi.URL_PREFIX,
      method: HttpMethod.POST,
      data: body
    })
  }

  deleteByIds(ids: number[]): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: BrandApi.URL_PREFIX + `/${ids.join(',')}`,
      method: HttpMethod.DELETE
    })
  }

  updateById(id: number, body: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: BrandApi.URL_PREFIX + `/${id}`,
      method: HttpMethod.PUT,
      data: body
    })
  }

  getById(id: number): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: BrandApi.URL_PREFIX + `/${id}`,
      method: HttpMethod.GET
    })
  }

  getListByPageAndParam(params: any): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: BrandApi.URL_PREFIX,
      method: HttpMethod.GET,
      params: params
    })
  }
}

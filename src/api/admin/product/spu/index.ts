import HttpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/enums'
import { AxiosResponse } from 'axios'
import BaseApiInterface from '@/api'

export default class SpuApi implements BaseApiInterface {
  static URL_PREFIX: string = '/admin/product/spus'
  static spuApi = null

  static getInstance(): SpuApi {
    if (this.spuApi === null) {
      return new SpuApi()
    }
    return this.spuApi
  }

  save(body: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: SpuApi.URL_PREFIX,
      method: HttpMethod.POST,
      data: body
    })
  }

  deleteByIds(ids: number[]): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: SpuApi.URL_PREFIX + `/${ids.join(',')}`,
      method: HttpMethod.DELETE
    })
  }

  updateById(id: number, body: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: SpuApi.URL_PREFIX + `/${id}`,
      method: HttpMethod.PUT,
      data: body
    })
  }

  getById(id: number): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: SpuApi.URL_PREFIX + `/${id}`,
      method: HttpMethod.GET
    })
  }

  getListByPageAndParam(params: any): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: SpuApi.URL_PREFIX,
      method: HttpMethod.GET,
      params: params
    })
  }
}

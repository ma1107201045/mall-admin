import HttpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/enums/httpMethod.ts'
import { AxiosResponse } from 'axios'

export class LogApi {
  static URL_PREFIX: string = '/admin/system/logs'
  static logApi = null

  static getInstance(): LogApi {
    if (this.logApi === null) {
      return new LogApi()
    }
    return this.logApi
  }

  deleteByIds(ids: number[]): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: LogApi.URL_PREFIX + `/${ids.join(',')}`,
      method: HttpMethod.DELETE
    })
  }

  getListByPageAndParam(param: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: LogApi.URL_PREFIX,
      method: HttpMethod.GET,
      params: param
    })
  }
}

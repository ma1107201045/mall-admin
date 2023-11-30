import HttpClient from '@/utils/httpClient.ts'
import { AxiosResponse } from 'axios'
import { HttpMethod } from '@/enums'

export class LogApi {
  static URL_PREFIX: string = '/admin/info/info-logs'
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

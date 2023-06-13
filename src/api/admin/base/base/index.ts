import { AxiosResponse } from 'axios'
import HttpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/utils/httpMethod.ts'

export default class BaseApi {
  static URL_PREFIX: string = '/admin/base/bases'

  static getInstance(): BaseApi {
    return new BaseApi()
  }

  getMenu(): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: BaseApi.URL_PREFIX + '/menu',
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

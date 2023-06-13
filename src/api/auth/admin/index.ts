import { AxiosResponse } from 'axios'
import HttpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/utils/httpMethod.ts'

export default class AdminApi {
  static URL_PREFIX: string = '/auth/admin'

  static getInstance(): AdminApi {
    return new AdminApi()
  }

  login(form: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: AdminApi.URL_PREFIX + '/login',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      method: HttpMethod.POST,
      data: form
    })
  }

  logout(): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: AdminApi.URL_PREFIX + '/logout',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      method: HttpMethod.POST
    })
  }
}

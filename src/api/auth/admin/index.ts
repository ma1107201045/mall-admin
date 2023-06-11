import { AxiosResponse } from 'axios'
import httpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/utils/httpMethod.ts'

export default class AdminApi {
  static URL_PREFIX: string = '/auth/admin'

  static getInstance(): AdminApi {
    return new AdminApi()
  }

  login(form: object): Promise<AxiosResponse<any, any>> {
    return httpClient({
      url: AdminApi.URL_PREFIX + '/login',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      method: HttpMethod.POST,
      data: form
    })
  }

  logout(): Promise<AxiosResponse<any, any>> {
    return httpClient({
      url: AdminApi.URL_PREFIX + '/logout',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      method: HttpMethod.POST
    })
  }
}

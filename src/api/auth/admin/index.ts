import { AxiosResponse } from 'axios'
import HttpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/enums'

export default class AdminApi {
  static URL_PREFIX: string = '/auth/admin'

  static getInstance(): AdminApi {
    return new AdminApi()
  }

  login(form: object): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: AdminApi.URL_PREFIX + '/login',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: HttpMethod.POST,
      data: form
    })
  }

  getBase64ImageCaptcha(): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: AdminApi.URL_PREFIX + '/get-base64-image-captcha',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: HttpMethod.GET
    })
  }

  getBinImageCaptcha(): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: AdminApi.URL_PREFIX + '/get-base64-image-captcha',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: HttpMethod.GET
    })
  }

  logout(): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: AdminApi.URL_PREFIX + '/logout',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: HttpMethod.POST
    })
  }
}

import HttpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/enums'
import { AxiosResponse } from 'axios'

export default class MemberApi {
  static URL_PREFIX: string = '/admin/member/members'
  static memberApi: null = null

  static getInstance(): MemberApi {
    if (this.memberApi === null) {
      return new MemberApi()
    }
    return this.memberApi
  }

  updateEnableById(id: number): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: MemberApi.URL_PREFIX + `/${id}`,
      method: HttpMethod.PATCH
    })
  }

  getListByPageAndParam(params: any): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: MemberApi.URL_PREFIX,
      method: HttpMethod.GET,
      params: params
    })
  }
}

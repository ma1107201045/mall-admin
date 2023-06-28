import { AxiosResponse } from 'axios'
import HttpClient from '@/utils/httpClient.ts'
import { HttpMethod } from '@/enums'

export default class FileApi {
  static URL_PREFIX: string = '/admin/file/files'
  static fileApi = null

  static getInstance(): FileApi {
    if (this.fileApi === null) {
      return new FileApi()
    }
    return this.fileApi
  }

  upload(file: Blob, fileName: string): Promise<AxiosResponse<any, any>> {
    let formData = new FormData()
    formData.append('file', file, fileName)
    return HttpClient({
      url: FileApi.URL_PREFIX,
      method: HttpMethod.POST,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData
    })
  }

  deleteFile(fileName: string): Promise<AxiosResponse<any, any>> {
    return HttpClient({
      url: FileApi.URL_PREFIX + `${fileName}`,
      method: HttpMethod.DELETE
    })
  }

  uploadImage(file: Blob, fileName: string): Promise<AxiosResponse<any, any>> {
    let formData = new FormData()
    formData.append('image', <Blob>file, fileName)
    return HttpClient({
      url: FileApi.URL_PREFIX + 'image',
      method: HttpMethod.POST,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData
    })
  }
}

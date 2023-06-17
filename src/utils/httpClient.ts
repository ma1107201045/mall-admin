import Axios from 'axios'
import { Path } from '@/enums/path.ts'
import { AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { HttpMethod } from '@/enums/httpMethod.ts'

const HttpClient: AxiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})

// 添加请求拦截器
HttpClient.interceptors.request.use(
  config => {
    //服务器要求GET请求Content-Type=application/x-www-form-urlencoded
    if (config.method === HttpMethod.GET.toLowerCase()) {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
  },
  error => Promise.reject(error)
)

// 添加响应拦截器
HttpClient.interceptors.response.use(
  response => response,
  error => {
    try {
      let code = error.code
      if (code === 'ECONNABORTED') {
        ElMessage.error('网络连接超时')
      } else if (code === 'ERR_NETWORK') {
        ElMessage.error('网关连接错误')
      } else if (error.response) {
        let data = error.response.data
        let code = data.code
        let message = data.message
        ElMessage.error(`业务码${code}，${message}`)
        if (code === 401) {
          router
            .push({ path: Path.INDEX + '/error', query: { id: 401 } })
            .then(value => console.log(value))
        } else if (code === 403) {
          router
            .push({ path: Path.INDEX + '/error', query: { id: 403 } })
            .then(value => console.log(value))
        } else if (code === 404) {
          router
            .push({ path: Path.INDEX + '/error', query: { id: 404 } })
            .then(value => console.log(value))
        } else if (code === 500 && message === 'Internal Server Error') {
          router
            .push({ path: Path.INDEX + '/error', query: { id: 500 } })
            .then(value => console.log(value))
        }
      } else {
        ElMessage.error('未知异常')
      }
      return Promise.reject(error)
    } catch (error) {
      console.log(error)
      ElMessage.error('未知异常')
      return Promise.reject(error)
    }
  }
)

// 导出 axios 实例
export default HttpClient

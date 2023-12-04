import Axios from 'axios'
import { AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'

const HttpClient: AxiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})

// 添加请求拦截器
HttpClient.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

// 添加响应拦截器
HttpClient.interceptors.response.use(
  successRes => {
    try {
      if (successRes.data.code !== 200) {
        ElMessage.error(successRes.data.message)
        return Promise.reject(successRes)
      }
    } catch (error) {
      ElMessage.error('未知异常')
      return Promise.reject(error)
    }
    return successRes
  },
  errorRes => {
    try {
      let code = errorRes.code
      if (code === 'ERR_NETWORK') {
        ElMessage.error('网关连接错误')
      } else if (code === 'ECONNABORTED') {
        ElMessage.error('网络连接超时')
      } else if (errorRes.response) {
        let data = errorRes.response.data
        let code = data.code
        let message = data.message
        ElMessage.error(`状态码【${code}】，${message}`)
        if (code === 401) {
          router.push({ name: 'AdminError', query: { id: 401 } }).then(value => console.log(value))
        } else if (code === 403) {
          router.push({ name: 'AdminError', query: { id: 403 } }).then(value => console.log(value))
        } else if (code === 404) {
          router.push({ name: 'AdminError', query: { id: 404 } }).then(value => console.log(value))
        }
      } else {
        ElMessage.error('未知异常')
      }
      return Promise.reject(errorRes)
    } catch (error) {
      ElMessage.error('未知异常')
      return Promise.reject(error)
    }
  }
)

// 导出 axios 实例
export default HttpClient

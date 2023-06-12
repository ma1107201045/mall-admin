import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'
// 配置新建一个 axios 实例
const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})
// 添加请求拦截器
httpClient.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么 token
    //if (Session.get('token')) {
    //	(<any>config.headers).common['Authorization'] = `${Session.get('token')}`;
    //}
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
httpClient.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // 对响应错误做点什么
    if (error.message.indexOf('timeout') != -1) {
      ElMessage.error('网络超时')
    } else if (error.message == 'Network Error') {
      ElMessage.error('网络连接错误')
    } else {
      let data = error.response.data
      if (data) {
        let bizCode = data.bizCode
        ElMessage.error(`业务码${data.bizCode}，${data.message}`)
        if (bizCode === 401) {
          router.push('/auth/401').then(r => console.log(r))
        } else if (bizCode === 403) {
          router.push('/auth/403').then(r => console.log(r))
        } else if (bizCode === 404) {
          router.push('/auth/404').then(r => console.log(r))
        }
      } else {
        ElMessage.error('未知异常')
      }
    }
    return Promise.reject(error)
  }
)

// 导出 axios 实例
export default httpClient

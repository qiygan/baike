import axios from 'axios'

const service = axios.create({
  baseURL: process.env.baseUrl,
  timeout: 5000
})

service.interceptors.request.use(config => {
  config.headers['Authorization'] = 'Basic baike'
  return config
}, error => {
  console.log('request出错了=>' + error);
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  if (response.status === 200) {
    return response.data
  }
  return response
}, error => {
  console.log('response出错了=>' + error);
  return Promise.reject(error)
})

export default service

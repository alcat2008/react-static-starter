import axios from 'axios'
import { baseUrl } from '../config'

let fetcher = axios.create({
  method: 'post',
  baseURL: baseUrl,
  // withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
})

fetcher.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

fetcher.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default fetcher.post
